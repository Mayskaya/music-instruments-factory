CREATE TABLE Buyer(
	id integer NOT NULL,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	patronymic varchar(50) NULL,
	email varchar(255) NOT NULL,
	phone varchar(50) NULL,
	"user" integer NULL);

ALTER TABLE Buyer ADD CONSTRAINT PK_Buyer
	PRIMARY KEY (id);

CREATE INDEX IXFK_Buyer_User ON Buyer ("user" ASC);

ALTER TABLE Buyer ADD CONSTRAINT FK_Buyer_User
	FOREIGN KEY ("user") REFERENCES "User" (id) ON DELETE No Action ON UPDATE No Action;
