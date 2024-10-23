"use client";

import { motion } from "framer-motion";
import { Tab, TabList, Tabs } from "react-aria-components";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

export default function AnimatedTabs() {
  return (
    <Tabs className="w-fit" defaultSelectedKey={tabs[0].id}>
      <TabList className="-mx-1 flex" items={tabs}>
        {(tab) => (
          <Tab
            id={tab.id}
            className="text-md relative cursor-pointer touch-none px-3 py-1.5 text-sm outline-none transition"
          >
            {({ isSelected, isFocusVisible }) => (
              <>
                {tab.label}
                {isSelected && (
                  <motion.span
                    layoutId="tab-bg"
                    className={cn(
                      "absolute left-0 top-0 z-[-1] size-full bg-red-500",
                      isFocusVisible &&
                        "ring-2 ring-border-focus ring-offset-2 ring-offset-bg"
                    )}
                    style={{
                      borderRadius: "999px",
                    }}
                  />
                )}
              </>
            )}
          </Tab>
        )}
      </TabList>
    </Tabs>
  );
}
