import { Router } from 'itty-router'
import { fromIttyRouter } from 'chanfana'
import { sutando } from 'sutando'
import ClientD1 from 'knex-cloudflare-d1';
import { Env } from '../worker-configuration';

const router_ = Router()
export const router = fromIttyRouter(router_)
router.all('*', (request: Request, env: Env) => {
    sutando.addConnection({
        client: ClientD1,
        connection: {
            database: env.DB
        },
        useNullAsDefault: true,
    });
})
router.registry.registerComponent('securitySchemes', 'BearerAuth', {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT'
})

export type RouterType = typeof router

