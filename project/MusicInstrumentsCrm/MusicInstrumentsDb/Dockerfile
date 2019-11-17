FROM library/postgres:11.5

ARG SHOULD_CONTAIN_INIT_ARG='false'
ENV SHOULD_CONTAIN_INIT=$SHOULD_CONTAIN_INIT_ARG;

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB micrm_db

RUN mkdir /sql-data
#COPY ./src/main/sql/schema.sql /docker-entrypoint-initdb.d/
#COPY ./src/main/sql/init /docker-entrypoint-initdb.d/

COPY ./src/main/sql/schema.sql /sql-data
COPY ./src/main/sql/init /sql-data
COPY ./init-db.sh /docker-entrypoint-initdb.d

RUN if [ "$SHOULD_CONTAIN_INIT" = "false"] ; then rm /sql-data/init-*.sql ; fi

