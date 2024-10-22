import { Undo2Icon } from "lucide-react";
import { Link } from "next-view-transitions";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-screen-sm gap-5 pt-20 xl:max-w-[calc(theme(screens.sm)+400px)]">
      <div className="hidden xl:block xl:w-[180px]">
        <Link
          href="/"
          className="flex items-center gap-2 italic [&>svg]:size-4"
        >
          <Undo2Icon /> Home
        </Link>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
