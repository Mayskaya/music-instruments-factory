/** Country table*/
CREATE TABLE Country
(
    id   INTEGER      NOT NULL,
    name VARCHAR(150) NOT NULL
);

ALTER TABLE Country
    ADD CONSTRAINT PK_Country
        PRIMARY KEY (id);

