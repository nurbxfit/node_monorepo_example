# Node.js Monorepo Example

A simple example of a monorepo project using Node.js and Yarn workspaces. This repository serves as a reference for structuring a monorepo project. While it may seem complex for a simple project, it's intended for educational purposes and to demonstrate best practices.

# Features

- Structured monorepo project
- Integration with Prisma for database management
- Docker setup for PostgreSQL database

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

# License

This project is licensed under the MIT License.
