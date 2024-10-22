import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { posts, lab as labPosts } from "@/.source";

export const writing = loader({
  baseUrl: "/writing",
  source: createMDXSource(posts, []),
});

export const lab = loader({
  baseUrl: "/lab",
  source: createMDXSource(labPosts, []),
});
