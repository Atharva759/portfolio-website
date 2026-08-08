"use client";

import { TECH_STACK } from "@/constants/techStack";

type Props = {
  tech: keyof typeof TECH_STACK;
};

export default function TechChip({ tech }: Props) {
  const item = TECH_STACK[tech];
  const Icon = item.icon;

  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        rounded-full
        border
        border-black/10
        bg-white
        px-4
        py-2
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-black/20
        hover:shadow-md
      "
    >
      <Icon
        size={16}
        color={item.color}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span className="text-sm font-medium text-gray-700">
        {item.label}
      </span>
    </div>
  );
}