import registerAuthRoutes from './apps/auth/urls'
import registerSwaggerRoutes from './apps/swagger/urls'
import { RouterType } from './router'

export function registerAllRoutes(router: RouterType) {
  registerAuthRoutes(router)
  registerSwaggerRoutes(router)
}
