import registerSwaggerRoutes from "./apps/swagger/urls";
import registerPostsRoutes from "./apps/posts/urls";
import { RouterType } from "./router";

export function registerAllRoutes(router: RouterType) {
  registerSwaggerRoutes(router);
  registerPostsRoutes(router);
}
