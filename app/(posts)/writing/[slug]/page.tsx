import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site-config";
import { truncateOnWord } from "@/lib/string";
import { Footer } from "@/components/footer";
import { mdxComponents } from "@/components/mdx-components";
import { TableOfContents } from "@/components/toc";
import { writing } from "@/app/source";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function WritingPage({ params }: PageProps) {
  const post = writing.getPage([params.slug]);
  if (!post) return notFound();

  const MDXContent = post.data.body;

  return (
    <div className="xl:grid xl:grid-cols-[1fr_180px] xl:gap-5">
      <div className="max-w-screen-sm px-4">
        <p className="text-lg font-semibold">Mehdi Ben Hadj Ali</p>
        <p className="text-fg-muted">Design Engineer</p>
        <h1 className="mt-10 text-xl font-bold">{post.data.title}</h1>
        {post.data.date && (
          <p className="text-sm text-fg-muted">
            Published on {new Date(post.data.date).toDateString()}
          </p>
        )}
        <div className="mt-10">
          <MDXContent components={mdxComponents} />
        </div>
        <Footer />
      </div>
      <div className="hidden xl:block">
        {post.data.toc && post.data.toc.length > 0 && (
          <div className="sticky top-20 max-h-[calc(100dvh-80px)]">
            <TableOfContents toc={post.data.toc} />
          </div>
        )}
      </div>
    </div>
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = writing.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description
        ? truncateOnWord(page.data.description, 148, true)
        : undefined,
      type: "article",
      url: page.url,
      images: [siteConfig.thumbnail],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description
        ? truncateOnWord(page.data.description, 148, true)
        : undefined,
      images: [siteConfig.thumbnail],
      creator: siteConfig.twitter.creator,
    },
  };
}

export function generateStaticParams(): { slug: string }[] {
  return writing.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
