/*
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    SHOULD BE FIRST IN SCHEMA.SQL
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
CREATE USER admin SUPERUSER PASSWORD 'admin';
CREATE DATABASE micrm_db;
GRANT ALL PRIVILEGES ON DATABASE micrm_db TO admin;

/** Address table*/
CREATE TABLE Address
(
    id           INTEGER      NOT NULL,
    full_address VARCHAR(255) NOT NULL
);

ALTER TABLE Address
    ADD CONSTRAINT PK_Address
        PRIMARY KEY (id);

/** Buyer table*/
CREATE TABLE Buyer
(
    id         INTEGER      NOT NULL,
    first_name VARCHAR(50)  NOT NULL,
    last_name  VARCHAR(50)  NOT NULL,
    patronymic VARCHAR(50)  NULL,
    email      VARCHAR(255) NOT NULL,
    phone      VARCHAR(50)  NULL,
    "user"     INTEGER      NULL
);

ALTER TABLE Buyer
    ADD CONSTRAINT PK_Buyer
        PRIMARY KEY (id);

ALTER TABLE Buyer
    ADD CONSTRAINT UQ_Buyer_email UNIQUE (email);

ALTER TABLE Buyer
    ADD CONSTRAINT UQ_Buyer_phone UNIQUE (phone)

CREATE INDEX IXFK_Buyer_User ON Buyer ("user" ASC);

ALTER TABLE Buyer
    ADD CONSTRAINT FK_Buyer_User
        FOREIGN KEY ("user") REFERENCES "User" (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/** Car table*/
CREATE TABLE Car
(
    id         INTEGER    NOT NULL,
    serial     VARCHAR(6) NOT NULL,
    region     VARCHAR(3) NOT NULL,
    mark_model INTEGER    NOT NULL
);

ALTER TABLE Car
    ADD CONSTRAINT PK_Car
        PRIMARY KEY (id);

ALTER TABLE Car
    ADD CONSTRAINT UQ_Car_serial UNIQUE (serial);

CREATE INDEX IXFK_Car_Mark ON Car (mark_model ASC);

ALTER TABLE Car
    ADD CONSTRAINT FK_Car_Mark
        FOREIGN KEY (mark_model) REFERENCES Model (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

/** Country table*/
CREATE TABLE Country
(
    id   INTEGER      NOT NULL,
    name VARCHAR(150) NOT NULL
);

ALTER TABLE Country
    ADD CONSTRAINT PK_Country
        PRIMARY KEY (id);

/** Delivery table*/
CREATE TABLE Delivery
(
    id      integer NOT NULL,
    car     integer NOT NULL,
    address integer NOT NULL,
    courier integer NOT NULL
);

ALTER TABLE Delivery
    ADD CONSTRAINT PK_Delivery
        PRIMARY KEY (id);

CREATE INDEX IXFK_Delivery_Address ON Delivery (address ASC);

CREATE INDEX IXFK_Delivery_Car ON Delivery (car ASC);

CREATE INDEX IXFK_Delivery_Staff ON Delivery (courier ASC);

ALTER TABLE Delivery
    ADD CONSTRAINT FK_Delivery_Address
        FOREIGN KEY (address) REFERENCES Address (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Delivery
    ADD CONSTRAINT FK_Delivery_car
        FOREIGN KEY (car) REFERENCES Car (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Delivery
    ADD CONSTRAINT FK_Delivery_Staff
        FOREIGN KEY (courier) REFERENCES Staff (id) ON DELETE No Action ON UPDATE No Action;

/** Factory table*/
CREATE TABLE Factory
(
    id              integer     NOT NULL,
    address         integer     NOT NULL,
    foundation_date varchar(50) NOT NULL
);

ALTER TABLE Factory
    ADD CONSTRAINT PK_Store
        PRIMARY KEY (id);

CREATE INDEX IXFK_Factory_Address ON Factory (address ASC);

ALTER TABLE Factory
    ADD CONSTRAINT FK_Factory_Address
        FOREIGN KEY (address) REFERENCES Address (id) ON DELETE No Action ON UPDATE No Action;

/** GoodInOffer table*/
CREATE TABLE GoodInOffer
(
    id    integer NOT NULL,
    good  integer NOT NULL,
    offer integer NOT NULL,
    count integer NOT NULL
);

ALTER TABLE GoodInOffer
    ADD CONSTRAINT PK_GoodInOffer
        PRIMARY KEY (id);

CREATE INDEX IXFK_GoodInOffer_Good ON GoodInOffer (good ASC);

CREATE INDEX IXFK_GoodInOffer_Offer ON GoodInOffer (offer ASC);

ALTER TABLE GoodInOffer
    ADD CONSTRAINT FK_GoodInOffer_Good
        FOREIGN KEY (good) REFERENCES Good (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE GoodInOffer
    ADD CONSTRAINT FK_GoodInOffer_Offer
        FOREIGN KEY (offer) REFERENCES Offer (id) ON DELETE No Action ON UPDATE No Action;

/** Good table*/
CREATE TABLE Good
(
    id          integer        NOT NULL,
    name        varchar(50)    NOT NULL,
    description varchar(50)    NULL,
    good_type   integer        NOT NULL,
    factory     integer        NOT NULL,
    price       numeric(12, 2) NOT NULL
);

ALTER TABLE Good
    ADD CONSTRAINT PK_Good
        PRIMARY KEY (id);

CREATE INDEX IXFK_Good_Factory ON Good (factory ASC);

CREATE INDEX IXFK_Good_GoodType ON Good (good_type ASC);

ALTER TABLE Good
    ADD CONSTRAINT FK_Good_Factory
        FOREIGN KEY (factory) REFERENCES Factory (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Good
    ADD CONSTRAINT FK_Good_GoodType
        FOREIGN KEY (good_type) REFERENCES GoodType (id) ON DELETE No Action ON UPDATE No Action;

/** GoodType table*/
CREATE TABLE GoodType
(
    id        integer     NOT NULL,
    type_name varchar(50) NOT NULL
);

ALTER TABLE GoodType
    ADD CONSTRAINT PK_GoodType
        PRIMARY KEY (id);

/** Mark table*/
CREATE TABLE Mark
(
    id      integer     NOT NULL,
    name    varchar(50) NOT NULL,
    country varchar(50) NOT NULL
);

ALTER TABLE Mark
    ADD CONSTRAINT PK_Model
        PRIMARY KEY (id);

CREATE INDEX IXFK_Mark_Country ON Mark (id ASC);

ALTER TABLE Mark
    ADD CONSTRAINT FK_Mark_Country
        FOREIGN KEY (id) REFERENCES Country (id) ON DELETE No Action ON UPDATE No Action;

/** Model table*/
CREATE TABLE Model
(
    id         integer     NOT NULL,
    model_name varchar(50) NOT NULL,
    mark       integer     NOT NULL,
    year       timestamp   NOT NULL
);

ALTER TABLE Model
    ADD CONSTRAINT PK_Mark
        PRIMARY KEY (id);

CREATE INDEX IXFK_Mark_Model ON Model (mark ASC);

ALTER TABLE Model
    ADD CONSTRAINT FK_Mark_Model
        FOREIGN KEY (mark) REFERENCES Mark (id) ON DELETE No Action ON UPDATE No Action;

/** Offer table*/
CREATE TABLE Offer
(
    id       integer        NOT NULL,
    code     varchar(38)    NOT NULL,
    buyer    integer        NOT NULL,
    seller   integer        NOT NULL,
    store    integer        NULL,
    delivery integer        NULL,
    sum      numeric(12, 2) NOT NULL
);

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
        FOREIGN KEY (buyer) REFERENCES Buyer (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Delivery
        FOREIGN KEY (delivery) REFERENCES Delivery (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Seller
        FOREIGN KEY (seller) REFERENCES Staff (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Offer
    ADD CONSTRAINT FK_Offer_Store
        FOREIGN KEY (store) REFERENCES Store (id) ON DELETE No Action ON UPDATE No Action;

/** Staff table*/
CREATE TABLE Staff
(
    id              integer     NOT NULL,
    first_name      varchar(50) NULL,
    last_name       varchar(50) NULL,
    patronymic      varchar(50) NULL,
    passport_serial varchar(4)  NULL,
    passport_number varchar(6)  NULL,
    inn             varchar(10) NULL,
    snils           varchar(14) NULL,
    "user"          integer     NULL
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

CREATE INDEX IXFK_Staff_User ON Staff ("user" ASC);

ALTER TABLE Staff
    ADD CONSTRAINT FK_Staff_User
        FOREIGN KEY ("user") REFERENCES "User" (id) ON DELETE No Action ON UPDATE No Action;

/** Store table*/
CREATE TABLE Store
(
    id      integer     NOT NULL,
    name    varchar(50) NOT NULL,
    address integer     NOT NULL
);

ALTER TABLE Store
    ADD CONSTRAINT PK_Store
        PRIMARY KEY (id);

CREATE INDEX IXFK_Store_Address ON Store (id ASC);

ALTER TABLE Store
    ADD CONSTRAINT FK_Store_Address
        FOREIGN KEY (id) REFERENCES Address (id) ON DELETE No Action ON UPDATE No Action;

/** SupplyInStore table*/
CREATE TABLE SupplyInStore
(
    id    integer      NOT NULL,
    good  integer      NOT NULL,
    store integer      NOT NULL,
    date  timestamp(6) NOT NULL
);

ALTER TABLE SupplyInStore
    ADD CONSTRAINT PK_SupplyInStore
        PRIMARY KEY (id);

CREATE INDEX IXFK_SupplyInStore_Good ON SupplyInStore (good ASC);

CREATE INDEX IXFK_SupplyInStore_Store ON SupplyInStore (store ASC);

ALTER TABLE SupplyInStore
    ADD CONSTRAINT FK_SupplyInStore_Good
        FOREIGN KEY (good) REFERENCES Good (id) ON DELETE No Action ON UPDATE No Action;

/** User table*/
CREATE TABLE "User"
(
    id            integer      NOT NULL,
    login         varchar(50)  NOT NULL,
    password      varchar(100) NOT NULL,
    creation_date timestamp    NOT NULL,
    last_login    timestamp    NULL,
    active        boolean      NOT NULL
);

ALTER TABLE "User"
    ADD CONSTRAINT PK_User
        PRIMARY KEY (id);

ALTER TABLE "User"
    ADD CONSTRAINT UQ_User_login UNIQUE (login);

ALTER TABLE "User"
    ADD CONSTRAINT UQ_User_password UNIQUE (password);

