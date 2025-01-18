import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { Env } from "../../../../worker-configuration";
import { User } from "../models/User";
import { verifyToken } from "../helpers";
import { userSchema } from "../models/User.type";

const updateUserDataSchema = userSchema.omit({
  id: true,
  is_active: true,
  email: true,
  created_at: true,
  updated_at: true,
  telegram_id: true,
});

export class UpdateUserData extends OpenAPIRoute {
  schema = {
    security: [
      {
        BearerAuth: [],
      },
    ],
    requests: {
      body: {
        content: {
          'application/json': {
            schema: updateUserDataSchema
          }
        }
      }
    },
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
    const data = await this.getValidatedData<typeof this.schema>();
    const tokenData = await verifyToken(request, env, true);
    const user = await User.query().where('id', tokenData.uid).first();
    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    await User.query().where('id', tokenData.uid).update(data.body);
    await user.refresh();

    return Response.json({
      success: true,
      user: user.toJSON(),
    });
  }
}