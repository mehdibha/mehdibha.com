import { Link } from "@/components/core/link";
import { Container, Item } from "@/components/fade-in";
import { List } from "@/components/list";
import { writing, lab } from "@/app/source";
import { projects } from "@/content/projects";

export default function Home() {
  const allPosts = writing.getPages();
  const allLabs = lab.getPages();

  return (
    <Container>
      <Item as="h1" className="text-lg font-semibold">
        Mehdi Ben Hadj Ali
      </Item>
      <Item as="p" className="text-fg-muted">
        Design Engineer
      </Item>
      <Item as="p" className="mt-10 text-sm">
        Currently making the web better at{" "}
        <Link href="https://dotui.org" target="_blank">
          dotUI
        </Link>
        .<br />I like building accessible, polished, and modern user interfaces.
      </Item>
      <Item as="h2" className="mb-2 mt-10 text-sm text-fg-muted">
        Projects
      </Item>
      <List items={projects} />
      {allLabs.length > 0 && (
        <>
          <Item as="h2" className="mt-10 text-sm text-fg-muted">
            Lab
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
          <Item as="h2" className="mt-10 text-sm text-fg-muted">
            Writing
          </Item>
          <List
            items={allPosts.map((post) => ({
              title: post.data.title,
              href: post.url,
            }))}
          />
        </>
      )}
    </Container>
  );
}
