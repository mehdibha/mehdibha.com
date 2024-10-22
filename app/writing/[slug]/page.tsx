import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/mdx-components";
import { writing } from "@/app/source";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = writing.getPage([params.slug]);
  if (!post) return notFound();

  const MDXContent = post.data.body;

  return (
    <div>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
