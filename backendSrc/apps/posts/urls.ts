import { RouterType } from "../../router";
import { GetPostsApi } from "./api/getPosts";

export default function registerPostsRoutes(router: RouterType) {
  router.get("/api/posts/", GetPostsApi);
}
