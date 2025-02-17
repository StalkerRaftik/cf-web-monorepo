import { registerAllRoutes } from "./appReg";
import { router } from "./router";

// Register all routes
registerAllRoutes(router);
// Static assets fallback
router.all("*", (request: Request, env: Env) => env.ASSETS.fetch(request));

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const response = await router.fetch(request, env, ctx);

    return response;
  },
};
