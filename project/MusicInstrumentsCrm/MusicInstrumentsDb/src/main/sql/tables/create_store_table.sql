/** Store table*/
CREATE TABLE Store
(
    id      integer     NOT NULL,
    name    varchar(50) NOT NULL,
    address integer     NOT NULL
);

ALTER TABLE Store
    ADD CONSTRAINT PK_Store
        PRIMARY KEY (id);

CREATE INDEX IXFK_Store_Address ON Store (id ASC);

ALTER TABLE Store
    ADD CONSTRAINT FK_Store_Address
        FOREIGN KEY (id) REFERENCES Address (id) ON DELETE No Action ON UPDATE No Action;

