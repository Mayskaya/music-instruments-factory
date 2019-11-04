CREATE TABLE Factory(
	id integer NOT NULL,
	address integer NOT NULL,
	foundation_date varchar(50) NOT NULL
);

ALTER TABLE Factory ADD CONSTRAINT PK_Store
	PRIMARY KEY (id);

CREATE INDEX IXFK_Factory_Address ON Factory (address ASC);

ALTER TABLE Factory ADD CONSTRAINT FK_Factory_Address
	FOREIGN KEY (address) REFERENCES Address (id) ON DELETE No Action ON UPDATE No Action;
