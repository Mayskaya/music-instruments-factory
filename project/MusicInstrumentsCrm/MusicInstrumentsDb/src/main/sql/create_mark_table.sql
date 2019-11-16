/** Mark table*/
CREATE TABLE Mark
(
    id      integer     NOT NULL,
    name    varchar(50) NOT NULL,
    country varchar(50) NOT NULL
);

ALTER TABLE Mark
    ADD CONSTRAINT PK_Model
        PRIMARY KEY (id);

CREATE INDEX IXFK_Mark_Country ON Mark (id ASC);

ALTER TABLE Mark
    ADD CONSTRAINT FK_Mark_Country
        FOREIGN KEY (id) REFERENCES Country (id) ON DELETE No Action ON UPDATE No Action;

