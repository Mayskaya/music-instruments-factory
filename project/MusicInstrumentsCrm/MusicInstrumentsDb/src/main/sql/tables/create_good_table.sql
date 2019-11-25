/** Good table*/
CREATE TABLE "Good"
(
    id          INTEGER        NOT NULL,
    name        VARCHAR(50)    NOT NULL,
    description VARCHAR(50)    NULL,
    good_type   INTEGER        NOT NULL,
    factory     INTEGER        NOT NULL,
    price       NUMERIC(12, 2) NOT NULL
);

ALTER TABLE "Good"
    ADD CONSTRAINT "PK_Good"
        PRIMARY KEY (id);

CREATE INDEX "IXFK_Good_Factory" ON "Good" (factory ASC);

CREATE INDEX "IXFK_Good_GoodType" ON "Good" (good_type ASC);

ALTER TABLE "Good"
    ADD CONSTRAINT "FK_Good_Factory"
        FOREIGN KEY (factory) REFERENCES "Factory" (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE "Good"
    ADD CONSTRAINT "FK_Good_GoodType"
        FOREIGN KEY (good_type) REFERENCES "GoodType" (id) ON DELETE No Action ON UPDATE No Action;

