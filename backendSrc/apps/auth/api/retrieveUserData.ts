import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { Env } from "../../../../worker-configuration";
import { User } from "../models/User";
import { verifyToken } from "../helpers";
import { userSchema } from "../models/User.type";

export class RetrieveUserData extends OpenAPIRoute {
  schema = {
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: z.object({
              success: z.boolean(),
              user: userSchema
            })
          }
        }
      },
    }
  }

  async handle(request: Request, env: Env) {
    const tokenData = await verifyToken(request, env, true);
    const user = await User.query().where('id', tokenData.uid).first();
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    return Response.json(user.toJSON());
  }
}