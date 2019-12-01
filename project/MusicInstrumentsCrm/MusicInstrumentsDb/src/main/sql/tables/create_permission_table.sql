CREATE TABLE "Permission"
(
    id         INTEGER      NOT NULL,
    name       VARCHAR(100) NOT NULL
);

ALTER TABLE "Permission"
    ADD CONSTRAINT "PK_Permission"
        PRIMARY KEY (id);

ALTER TABLE "Permission"
    ADD CONSTRAINT "UQ_Permission_name"
        UNIQUE (name);