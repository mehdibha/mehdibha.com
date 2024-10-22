"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/cn";
import { Item } from "./fade-in";

export const List = ({
  items,
}: {
  items: { title: string; description?: string; hint?: string; href: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="text-sm">
      {items.map((item, index) => (
        <Item
          key={index}
          onHoverStart={() => {
            setHoveredIndex(index);
          }}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <Link
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            className="w-full"
          >
            <div
              className={cn(
                "flex items-center justify-between border-b py-3 duration-200",
                hoveredIndex !== null && hoveredIndex !== index
                  ? "!opacity-50"
                  : ""
              )}
            >
              <div className="flex flex-col">
                <span>{item.title}</span>
                {item.description && (
                  <span className="text-fg-muted">{item.description}</span>
                )}
              </div>
              {item.hint && (
                <span className="text-right text-fg-muted">{item.hint}</span>
              )}
            </div>
          </Link>
        </Item>
      ))}
    </div>
  );
};
