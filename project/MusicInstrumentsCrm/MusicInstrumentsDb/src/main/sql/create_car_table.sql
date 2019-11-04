CREATE TABLE Car(
	id integer NOT NULL,
	serial varchar(50) NOT NULL,
	region varchar(50) NOT NULL,
	mark_model integer NOT NULL);

ALTER TABLE Car ADD CONSTRAINT PK_Car
	PRIMARY KEY (id);

CREATE INDEX IXFK_Car_Mark ON Car (mark_model ASC);

ALTER TABLE Car ADD CONSTRAINT FK_Car_Mark
	FOREIGN KEY (mark_model) REFERENCES Model (id) ON DELETE No Action ON UPDATE No Action;
