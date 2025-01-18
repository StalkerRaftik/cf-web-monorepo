import { RouterType } from '../../router'


export default function registerRoutes(router: RouterType) {
  router.get('/api/docs/spec', () => Response.json(router.schema))
  router.get('/api/docs', () => new Response(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>API Documentation</title>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css" />
          <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
        </head>
        <body>
          <div id="swagger-ui"></div>
          <script>
            window.onload = () => {
              SwaggerUIBundle({
                url: '/api/docs/spec',
                dom_id: '#swagger-ui',
              });
            };
          </script>
        </body>
      </html>`,
    {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
  ))
} 