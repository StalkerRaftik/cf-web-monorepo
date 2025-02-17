import { Router } from 'itty-router'
import { fromIttyRouter } from 'chanfana'

const router_ = Router()
export const router = fromIttyRouter(router_)
router.registry.registerComponent('securitySchemes', 'BearerAuth', {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT'
})

export type RouterType = typeof router

