/** Staff table*/
CREATE TABLE Staff
(
    id              integer     NOT NULL,
    first_name      varchar(50) NOT NULL,
    last_name       varchar(50) NOT NULL,
    patronymic      varchar(50) NOT NULL,
    passport_serial varchar(4)  NOT NULL,
    passport_number varchar(6)  NOT NULL,
    inn             varchar(10) NOT NULL,
    snils           varchar(14) NOT NULL,
    crm_user        integer     NOT NULL
);

ALTER TABLE Staff
    ADD CONSTRAINT PK_Staff
        PRIMARY KEY (id);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_passport UNIQUE (passport_serial, passport_number);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_inn UNIQUE (inn);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_snils UNIQUE (snils);

CREATE INDEX IXFK_Staff_User ON Staff (crm_user ASC);

ALTER TABLE Staff
    ADD CONSTRAINT FK_Staff_CrmUser
        FOREIGN KEY (crm_user) REFERENCES CrmUser (id) ON DELETE No Action ON UPDATE No Action;

