create table "AspNetRoles"
(
    "Id" text not null
        constraint "PK_AspNetRoles"
            primary key,
    "Name" varchar(256),
    "NormalizedName" varchar(256),
    "ConcurrencyStamp" text
);

create unique index "RoleNameIndex"
    on "AspNetRoles" ("NormalizedName");