/** Model table*/
CREATE TABLE "Model"
(
    id         INTEGER     NOT NULL,
    model_name VARCHAR(50) NOT NULL,
    mark       INTEGER     NOT NULL,
    year       TIMESTAMP   NOT NULL
);

ALTER TABLE "Model"
    ADD CONSTRAINT "PK_Mark"
        PRIMARY KEY (id);

CREATE INDEX "IXFK_Mark_Model" ON "Model" (mark ASC);

ALTER TABLE "Model"
    ADD CONSTRAINT "FK_Mark_Model"
        FOREIGN KEY (mark) REFERENCES "Mark" (id) ON DELETE No Action ON UPDATE No Action;

