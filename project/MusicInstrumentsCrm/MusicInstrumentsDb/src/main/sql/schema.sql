/* Address table*/
CREATE TABLE Address
(
    id           INTEGER      NOT NULL,
    full_address VARCHAR(255) NOT NULL
);

/*Buyer table*/
CREATE TABLE Buyer
(
    id         INTEGER      NOT NULL,
    first_name VARCHAR(50)  NOT NULL,
    last_name  VARCHAR(50)  NOT NULL,
    patronymic VARCHAR(50)  NULL,
    email      VARCHAR(255) NOT NULL,
    phone      VARCHAR(50)  NULL,
    crm_user   INTEGER      NULL
);

/*Car table*/
CREATE TABLE Car
(
    id         INTEGER    NOT NULL,
    serial     VARCHAR(6) NOT NULL,
    region     VARCHAR(3) NOT NULL,
    mark_model INTEGER    NOT NULL
);

/*Country table*/
CREATE TABLE Country
(
    id   INTEGER      NOT NULL,
    name VARCHAR(150) NOT NULL
);

/*Delivery table*/
CREATE TABLE Delivery
(
    id      INTEGER NOT NULL,
    car     INTEGER NOT NULL,
    address INTEGER NOT NULL,
    courier INTEGER NOT NULL
);

/*Factory table*/
CREATE TABLE Factory
(
    id              INTEGER     NOT NULL,
    address         INTEGER     NOT NULL,
    foundation_date VARCHAR(50) NOT NULL
);

/*GoodInOffer table*/
CREATE TABLE GoodInOffer
(
    id    INTEGER NOT NULL,
    good  INTEGER NOT NULL,
    offer INTEGER NOT NULL,
    count INTEGER NOT NULL
);

/*Good table*/
CREATE TABLE Good
(
    id          INTEGER        NOT NULL,
    name        VARCHAR(50)    NOT NULL,
    description VARCHAR(50)    NULL,
    good_type   INTEGER        NOT NULL,
    factory     INTEGER        NOT NULL,
    price       NUMERIC(12, 2) NOT NULL
);

/*GoodType table*/
CREATE TABLE GoodType
(
    id        INTEGER     NOT NULL,
    type_name VARCHAR(50) NOT NULL
);

/*Mark table*/
CREATE TABLE Mark
(
    id      INTEGER     NOT NULL,
    name    VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);

/*Model table*/
CREATE TABLE Model
(
    id         INTEGER     NOT NULL,
    model_name VARCHAR(50) NOT NULL,
    mark       INTEGER     NOT NULL,
    year       TIMESTAMP   NOT NULL
);
/*Offer table*/
CREATE TABLE Offer
(
    id       INTEGER        NOT NULL,
    code     VARCHAR(38)    NOT NULL,
    buyer    INTEGER        NOT NULL,
    seller   INTEGER        NOT NULL,
    store    INTEGER        NULL,
    delivery INTEGER        NULL,
    sum      NUMERIC(12, 2) NOT NULL
);

/*Staff table*/
CREATE TABLE Staff
(
    id              INTEGER     NOT NULL,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    patronymic      VARCHAR(50) NOT NULL,
    passport_serial VARCHAR(4)  NOT NULL,
    passport_number VARCHAR(6)  NOT NULL,
    phone           VARCHAR(50) NOT NULL,
    inn             VARCHAR(10) NOT NULL,
    snils           VARCHAR(14) NOT NULL,
    crm_user        INTEGER     NOT NULL
);

/*Store table*/
CREATE TABLE Store
(
    id      INTEGER     NOT NULL,
    name    VARCHAR(50) NOT NULL,
    address INTEGER     NOT NULL
);

/*SupplyInStore table*/
CREATE TABLE SupplyInStore
(
    id    INTEGER      NOT NULL,
    good  INTEGER      NOT NULL,
    store INTEGER      NOT NULL,
    date  TIMESTAMP(6) NOT NULL
);

/*CrmUser table*/
CREATE TABLE CrmUser
(
    id            INTEGER      NOT NULL,
    login         VARCHAR(50)  NOT NULL,
    password      VARCHAR(100) NOT NULL,
    creation_date TIMESTAMP    NOT NULL,
    last_login    TIMESTAMP    NULL,
    active        BOOLEAN      NOT NULL
);

/* !!!!!!!!!!!!!!!!!!!!!!!!!! CONSTRAINTS !!!!!!!!!!!!!!!!!!!!!!!!!! */

/*CrmUser constraint*/
ALTER TABLE CrmUser
    ADD CONSTRAINT PK_CrmUser
        PRIMARY KEY (id);

ALTER TABLE CrmUser
    ADD CONSTRAINT UQ_CrmUser_login UNIQUE (login);

ALTER TABLE CrmUser
    ADD CONSTRAINT UQ_CrmUser_password UNIQUE (password);

/*Country constraint*/
ALTER TABLE Country
    ADD CONSTRAINT PK_Country
        PRIMARY KEY (id);

/*Mark constraint*/
ALTER TABLE Mark
    ADD CONSTRAINT PK_Model
        PRIMARY KEY (id);

CREATE INDEX IXFK_Mark_Country ON Mark (id ASC);

ALTER TABLE Mark
    ADD CONSTRAINT FK_Mark_Country
        FOREIGN KEY (id) REFERENCES Country (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*Model constraint*/
ALTER TABLE Model
    ADD CONSTRAINT PK_Mark
        PRIMARY KEY (id);


CREATE INDEX IXFK_Mark_Model ON Model (mark ASC);

ALTER TABLE Model
    ADD CONSTRAINT FK_Mark_Model
        FOREIGN KEY (mark) REFERENCES Mark (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/* Address constraint*/
ALTER TABLE Address
    ADD CONSTRAINT PK_Address
        PRIMARY KEY (id);

/* Buyer constraint*/
ALTER TABLE Buyer
    ADD CONSTRAINT PK_Buyer
        PRIMARY KEY (id);

ALTER TABLE Buyer
    ADD CONSTRAINT UQ_Buyer_email UNIQUE (email);

ALTER TABLE Buyer
    ADD CONSTRAINT UQ_Buyer_phone UNIQUE (phone);

CREATE INDEX IXFK_Buyer_CrmUser ON Buyer (crm_user ASC);

ALTER TABLE Buyer
    ADD CONSTRAINT FK_Buyer_CrmUser
        FOREIGN KEY (crm_user) REFERENCES CrmUser (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*Car constraint*/
ALTER TABLE Car
    ADD CONSTRAINT PK_Car
        PRIMARY KEY (id);

ALTER TABLE Car
    ADD CONSTRAINT UQ_Car_serial UNIQUE (serial);

CREATE INDEX IXFK_Car_Mark ON Car (mark_model ASC);

ALTER TABLE Car
    ADD CONSTRAINT FK_Car_Mark
        FOREIGN KEY (mark_model) REFERENCES Model (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*Factory constraint*/
ALTER TABLE Factory
    ADD CONSTRAINT PK_Factory
        PRIMARY KEY (id);

CREATE INDEX IXFK_Factory_Address ON Factory (address ASC);

ALTER TABLE Factory
    ADD CONSTRAINT FK_Factory_Address
        FOREIGN KEY (address) REFERENCES Address (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*GoodType constraint*/
ALTER TABLE GoodType
    ADD CONSTRAINT PK_GoodType
        PRIMARY KEY (id);

/*Good constraint*/
ALTER TABLE Good
    ADD CONSTRAINT PK_Good
        PRIMARY KEY (id);

CREATE INDEX IXFK_Good_Factory ON Good (factory ASC);

CREATE INDEX IXFK_Good_GoodType ON Good (good_type ASC);

ALTER TABLE Good
    ADD CONSTRAINT FK_Good_Factory
        FOREIGN KEY (factory) REFERENCES Factory (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Good
    ADD CONSTRAINT FK_Good_GoodType
        FOREIGN KEY (good_type) REFERENCES GoodType (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*Staff constraint*/
ALTER TABLE Staff
    ADD CONSTRAINT PK_Staff
        PRIMARY KEY (id);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_passport UNIQUE (passport_serial, passport_number);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_inn UNIQUE (inn);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_snils UNIQUE (snils);

ALTER TABLE Staff
    ADD CONSTRAINT UQ_Staff_phone UNIQUE (phone);

CREATE INDEX IXFK_Staff_User ON Staff (crm_user ASC);

ALTER TABLE Staff
    ADD CONSTRAINT FK_Staff_CrmUser
        FOREIGN KEY (crm_user) REFERENCES CrmUser (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*Store constraint*/
ALTER TABLE Store
    ADD CONSTRAINT PK_Store
        PRIMARY KEY (id);

CREATE INDEX IXFK_Store_Address ON Store (id ASC);

ALTER TABLE Store
    ADD CONSTRAINT FK_Store_Address
        FOREIGN KEY (id) REFERENCES Address (id) ON DELETE NO ACTION ON UPDATE NO ACTION;


/*Delivery constraint*/
ALTER TABLE Delivery
    ADD CONSTRAINT PK_Delivery
        PRIMARY KEY (id);

CREATE INDEX IXFK_Delivery_Address ON Delivery (address ASC);

CREATE INDEX IXFK_Delivery_Car ON Delivery (car ASC);

CREATE INDEX IXFK_Delivery_Staff ON Delivery (courier ASC);

ALTER TABLE Delivery
    ADD CONSTRAINT FK_Delivery_Address
        FOREIGN KEY (address) REFERENCES Address (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Delivery
    ADD CONSTRAINT FK_Delivery_car
        FOREIGN KEY (car) REFERENCES Car (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Delivery
    ADD CONSTRAINT FK_Delivery_Staff
        FOREIGN KEY (courier) REFERENCES Staff (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*Offer constraint*/
ALTER TABLE Offer
    ADD CONSTRAINT PK_Offer
        PRIMARY KEY (id);

ALTER TABLE Offer
    ADD CONSTRAINT UQ_Offer_Code UNIQUE (code);

CREATE INDEX IXFK_Offer_Buyer ON Offer (buyer ASC);

CREATE INDEX IXFK_Offer_Delivery ON Offer (delivery ASC);

CREATE INDEX IXFK_Offer_Staff ON Offer (seller ASC);

CREATE INDEX IXFK_Offer_Store ON Offer (store ASC);

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Buyer
        FOREIGN KEY (buyer) REFERENCES Buyer (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Delivery
        FOREIGN KEY (delivery) REFERENCES Delivery (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Seller
        FOREIGN KEY (seller) REFERENCES Staff (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Store
        FOREIGN KEY (store) REFERENCES Store (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*GoodInOffer constraint*/
ALTER TABLE GoodInOffer
    ADD CONSTRAINT PK_GoodInOffer
        PRIMARY KEY (id);

CREATE INDEX IXFK_GoodInOffer_Good ON GoodInOffer (good ASC);

CREATE INDEX IXFK_GoodInOffer_Offer ON GoodInOffer (offer ASC);

ALTER TABLE GoodInOffer
    ADD CONSTRAINT FK_GoodInOffer_Good
        FOREIGN KEY (good) REFERENCES Good (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE GoodInOffer
    ADD CONSTRAINT FK_GoodInOffer_Offer
        FOREIGN KEY (offer) REFERENCES Offer (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*SupplyInStore constraint*/
ALTER TABLE SupplyInStore
    ADD CONSTRAINT PK_SupplyInStore
        PRIMARY KEY (id);

CREATE INDEX IXFK_SupplyInStore_Good ON SupplyInStore (good ASC);

CREATE INDEX IXFK_SupplyInStore_Store ON SupplyInStore (store ASC);

ALTER TABLE SupplyInStore
    ADD CONSTRAINT FK_SupplyInStore_Good
        FOREIGN KEY (good) REFERENCES Good (id) ON DELETE NO ACTION ON UPDATE NO ACTION;
