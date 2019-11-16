FROM library/postgres:11.5

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB micrm_db

COPY ./src/main/sql/schema.sql /docker-entrypoint-initdb.d/