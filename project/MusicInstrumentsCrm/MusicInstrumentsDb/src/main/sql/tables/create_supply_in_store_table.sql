﻿/** SupplyInStore table*/
CREATE TABLE "SupplyInStore"
(
    id    INTEGER      NOT NULL,
    good  INTEGER      NOT NULL,
    store INTEGER      NOT NULL,
    date  TIMESTAMP(6) NOT NULL
);

ALTER TABLE "SupplyInStore"
    ADD CONSTRAINT "PK_SupplyInStore"
        PRIMARY KEY (id);

CREATE INDEX "IXFK_SupplyInStore_Good" ON "SupplyInStore" (good ASC);

CREATE INDEX "IXFK_SupplyInStore_Store" ON "SupplyInStore" (store ASC);

ALTER TABLE "SupplyInStore"
    ADD CONSTRAINT "FK_SupplyInStore_Good"
        FOREIGN KEY (good) REFERENCES "Good" (id) ON DELETE No Action ON UPDATE No Action;

