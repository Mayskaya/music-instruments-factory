/** Offer table*/
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

