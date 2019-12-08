#!/bin/bash

echo "Initializing DB distribution"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < "/sql-scripts/schema.sql";