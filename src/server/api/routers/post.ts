import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({});
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation( async({ ctx, input }) => {
      return await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          userId: ctx.session.user.id,
        },
      });
    }),
  getById: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.post.findUnique({
        where: { id: input.postId },
      });
    }),
  deletePost: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.delete({
        where: {
          id: input.postId,
        },
      });
    }),
  updatePost: protectedProcedure
    .input(
      z.object({ postId: z.string(), title: z.string(), content: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.update({
        where: { id: input.postId },
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),
});
