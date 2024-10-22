export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-screen-sm px-4 pt-20">{children}</div>;
}
