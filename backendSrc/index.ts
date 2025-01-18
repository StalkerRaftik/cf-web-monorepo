import { registerAllRoutes } from './appReg'
import { router } from './router'
import { Env } from '../worker-configuration'

// Register all routes
registerAllRoutes(router)
// Static assets fallback
router.all('*', (request: Request, env: Env) => env.ASSETS.fetch(request))

export default {
    async fetch(request: Request, env: Env) {
        // CORS headers middleware
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        };

        if (request.method === 'OPTIONS') {
            return new Response('ok', { headers: corsHeaders });
        }

        const response = await router.fetch(request, env)


        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: { ...Object.fromEntries(response.headers), ...corsHeaders },
        });
    }
}
