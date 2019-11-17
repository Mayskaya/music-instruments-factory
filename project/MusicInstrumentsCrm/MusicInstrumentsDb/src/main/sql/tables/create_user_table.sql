/** CrmUser table*/
CREATE TABLE CrmUser
(
    id            INTEGER      NOT NULL,
    login         VARCHAR(50)  NOT NULL,
    password      VARCHAR(100) NOT NULL,
    creation_date TIMESTAMP    NOT NULL,
    last_login    TIMESTAMP    NULL,
    active        BOOLEAN      NOT NULL
);

ALTER TABLE CrmUser
    ADD CONSTRAINT PK_CrmUser
        PRIMARY KEY (id);

ALTER TABLE CrmUser
    ADD CONSTRAINT UQ_CrmUser_login UNIQUE (login);

