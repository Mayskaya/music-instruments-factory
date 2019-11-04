CREATE TABLE Staff(
	id integer NOT NULL,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	patronymic varchar(50) NULL,
	passport_serial varchar(50) NULL,
	passport_number varchar(50) NULL,
	inn varchar(50) NULL,
	snils varchar(50) NULL,
	"user" integer NULL);

ALTER TABLE Staff ADD CONSTRAINT PK_Staff
	PRIMARY KEY (id);

ALTER TABLE Staff ADD CONSTRAINT UQ_Staff_passport UNIQUE (passport_serial,passport_number);

CREATE INDEX IXFK_Staff_User ON Staff ("user" ASC);

ALTER TABLE Staff ADD CONSTRAINT FK_Staff_User
	FOREIGN KEY ("user") REFERENCES "User" (id) ON DELETE No Action ON UPDATE No Action;
