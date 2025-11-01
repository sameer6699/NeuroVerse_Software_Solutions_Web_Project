import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    companies: defineTable({
      name: v.string(),
      logo: v.optional(v.string()),
      industry: v.optional(v.string()),
    }),

    caseStudies: defineTable({
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
    }),

    blogPosts: defineTable({
      title: v.string(),
      excerpt: v.string(),
      content: v.string(),
      author: v.string(),
      category: v.string(),
      image: v.optional(v.string()),
      published: v.boolean(),
    }),

    contactRequests: defineTable({
      name: v.string(),
      email: v.string(),
      company: v.optional(v.string()),
      message: v.string(),
      requestType: v.string(),
      status: v.string(),
    }),
  },
  {
    schemaValidation: false,
  },
);

export default schema;