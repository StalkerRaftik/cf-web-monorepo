# CF Web Monorepo

A modern single-repo SPA web application powered by Cloudflare Workers. This project provides a complete development and deployment solution with zero DevOps overhead.

🌐 **Demo:** https://cf-web-monorepo.monster25rus.workers.dev/

## Features

- 🚀 One-click deployment with CI/CD pipeline
- 🔄 Automatic type synchronization between backend and frontend
- 📈 Horizontal scaling out of the box
- 💾 Easy-to-implement caching system
- 🗄️ Seamless connection to storage buckets and databases
- 🛠️ Development and testing environments
- 📚 Auto-generated API documentation

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

While Cloudflare Workers currently don't support ORM migrations, you can manage your database schema using SQL files.

To apply migrations to your D1 database:

```bash
npx wrangler d1 execute YOUR_DB_LABEL --remote --file=./src/migrations/001_create_users_table.sql
```

For local development:
```bash
npx wrangler d1 execute YOUR_DB_LABEL --local --file=./src/migrations/001_create_users_table.sql
```

## Project Structure

```
.
├── src/                  # Frontend source code
├── backendSrc/          # Backend source code
├── public/              # Static assets
├── dist/               # Build output
└── wrangler.toml       # Cloudflare Workers configuration
```

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