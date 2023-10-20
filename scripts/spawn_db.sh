#!/bin/bash

# Pull the PostgreSQL Docker image
docker pull postgres

# Run a PostgreSQL container
docker run --name my-postgres-db -e POSTGRES_PASSWORD=password123 -p 5432:5432 -d postgres

# Wait for the database to start
while true; do
  docker logs my-postgres-db | grep "database system is ready to accept connections"
  if [ $? -eq 0 ]; then
    break
  fi
  sleep 1
done

# Create a database and schema
docker exec -it my-postgres-db psql -U postgres -c "CREATE DATABASE nurbxfit;"
docker exec -it my-postgres-db psql -U postgres -d nurbxfit -c "CREATE SCHEMA public;"

# Generate the URL
URL="postgresql://postgres:password123@localhost:5432/nurbxfit?schema=public"

# Output the URL
echo "PostgreSQL URL: $URL"
