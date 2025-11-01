import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").order("desc").collect();
  },
});

export const getById = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    author: v.string(),
    category: v.string(),
    image: v.optional(v.string()),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("blogPosts", args);
  },
});
