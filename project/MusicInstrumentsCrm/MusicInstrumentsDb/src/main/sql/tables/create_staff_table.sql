/** Staff table*/
CREATE TABLE "Staff"
(
    id              INTEGER     NOT NULL,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    patronymic      VARCHAR(50) NOT NULL,
    passport_serial VARCHAR(4)  NOT NULL,
    passport_number VARCHAR(6)  NOT NULL,
    phone           VARCHAR(12)  NOT NULL,
    inn             VARCHAR(10) NOT NULL,
    snils           VARCHAR(14) NOT NULL,
    crm_user        INTEGER     NOT NULL
);

ALTER TABLE "Staff"
    ADD CONSTRAINT "PK_Staff"
        PRIMARY KEY (id);

ALTER TABLE "Staff"
    ADD CONSTRAINT "UQ_Staff_passport" UNIQUE (passport_serial, passport_number);

ALTER TABLE "Staff"
    ADD CONSTRAINT "UQ_Staff_inn" UNIQUE (inn);

ALTER TABLE "Staff"
    ADD CONSTRAINT "UQ_Staff_snils" UNIQUE (snils);

ALTER TABLE "Staff" 
    ADD CONSTRAINT "UQ_Staff_phone" UNIQUE (phone);

CREATE INDEX "IXFK_Staff_User" ON "Staff" (crm_user ASC);

ALTER TABLE "Staff"
    ADD CONSTRAINT "FK_Staff_CrmUser"
        FOREIGN KEY (crm_user) REFERENCES "CrmUser" (id) ON DELETE No Action ON UPDATE No Action;

