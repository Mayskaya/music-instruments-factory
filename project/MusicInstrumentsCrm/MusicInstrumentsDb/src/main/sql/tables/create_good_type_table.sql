/** GoodType table*/
CREATE TABLE GoodType
(
    id        INTEGER     NOT NULL,
    type_name VARCHAR(50) NOT NULL
);

ALTER TABLE GoodType
    ADD CONSTRAINT PK_GoodType
        PRIMARY KEY (id);

