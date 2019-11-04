CREATE TABLE "User"(
	id integer NOT NULL,
	login varchar(50) NOT NULL,
	password varchar(100) NOT NULL,
	creation_date timestamp NOT NULL,
	last_login timestamp NULL,
	active boolean NOT NULL);

ALTER TABLE "User" ADD CONSTRAINT PK_User
	PRIMARY KEY (id);
