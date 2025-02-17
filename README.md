# CF Web Monorepo

[🇷🇺 Русская версия](README.ru.md)

A modern single-repo SPA web application powered by Cloudflare Workers. This project provides a complete development and deployment solution with zero DevOps overhead.

🌐 **Demo:** https://cf-web-monorepo.whiletruedoend.workers.dev/

## Features

- 🚀 One-click deployment with CI/CD pipeline
- 🔄 Automatic type synchronization between backend and frontend
- 📈 Horizontal scaling out of the box
- 💾 Easy-to-implement caching system
- 🗄️ Seamless connection to storage buckets and databases
- 🛠️ Development and testing environments
- 📚 Auto-generated API documentation

## Prerequisites Setup

1. **Configure wrangler.json:**
   - Modify `wrangler.json` according to your needs
   - Detailed documentation can be found in [Cloudflare Workers docs](https://developers.cloudflare.com/workers/)
   - Reference `wrangler.docs.json` for a quick overview of each configuration option
   - After modifying Wrangler resources (D1, KV, etc.), run:
     ```bash
     npm run cf-typegen
     ```
     This generates TypeScript types for your Worker bindings

2. **Prepare dist folder:**
   - Backend requires the `dist` folder to be present before starting (it loads assets from there)
   - Either create an empty `dist` folder
   - Or build the frontend using `npm run build`

3. **Drizzle Migrations Setup:**
   - Create `.env` file from `.env.example`
   - Set the required environment variables in `.env`

4. **D1 Database Setup:**
   - Create a D1 database in your Cloudflare dashboard
   - Update the D1 configuration in `wrangler.json` with your database details

## Quick Start

### Prerequisites

- Node.js (LTS version recommended)
- npm
- Cloudflare account

### Installation

```bash
npm install
```

### Development

There are several ways to run the development environment:

1. **Combined build and watch mode:**
```bash
npm run build
npm run dev
```

2. **Separate frontend and backend development:**
```bash
npm run fdev  # Frontend development server
npm run dev   # Backend development server
```

This setup allows you to see frontend changes in real-time without rebuilding.

### Deployment

Deploy your application with a single command:

```bash
npm run deploy
```

## API Documentation

Auto-generated API documentation is available at:
```
/api/docs
```

## Database Migrations

To manage your database schema:

```bash
# Generate new migration
npm run makemigrations

# Apply migrations
npm run migrate
```

## Project Structure

```
.
├── src/                    # Frontend source code
├── backendSrc/            # Backend source code
│   ├── migrations/        # Database migrations
│   └── types/            # Backend type definitions
├── shared/                # Shared types and utilities
├── worker-configuration.d.ts  # Worker environment variables interface
├── public/               # Static assets
├── dist/                 # Build output
├── drizzle.config.ts    # Drizzle ORM configuration
├── wrangler.toml        # Cloudflare Workers configuration
├── .dev.vars            # Local development environment variables
├── .env                 # Environment variables
└── tsconfig.json        # TypeScript configuration
```

Each directory serves a specific purpose:
- `src/`: Contains all frontend React components, styles, and assets
- `backendSrc/`: Houses the backend Worker logic, API routes, and services
- `shared/`: Contains types and utilities shared between frontend and backend
- `worker-configuration.d.ts`: TypeScript interface definitions for Worker environment variables
- `public/`: Static files served directly
- `dist/`: Compiled and bundled output
- `drizzle.config.ts`: Database ORM configuration and settings
- `.dev.vars`: Local environment variables for Wrangler development
- `.env`: Production environment variables

## Environment Variables

The project uses different environment files for development and production:

- `.env.development` - Development environment variables
- `.env.production` - Production environment variables
- `.dev.vars` - Backend environment variables for local development with Wrangler

Example files are provided:
- `.env.development.example`
- `.env.production.example`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the terms of the license file included in the repository.