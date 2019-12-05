create table "AspNetUsers"
(
    "Id" text not null
        constraint "PK_AspNetUsers"
            primary key,
    "UserName" varchar(256),
    "NormalizedUserName" varchar(256),
    "Email" varchar(256),
    "NormalizedEmail" varchar(256),
    "EmailConfirmed" boolean not null,
    "PasswordHash" text,
    "SecurityStamp" text,
    "ConcurrencyStamp" text,
    "PhoneNumber" text,
    "PhoneNumberConfirmed" boolean not null,
    "TwoFactorEnabled" boolean not null,
    "LockoutEnd" timestamp with time zone,
    "LockoutEnabled" boolean not null,
    "AccessFailedCount" integer not null,
    "MyId" integer not null
);

create index "EmailIndex"
    on "AspNetUsers" ("NormalizedEmail");

create unique index "UserNameIndex"
    on "AspNetUsers" ("NormalizedUserName");