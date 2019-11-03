-- Create domain model tables
-- Buyer
CREATE TABLE Buyer (
  id integer NOT NULL,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  patronymic varchar(50) NULL,
  email varchar(255) NOT NULL,
  phone varchar(50) NULL
);
-- Car
CREATE TABLE Car (
  id integer NOT NULL,
  serial varchar(50) NOT NULL,
  region varchar(50) NOT NULL,
  mark_model integer NOT NULL
);
-- Factory
CREATE TABLE Factory (
  id integer NOT NULL,
  address varchar(50) NULL,
  foundation_date varchar(50) NULL
);
-- Good
CREATE TABLE Good (
  id integer NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(50) NULL,
  GoodType integer NOT NULL,
  factory integer NOT NULL,
  price numeric(12, 2) NOT NULL
);
-- GoodType
CREATE TABLE GoodType (
  id integer NOT NULL,
  type_name varchar(50) NOT NULL
);
-- GoodInOffer
CREATE TABLE GoodInOffer (
  id integer NOT NULL,
  good integer NOT NULL,
  offer integer NOT NULL,
  count integer NOT NULL
);
-- Mark
CREATE TABLE Mark (
  id integer NOT NULL,
  name varchar(50) NOT NULL,
  country varchar(50) NOT NULL
);
-- Model
CREATE TABLE Model (
  id integer NOT NULL,
  model_name varchar(50) NOT NULL,
  mark integer NOT NULL,
  year timestamp NOT NULL
);
-- Offer
CREATE TABLE Offer (
  id integer NOT NULL,
  code varchar(38) NOT NULL,
  buyer integer NOT NULL,
  seller integer NOT NULL,
  store integer NULL,
  GoodInOffer integer NOT NULL,
  delivery integer NULL,
  sum numeric(12, 2) NOT NULL
);
-- Staff
CREATE TABLE Staff (
  id integer NOT NULL,
  first_name varchar(50) NULL,
  last_name varchar(50) NULL,
  patronymic varchar(50) NULL,
  passport_serial varchar(50) NULL,
  passport_number varchar(50) NULL,
  inn varchar(50) NULL,
  snils varchar(50) NULL
);
-- Store
CREATE TABLE Store (
  id integer NOT NULL,
  name varchar(50) NOT NULL,
  address varchar(255) NULL
);
-- SuplyInStore
CREATE TABLE SuplyInStore (
  id integer NOT NULL,
  good integer NOT NULL,
  store integer NOT NULL,
  date timestamp(6) NOT NULL
);
-- Delivery
CREATE TABLE Delivery (
  id integer NOT NULL,
  car integer NOT NULL,
  address text NOT NULL,
  deliver integer NOT NULL
);
-- CREATE Primary Keys,Indexes,Uniques,Checks
ALTER TABLE Buyer
ADD
  CONSTRAINT PK_Buyer PRIMARY KEY (id);
ALTER TABLE Car
ADD
  CONSTRAINT PK_Car PRIMARY KEY (id);
--
  CREATE INDEX IXFK_Car_Mark ON Car (mark_model ASC);
ALTER TABLE Factory
ADD
  CONSTRAINT PK_Store PRIMARY KEY (id);
ALTER TABLE Good
ADD
  CONSTRAINT PK_Good PRIMARY KEY (id);
--
  CREATE INDEX IXFK_Good_Factory ON Good (factory ASC);
--
  CREATE INDEX IXFK_Good_GoodType ON Good (GoodType ASC);
ALTER TABLE GoodType
ADD
  CONSTRAINT PK_GoodType PRIMARY KEY (id);
ALTER TABLE GoodInOffer
ADD
  CONSTRAINT PK_GoodInOffer PRIMARY KEY (id);
--
  CREATE INDEX IXFK_GoodInOffer_Good ON GoodInOffer (good ASC);
--
  CREATE INDEX IXFK_GoodInOffer_Offer ON GoodInOffer (offer ASC);
ALTER TABLE Mark
ADD
  CONSTRAINT PK_Model PRIMARY KEY (id);
ALTER TABLE Model
ADD
  CONSTRAINT PK_Mark PRIMARY KEY (id);
--
  CREATE INDEX IXFK_Mark_Model ON Model (mark ASC);
ALTER TABLE Offer
ADD
  CONSTRAINT PK_Offer PRIMARY KEY (id);
ALTER TABLE Offer
ADD
  CONSTRAINT "UQ_Delivery_Code" UNIQUE (code);
--
  CREATE INDEX IXFK_Offer_Buyer ON Offer (buyer ASC);
--
  CREATE INDEX IXFK_Offer_Delivery ON Offer (delivery ASC);
--
  CREATE INDEX IXFK_Offer_Staff ON Offer (seller ASC);
--
  CREATE INDEX IXFK_Offer_Store ON Offer (store ASC);
ALTER TABLE Staff
ADD
  CONSTRAINT PK_Staff PRIMARY KEY (id);
ALTER TABLE Staff
ADD
  CONSTRAINT UQ_staff_passport UNIQUE (passport_serial, passport_number);
ALTER TABLE Store
ADD
  CONSTRAINT PK_Store PRIMARY KEY (id);
ALTER TABLE SuplyInStore
ADD
  CONSTRAINT PK_SuplyInStore PRIMARY KEY (id);
--
  CREATE INDEX IXFK_SuplyInStore_Good ON SuplyInStore (good ASC);
--
  CREATE INDEX IXFK_SuplyInStore_Store ON SuplyInStore (store ASC);
ALTER TABLE Delivery
ADD
  CONSTRAINT PK_Delivery PRIMARY KEY (id);
--
  CREATE INDEX IXFK_Delivery_Car ON Delivery (car ASC);
--
  CREATE INDEX IXFK_Delivery_Staff ON Delivery (deliver ASC);
/* -- CREATE Foreign Key Constraints */
ALTER TABLE Car
ADD
  CONSTRAINT FK_Car_Mark FOREIGN KEY (mark_model) REFERENCES Model (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Good
ADD
  CONSTRAINT FK_Good_Factory FOREIGN KEY (factory) REFERENCES Factory (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Good
ADD
  CONSTRAINT FK_Good_GoodType FOREIGN KEY (GoodType) REFERENCES GoodType (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE GoodInOffer
ADD
  CONSTRAINT FK_GoodInOffer_Good FOREIGN KEY (good) REFERENCES Good (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE GoodInOffer
ADD
  CONSTRAINT FK_GoodInOffer_Offer FOREIGN KEY (offer) REFERENCES Offer (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Model
ADD
  CONSTRAINT FK_Mark_Model FOREIGN KEY (mark) REFERENCES Mark (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Offer
ADD
  CONSTRAINT FK_Offer_Buyer FOREIGN KEY (buyer) REFERENCES Buyer (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Offer
ADD
  CONSTRAINT FK_Offer_Delivery FOREIGN KEY (delivery) REFERENCES Delivery (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Offer
ADD
  CONSTRAINT FK_Offer_Seller FOREIGN KEY (seller) REFERENCES Staff (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Offer
ADD
  CONSTRAINT FK_Offer_Store FOREIGN KEY (store) REFERENCES Store (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE SuplyInStore
ADD
  CONSTRAINT FK_SuplyInStore_Good FOREIGN KEY (good) REFERENCES Good (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE SuplyInStore
ADD
  CONSTRAINT FK_SuplyInStore_Store FOREIGN KEY (store) REFERENCES Store (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Delivery
ADD
  CONSTRAINT FK_Delivery_car FOREIGN KEY (car) REFERENCES Car (id) ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Delivery
ADD
  CONSTRAINT FK_Delivery_Staff FOREIGN KEY (deliver) REFERENCES Staff (id) ON DELETE No Action ON UPDATE No Action;