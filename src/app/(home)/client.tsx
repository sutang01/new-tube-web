"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "sutang666" });
  return (
    <div>
      Page Client {data.greeting}
    </div>
  );
};
