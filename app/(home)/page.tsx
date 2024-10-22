import { Link } from "@/components/core/link";
import { Item } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { List } from "@/components/list";
import { writing, lab } from "@/app/source";
import { projects } from "@/content/projects";

export default function Home() {
  const allPosts = writing.getPages();
  const allLabs = lab.getPages();

  return (
    <div>
      <Item>
        <h1 className="text-lg font-semibold">Mehdi Ben Hadj Ali</h1>
      </Item>
      <Item>
        <p className="text-fg-muted">Design Engineer</p>
      </Item>
      <Item>
        <p className="mt-10 text-sm">
          Currently making the web better at{" "}
          <Link href="https://dotui.org" target="_blank">
            dotUI
          </Link>
          .<br />I like building accessible, polished, and modern user
          interfaces.
        </p>
      </Item>
      <Item>
        <h2 className="mb-2 mt-10 text-sm text-fg-muted">Projects</h2>
      </Item>
      <List items={projects} />
      {allLabs.length > 0 && (
        <>
          <Item>
            <h2 className="mb-2 mt-10 text-sm text-fg-muted">Lab</h2>
          </Item>
          <List
            items={allLabs.map((lab) => ({
              title: lab.data.title,
              href: lab.url,
            }))}
          />
        </>
      )}
      {allPosts.length > 0 && (
        <>
          <Item>
            <h2 className="mb-2 mt-10 text-sm text-fg-muted">Writing</h2>
          </Item>
          <List
            items={allPosts.map((post) => ({
              title: post.data.title,
              href: post.url,
            }))}
          />
        </>
      )}
      <Item>
        <Footer />
      </Item>
    </div>
  );
}
