/*Role table*/
CREATE TABLE "Role"
(
    id   INTEGER      NOT NULL,
    name VARCHAR(100) NOT NULL
);

ALTER TABLE "Role"
    ADD CONSTRAINT "PK_Role"
        PRIMARY KEY (id);

ALTER TABLE "Role"
    ADD CONSTRAINT "UQ_Role_name" UNIQUE (name);
