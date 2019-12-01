/** CrmUser table*/
CREATE TABLE "CrmUser"
(
    id            INTEGER      NOT NULL,
    login         VARCHAR(50)  NOT NULL,
    password      VARCHAR(100) NOT NULL,
    creation_date TIMESTAMP    NOT NULL,
    last_login    TIMESTAMP    NULL,
    active        BOOLEAN      NOT NULL,
    role          INTEGER      NOT NULL
);

ALTER TABLE "CrmUser"
    ADD CONSTRAINT "PK_CrmUser"
        PRIMARY KEY (id);

ALTER TABLE "CrmUser"
    ADD CONSTRAINT "UQ_CrmUser_login" UNIQUE (login);

CREATE INDEX "IXFK_CrmUser_Role" ON "CrmUser" (role ASC);

ALTER TABLE "CrmUser"
    ADD CONSTRAINT "FK_CrmUser_Role"
        FOREIGN KEY (role) REFERENCES "Role" (id) ON DELETE No Action ON UPDATE No Action;
