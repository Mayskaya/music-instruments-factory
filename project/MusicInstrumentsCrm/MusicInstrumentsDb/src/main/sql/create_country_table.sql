CREATE TABLE Country(
	id integer NOT NULL,
	name varchar(150) NOT NULL);

ALTER TABLE Country ADD CONSTRAINT PK_Country
	PRIMARY KEY (id);
