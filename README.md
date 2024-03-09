# Node.js Monorepo Example

A simple example of a monorepo project using Node.js and Yarn workspaces. This repository serves as a reference for structuring a monorepo project. While it may seem complex for a simple project, it's intended for educational purposes

# Features

- Structured monorepo project
- Integration with Prisma for database management
- Docker setup for PostgreSQL database (optional)

# Getting Started

Follow these steps to set up and run the project on your local machine:

## Prerequisites

1. Git
2. Node.js and Yarn
3. Docker (optional, for PostgreSQL)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/nurbxfit/node_monorepo_example.git
```

2. Navigate to the project directory:

```bash
cd node_monorepo_example
```

3. Install project dependencies:

```bash
yarn
```

4. Generate Prisma client:

```bash
yarn workspace @nurbxfit/db prisma generate
```

5. Configure your database by setting the DATABASE_URL in the .env file.

6. (Optional) If you have Docker installed, you can spawn a PostgreSQL database:

```bash
yarn docker-run:db
```

This command runs the spawn_db.sh script.

7. Start the API project:

```bash
yarn workspace apiv1 dev
```

# Project structure

```
.
├── README.md
├── package.json
├── packages
│   ├── common
│   │   ├── index.ts
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── errors
│   │   │   │   ├── BadRequest.error.ts
│   │   │   │   ├── Forbidden.error.ts
│   │   │   │   ├── HttpError.ts
│   │   │   │   ├── InternalServer.error.ts
│   │   │   │   ├── NotFound.error.ts
│   │   │   │   ├── ServiceUnavailable.error.ts
│   │   │   │   ├── Unauthorized.error.ts
│   │   │   │   └── index.ts
│   │   │   ├── http
│   │   │   │   └── http.client.ts
│   │   │   ├── index.ts
│   │   │   ├── repositories
│   │   │   │   ├── User.repo.ts
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       └── parser.util.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── db
│   │   ├── env.example
│   │   ├── index.ts
│   │   ├── package.json
│   │   ├── prisma
│   │   │   ├── migrations
│   │   │   │   ├── 20231022044921_change_user_table
│   │   │   │   │   └── migration.sql
│   │   │   │   └── migration_lock.toml
│   │   │   └── schema.prisma
│   │   ├── src
│   │   │   ├── client.ts
│   │   │   ├── index.ts
│   │   │   ├── prisma.repo.ts
│   │   │   └── seeds
│   │   │       ├── index.ts
│   │   │       └── user.seed.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── domain
│   │   ├── index.ts
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   └── modules
│   │   │       ├── auth
│   │   │       │   ├── auth.service.ts
│   │   │       │   ├── auth.validation.ts
│   │   │       │   └── index.ts
│   │   │       ├── example
│   │   │       │   └── examaple.service.ts
│   │   │       └── user
│   │   │           ├── index.ts
│   │   │           ├── user.service.ts
│   │   │           └── user.validation.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   └── infra
│       ├── index.ts
│       ├── package.json
│       ├── src
│       │   ├── http
│       │   │   ├── HttpController.ts
│       │   │   ├── index.ts
│       │   │   ├── middlewares
│       │   │   │   ├── ErrorHandler.middleware.ts
│       │   │   │   └── Validator.middleware.ts
│       │   │   ├── server.ts
│       │   │   └── types.ts
│       │   ├── index.ts
│       │   └── trpc
│       │       ├── client.ts
│       │       ├── context.ts
│       │       ├── index.ts
│       │       ├── middlewares
│       │       │   └── auth.middleware.ts
│       │       ├── server.ts
│       │       └── t.ts
│       ├── tsconfig.json
│       ├── tsconfig.tsbuildinfo
│       └── yarn-error.log
├── projects
│   ├── api_v1
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── controllers
│   │   │   │   ├── auth.controller.ts
│   │   │   │   └── user.controller.ts
│   │   │   ├── main.ts
│   │   │   └── routes
│   │   │       ├── auth.routes.ts
│   │   │       ├── example.route.ts
│   │   │       └── user.route.ts
│   │   └── tsconfig.json
│   ├── api_v2
│   │   ├── index.ts
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   ├── main.ts
│   │   │   └── trpc
│   │   │       └── router.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   └── svelte-client
│       ├── README.md
│       ├── index.html
│       ├── package.json
│       ├── postcss.config.js
│       ├── public
│       │   └── vite.svg
│       ├── src
│       │   ├── App.svelte
│       │   ├── app.css
│       │   ├── assets
│       │   │   └── svelte.svg
│       │   ├── lib
│       │   │   ├── Counter.svelte
│       │   │   └── clients
│       │   │       └── trpc.client.ts
│       │   ├── main.ts
│       │   ├── pages
│       │   │   ├── Home.svelte
│       │   │   ├── HttpTest.svelte
│       │   │   └── TrpcTest.svelte
│       │   ├── router
│       │   │   ├── Router.svelte
│       │   │   └── index.ts
│       │   └── vite-env.d.ts
│       ├── svelte.config.js
│       ├── tailwind.config.js
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
├── scripts
│   └── spawn_db.sh
└── yarn.lock
```

- `packages/` contains shared packages:
  - `common`: Common utilities, custom errors, and repositories.
  - `db`: Database client and Prisma-based repositories.
  - `domain`: Business logic modules, including authentication and user management.
  - `infra`: Infrastructure for HTTP and tRPC servers.
- `projects/` contains API projects:
  - `api_v1`: An API project with controllers and routes.
  - `api_v2`: Some example of other project
- `scripts/` offers useful scripts for tasks like database setup (optional).

# License

This project is licensed under the MIT License.
