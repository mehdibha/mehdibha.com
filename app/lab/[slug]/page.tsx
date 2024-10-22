import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/mdx-components";
import { lab } from "@/app/source";

export default async function LabPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = lab.getPage([params.slug]);
  if (!post) return notFound();

  const MDXContent = post.data.body;

  return (
    <div>
      <p className="text-lg font-semibold">Mehdi Ben Hadj Ali</p>
      <p className="text-fg-muted">Design Engineer</p>
      <h1 className="mt-10 text-2xl font-bold">{post.data.title}</h1>
      {post.data.date && (
        <p className="text-fg-muted">
          Published on {new Date(post.data.date).toDateString()}
        </p>
      )}
      <div className="mt-10">
        <MDXContent components={mdxComponents} />
      </div>
    </div>
  );
}
