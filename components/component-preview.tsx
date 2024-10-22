import { cn } from "@/lib/cn";

export type ComponentPreviewProps = {
  name: string;
} & React.HTMLAttributes<HTMLDivElement>;

export async function ComponentPreview({
  name,
  className,
  ...props
}: ComponentPreviewProps) {
  let Component: React.ComponentType | null = null;

  try {
    Component = (await import(`./lab/${name}`)).default;
  } catch (err) {
    console.error(err);
  }

  return (
    <div
      {...props}
      className={cn(
        "flex min-h-[200px] items-center justify-center rounded-lg border p-6",
        className
      )}
    >
      {Component ? <Component /> : <p>Component not found</p>}
    </div>
  );
}
