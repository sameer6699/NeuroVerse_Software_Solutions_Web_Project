import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    requestType: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contactRequests", {
      ...args,
      status: "new",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contactRequests").order("desc").collect();
  },
});
