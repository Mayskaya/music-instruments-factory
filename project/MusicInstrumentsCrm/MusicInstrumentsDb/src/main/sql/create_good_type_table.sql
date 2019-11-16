/** GoodType table*/
CREATE TABLE GoodType
(
    id        integer     NOT NULL,
    type_name varchar(50) NOT NULL
);

ALTER TABLE GoodType
    ADD CONSTRAINT PK_GoodType
        PRIMARY KEY (id);

