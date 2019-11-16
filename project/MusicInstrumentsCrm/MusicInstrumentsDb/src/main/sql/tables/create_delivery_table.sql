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

