/** Car table*/
CREATE TABLE Car
(
    id         INTEGER    NOT NULL,
    serial     VARCHAR(6) NOT NULL,
    region     VARCHAR(3) NOT NULL,
    mark_model INTEGER    NOT NULL
);

ALTER TABLE Car
    ADD CONSTRAINT PK_Car
        PRIMARY KEY (id);

ALTER TABLE Car
    ADD CONSTRAINT UQ_Car_serial UNIQUE (serial);

CREATE INDEX IXFK_Car_Mark ON Car (mark_model ASC);

ALTER TABLE Car
    ADD CONSTRAINT FK_Car_Mark
        FOREIGN KEY (mark_model) REFERENCES Model (id) ON DELETE NO ACTION ON UPDATE NO ACTION;

