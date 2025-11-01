import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("caseStudies").order("desc").collect();
  },
});

export const getById = query({
  args: { id: v.id("caseStudies") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    client: v.string(),
    industry: v.string(),
    challenge: v.string(),
    solution: v.string(),
    results: v.array(v.string()),
    metrics: v.array(v.object({
      label: v.string(),
      value: v.string(),
    })),
    image: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("caseStudies", args);
  },
});
