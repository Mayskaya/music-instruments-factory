/** CrmUser table*/
CREATE TABLE CrmUser
(
    id            integer      NOT NULL,
    login         varchar(50)  NOT NULL,
    password      varchar(100) NOT NULL,
    creation_date timestamp    NOT NULL,
    last_login    timestamp    NULL,
    active        boolean      NOT NULL
);

ALTER TABLE CrmUser
    ADD CONSTRAINT PK_CrmUser
        PRIMARY KEY (id);

ALTER TABLE CrmUser
    ADD CONSTRAINT UQ_CrmUser_login UNIQUE (login);

