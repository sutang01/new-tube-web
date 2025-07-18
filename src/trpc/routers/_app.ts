import { z } from "zod";
import { createTRPCRouter,protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      console.log({ fromContext: opts.ctx.clerkUserId });
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
