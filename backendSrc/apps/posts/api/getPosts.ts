import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { postsSchema, postsTable } from "../models/Post";
import { drizzle } from "drizzle-orm/d1";
import { TPost, TPostsResponse } from "@/shared/types";

const RESPONSE_SCHEMA = z.array(
  postsSchema
) satisfies z.ZodType<TPostsResponse>;

export class GetPostsApi extends OpenAPIRoute {
  schema = {
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: RESPONSE_SCHEMA,
          },
        },
      },
    },
  };

  async handle(_request: Request, env: Env) {
    const db = drizzle(env.DB);
    const posts: TPost[] = await db.select().from(postsTable);

    return Response.json(RESPONSE_SCHEMA.parse(posts));
  }
}
