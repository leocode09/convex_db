import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createDay = mutation({
    args: {
        text: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("days", {
            text: args.text,
        })
    }
})