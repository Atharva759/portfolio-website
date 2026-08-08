"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import {
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";

type DifficultyStat = {
  difficulty: string;
  count: number;
  submissions: number;
};

type UserCalendar = {
  streak: number;
  totalActiveDays: number;
  submissionCalendar: string;
};

type LeetCodeData = {
  matchedUser: {
    username: string;
    profile: {
      realName: string | null;
      ranking: number;
      reputation: number;
    };
    submitStatsGlobal: {
      acSubmissionNum: DifficultyStat[];
      totalSubmissionNum: DifficultyStat[];
    };
    userCalendar: UserCalendar;
  };
};

type HeatmapDay = {
  date: Date;
  count: number;
};

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildCurrentYearHeatmap(
  submissionCalendar: string
): HeatmapDay[] {
  const calendar = JSON.parse(
    submissionCalendar || "{}"
  ) as Record<string, number>;

  const now = new Date();
  const currentYear = now.getFullYear();

  const submissions: Record<string, number> = {};

  Object.entries(calendar).forEach(
    ([timestamp, count]) => {
      const date = new Date(
        Number(timestamp) * 1000
      );

      if (
        date.getUTCFullYear() !==
        currentYear
      ) {
        return;
      }

      const key = dateKey(date);

      submissions[key] =
        (submissions[key] ?? 0) + count;
    }
  );

  const startDate = new Date(
    Date.UTC(currentYear, 0, 1)
  );

  const endDate = new Date(
    Date.UTC(
      currentYear,
      now.getMonth(),
      now.getDate()
    )
  );

  startDate.setUTCDate(
    startDate.getUTCDate() -
      startDate.getUTCDay()
  );

  const days: HeatmapDay[] = [];
  const current = new Date(startDate);

  while (current <= endDate) {
    const key = dateKey(current);

    days.push({
      date: new Date(current),
      count: submissions[key] ?? 0,
    });

    current.setUTCDate(
      current.getUTCDate() + 1
    );
  }

  return days;
}

function getDifficulty(
  stats: DifficultyStat[],
  difficulty: string
) {
  return (
    stats.find(
      (item) =>
        item.difficulty === difficulty
    )?.count ?? 0
  );
}

function getHeatmapColor(
  count: number,
  maxCount: number
) {
  if (count === 0) {
    return "bg-[#161b22]";
  }

  const ratio = count / maxCount;

  if (ratio <= 0.2) {
    return "bg-[#0e4429]";
  }

  if (ratio <= 0.4) {
    return "bg-[#006d32]";
  }

  if (ratio <= 0.7) {
    return "bg-[#26a641]";
  }

  return "bg-[#39d353]";
}

export default function LeetCode() {
  const [data, setData] =
    useState<LeetCodeData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    async function fetchLeetCode() {
      try {
        const response = await fetch(
          "/api/leetcode"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch LeetCode data"
          );
        }

        const result =
          (await response.json()) as LeetCodeData;

        setData(result);
      } catch (error) {
        console.error(
          "LeetCode error:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchLeetCode();
  }, []);

  if (loading) {
    return (
      <section
        id="leetcode"
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-[#0d1117] border border-[#30363d] p-8 animate-pulse">
            <div className="h-5 w-32 bg-[#21262d] rounded" />

            <div className="h-8 w-48 bg-[#21262d] rounded mt-4" />

            <div className="h-32 bg-[#161b22] rounded-2xl mt-8" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !data?.matchedUser) {
    return (
      <section
        id="leetcode"
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-black/10 p-8">
            <div className="flex items-center gap-3 text-gray-500">
              <SiLeetcode
                className="text-[#FFA116]"
                size={24}
              />

              Unable to load LeetCode activity.
            </div>
          </div>
        </div>
      </section>
    );
  }

  const user = data.matchedUser;

  const acceptedStats =
    user.submitStatsGlobal
      .acSubmissionNum;

  const solved = getDifficulty(
    acceptedStats,
    "All"
  );

  const easy = getDifficulty(
    acceptedStats,
    "Easy"
  );

  const medium = getDifficulty(
    acceptedStats,
    "Medium"
  );

  const hard = getDifficulty(
    acceptedStats,
    "Hard"
  );

  const heatmap =
    buildCurrentYearHeatmap(
      user.userCalendar
        .submissionCalendar
    );

  const currentYearSubmissions =
    heatmap.reduce(
      (total, day) =>
        total + day.count,
      0
    );

  const currentYearActiveDays =
    heatmap.filter(
      (day) => day.count > 0
    ).length;

  const maxSubmissions = Math.max(
    ...heatmap.map(
      (day) => day.count
    ),
    1
  );

  const columns: HeatmapDay[][] = [];

  for (
    let i = 0;
    i < heatmap.length;
    i += 7
  ) {
    columns.push(
      heatmap.slice(i, i + 7)
    );
  }

  const monthLabels: {
    label: string;
    column: number;
  }[] = [];

  let previousMonth = -1;

  columns.forEach(
    (column, index) => {
      const firstDay = column[0];

      if (!firstDay) return;

      const month =
        firstDay.date.getUTCMonth();

      if (
        month !== previousMonth
      ) {
        monthLabels.push({
          label:
            firstDay.date.toLocaleString(
              "en-US",
              {
                month: "short",
                timeZone: "UTC",
              }
            ),
          column: index,
        });

        previousMonth = month;
      }
    }
  );

  return (
    <section
      id="leetcode"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-6
          mb-8
        ">
          <div>
            <div className="
              flex
              items-center
              gap-3
            ">
              <SiLeetcode
                size={26}
                className="text-[#FFA116]"
              />

              <span className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-gray-400
              ">
                Problem Solving
              </span>
            </div>

            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-3
              tracking-tight
            ">
              LeetCode
            </h2>
          </div>

          <a
            href={`https://leetcode.com/u/${user.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-500
              hover:text-black
              transition
            "
          >
            @{user.username}

            <FiArrowUpRight
              size={15}
            />
          </a>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            rounded-3xl
            border
            border-[#30363d]
            bg-[#0d1117]
            text-white
            overflow-hidden
          "
        >
          <div className="
            px-6
            md:px-8
            py-5
            border-b
            border-[#21262d]
            flex
            items-center
            justify-between
            gap-4
          ">
            <div className="
              flex
              items-center
              gap-3
            ">
              <div className="
                h-10
                w-10
                rounded-full
                bg-[#161b22]
                border
                border-[#30363d]
                flex
                items-center
                justify-center
              ">
                <SiLeetcode
                  size={21}
                  className="text-[#FFA116]"
                />
              </div>

              <div>
                <p className="
                  text-sm
                  font-semibold
                ">
                  {user.profile.realName ||
                    user.username}
                </p>

                <p className="
                  text-xs
                  text-[#8b949e]
                  mt-0.5
                ">
                  @{user.username}
                </p>
              </div>
            </div>

            <div className="
              hidden
              sm:flex
              items-center
              gap-2
              text-xs
              text-[#8b949e]
            ">
              <span className="
                h-2
                w-2
                rounded-full
                bg-[#39d353]"
              />

              Active
            </div>
          </div>

          <div className="
            px-6
            md:px-8
            py-7
            grid
            grid-cols-2
            md:grid-cols-4
            gap-y-7
            gap-x-6
            border-b
            border-[#21262d]
          ">
            <LeetCodeStat
              label="Solved"
              value={solved}
              main
            />

            <LeetCodeStat
              label="Easy"
              value={easy}
              difficulty="easy"
            />

            <LeetCodeStat
              label="Medium"
              value={medium}
              difficulty="medium"
            />

            <LeetCodeStat
              label="Hard"
              value={hard}
              difficulty="hard"
            />
          </div>

          <div className="
            px-6
            md:px-8
            py-7
          ">
            <div className="
              flex
              items-start
              justify-between
              gap-4
              mb-6
            ">
              <div>
                <div className="
                  flex
                  items-center
                  gap-2
                ">
                  <FiActivity
                    size={16}
                    className="text-[#8b949e]"
                  />

                  <h3 className="
                    text-sm
                    font-semibold
                  ">
                    {currentYearSubmissions}{" "}
                    submissions in{" "}
                    {new Date().getFullYear()}
                  </h3>
                </div>

                <p className="
                  text-xs
                  text-[#8b949e]
                  mt-2
                ">
                  {currentYearActiveDays}{" "}
                  active days ·{" "}
                  {user.userCalendar.streak}{" "}
                  day streak
                </p>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <div className="min-w-[520px]">
                <div className="
                  ml-7
                  relative
                  h-5
                  mb-1
                ">
                  {monthLabels.map(
                    (month) => (
                      <span
                        key={`${month.label}-${month.column}`}
                        className="
                          absolute
                          text-[10px]
                          text-[#8b949e]
                        "
                        style={{
                          left: `calc(${month.column} * (100% / ${columns.length}))`,
                        }}
                      >
                        {month.label}
                      </span>
                    )
                  )}
                </div>

                <div className="flex">
                  <div className="
                    w-7
                    shrink-0
                    grid
                    grid-rows-7
                    gap-[3px]
                  ">
                    {[
                      "",
                      "M",
                      "",
                      "W",
                      "",
                      "F",
                      "",
                    ].map(
                      (day, index) => (
                        <span
                          key={index}
                          className="
                            text-[9px]
                            text-[#8b949e]
                            flex
                            items-center
                          "
                        >
                          {day}
                        </span>
                      )
                    )}
                  </div>

                  <div
                    className="
                      flex-1
                      grid
                      gap-[3px]
                    "
                    style={{
                      gridTemplateColumns:
                        `repeat(${columns.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {columns.map(
                      (
                        column,
                        columnIndex
                      ) => (
                        <div
                          key={
                            columnIndex
                          }
                          className="
                            grid
                            grid-rows-7
                            gap-[3px]
                          "
                        >
                          {column.map(
                            (
                              day,
                              dayIndex
                            ) => (
                              <motion.div
                                key={`${dateKey(
                                  day.date
                                )}-${dayIndex}`}
                                initial={{
                                  opacity: 0,
                                }}
                                whileInView={{
                                  opacity: 1,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration:
                                    0.1,
                                }}
                                title={`${day.date.toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    timeZone:
                                      "UTC",
                                  }
                                )} · ${
                                  day.count
                                } ${
                                  day.count ===
                                  1
                                    ? "submission"
                                    : "submissions"
                                }`}
                                className={`
                                  aspect-square
                                  w-full
                                  rounded-[3px]
                                  cursor-pointer
                                  transition-all
                                  duration-150
                                  hover:ring-2
                                  hover:ring-white/30
                                  hover:scale-110
                                  ${getHeatmapColor(
                                    day.count,
                                    maxSubmissions
                                  )}
                                `}
                              />
                            )
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="
              flex
              items-center
              justify-end
              gap-1.5
              mt-5
            ">
              <span className="
                text-[10px]
                text-[#8b949e]
                mr-1
              ">
                Less
              </span>

              <span className="
                w-3
                h-3
                rounded-[3px]
                bg-[#161b22]"
              />

              <span className="
                w-3
                h-3
                rounded-[3px]
                bg-[#0e4429]"
              />

              <span className="
                w-3
                h-3
                rounded-[3px]
                bg-[#006d32]"
              />

              <span className="
                w-3
                h-3
                rounded-[3px]
                bg-[#26a641]"
              />

              <span className="
                w-3
                h-3
                rounded-[3px]
                bg-[#39d353]"
              />

              <span className="
                text-[10px]
                text-[#8b949e]
                ml-1
              ">
                More
              </span>
            </div>
          </div>

          <div className="
            px-6
            md:px-8
            py-4
            border-t
            border-[#21262d]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          ">
            <div className="
              text-xs
              text-[#8b949e]
            ">
              {currentYearActiveDays} active
              days this year
            </div>

            <a
              href={`https://leetcode.com/u/${user.username}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                text-xs
                text-[#8b949e]
                hover:text-white
                transition
              "
            >
              View full profile

              <FiArrowUpRight
                size={13}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LeetCodeStat({
  label,
  value,
  main = false,
  difficulty,
}: {
  label: string;
  value: number;
  main?: boolean;
  difficulty?:
    | "easy"
    | "medium"
    | "hard";
}) {
  const difficultyColor =
    difficulty === "easy"
      ? "text-[#00b8a3]"
      : difficulty === "medium"
      ? "text-[#ffc01e]"
      : difficulty === "hard"
      ? "text-[#ef4743]"
      : "text-white";

  return (
    <div>
      <p
        className={`
          font-bold
          tracking-tight
          ${
            main
              ? "text-3xl md:text-4xl"
              : "text-2xl md:text-3xl"
          }
          ${difficultyColor}
        `}
      >
        {value.toLocaleString()}
      </p>

      <p className="
        text-xs
        text-[#8b949e]
        mt-1.5
      ">
        {label}
      </p>
    </div>
  );
}