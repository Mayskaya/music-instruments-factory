/** GoodInOffer table*/
CREATE TABLE GoodInOffer
(
    id    INTEGER NOT NULL,
    good  INTEGER NOT NULL,
    offer INTEGER NOT NULL,
    count INTEGER NOT NULL
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

