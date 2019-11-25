/** Buyer table*/
CREATE TABLE "Buyer"
(
    id         INTEGER      NOT NULL,
    first_name VARCHAR(50)  NOT NULL,
    last_name  VARCHAR(50)  NOT NULL,
    patronymic VARCHAR(50)  NULL,
    email      VARCHAR(255) NOT NULL,
    phone      VARCHAR(50)  NULL,
    crm_user   INTEGER      NULL
);

ALTER TABLE "Buyer"
    ADD CONSTRAINT PK_Buyer
        PRIMARY KEY (id);

ALTER TABLE "Buyer"
    ADD CONSTRAINT UQ_Buyer_email UNIQUE (email);

ALTER TABLE "Buyer"
    ADD CONSTRAINT UQ_Buyer_phone UNIQUE (phone);

CREATE INDEX IXFK_Buyer_CrmUser ON "Buyer" (crm_user ASC);

ALTER TABLE "Buyer"
    ADD CONSTRAINT FK_Buyer_CrmUser
        FOREIGN KEY (crm_user) REFERENCES "CrmUser" (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

