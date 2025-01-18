import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { Env } from "../../../../worker-configuration";
import { User } from "../models/User";
import { verifyToken } from "../helpers";
import { userSchema } from "../models/User.type";

export class SubmitRegistration extends OpenAPIRoute {
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
    if (user) {
      return Response.json({ error: 'User already exists' }, { status: 400 });
    }

    const createdUser = await User.query().create({
      id: tokenData.uid,
      email: tokenData.email,
    });
    await createdUser.refresh();

    return Response.json({
      success: true,
      user: createdUser.toJSON(),
    });
  }
}