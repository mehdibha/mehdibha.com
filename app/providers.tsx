"use client";

import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { RouterProvider } from "react-aria-components";
import { Container } from "@/components/fade-in";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <ViewTransitions>
      <RouterProvider navigate={router.push}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>{children}</Container>
        </ThemeProvider>
      </RouterProvider>
    </ViewTransitions>
  );
}
