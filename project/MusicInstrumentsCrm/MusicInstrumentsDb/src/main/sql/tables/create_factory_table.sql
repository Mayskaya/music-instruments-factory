/** Factory table*/
CREATE TABLE "Factory"
(
    id              INTEGER     NOT NULL,
    name            VARCHAR(50) NOT NULL,
    address         INTEGER     NOT NULL,
    foundation_date TIMESTAMP NOT NULL
);

ALTER TABLE "Factory"
    ADD CONSTRAINT "PK_Factory"
        PRIMARY KEY (id);

CREATE INDEX "IXFK_Factory_Address" ON "Factory" (address ASC);

ALTER TABLE "Factory"
    ADD CONSTRAINT "FK_Factory_Address"
        FOREIGN KEY (address) REFERENCES "Address" (id) ON DELETE No Action ON UPDATE No Action;

