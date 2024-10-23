"use client";

import { motion, HTMLMotionProps, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

function Container(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      {...props}
    />
  );
}

function Item({
  ...props
}: { disableAnimation?: boolean } & HTMLMotionProps<"div">) {
  return <motion.div variants={item} {...props} />;
}

export { Container, Item };
