FROM library/postgres:11.5 AS clear

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB micrm_db

RUN mkdir /sql-data && \
	mkdir /sql-data-init && \
	mkdir /sql-data-save
	
COPY ./src/main/sql/schema.sql /sql-data
COPY ./init-db.sh /docker-entrypoint-initdb.d

FROM library/postgres:11.5 AS init
WORKDIR /docker-entrypoint-initdb.d
COPY ./src/main/sql/init /sql-data-init
COPY --from=clear /docker-entrypoint-initdb.d .
COPY --from=clear /sql-data /sql-data

