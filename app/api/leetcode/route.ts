import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "atharvakhadake";

const query = `
  query getLeetCodeData($username: String!, $year: Int) {
    matchedUser(username: $username) {
      username

      profile {
        realName
        ranking
        reputation
      }

      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }

        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }

      userCalendar(year: $year) {
        activeYears
        streak
        totalActiveDays
        submissionCalendar
      }
    }

    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch(
      "https://leetcode.com/graphql/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Referer: "https://leetcode.com/",
        },

        body: JSON.stringify({
          query,
          variables: {
            username: LEETCODE_USERNAME,
            year: new Date().getFullYear(),
          },
        }),

        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch LeetCode data",
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        {
          error: "LeetCode returned an error",
          details: data.errors,
        },
        {
          status: 500,
        }
      );
    }

    if (!data.data?.matchedUser) {
      return NextResponse.json(
        {
          error: `LeetCode user "${LEETCODE_USERNAME}" not found`,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(data.data);

  } catch (error) {
    console.error("LeetCode API error:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch LeetCode data",
      },
      {
        status: 500,
      }
    );
  }
}