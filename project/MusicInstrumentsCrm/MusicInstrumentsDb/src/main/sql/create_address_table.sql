CREATE TABLE Address(
	id integer NOT NULL,
	full_address VARCHAR(255) NOT NULL);

ALTER TABLE Address ADD CONSTRAINT PK_Address
	PRIMARY KEY (id);