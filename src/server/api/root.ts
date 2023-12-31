import { exampleRouter } from "y/server/api/routers/example";
import { createTRPCRouter } from "y/server/api/trpc";
import { postRouter } from "./routers/post";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  post: postRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
