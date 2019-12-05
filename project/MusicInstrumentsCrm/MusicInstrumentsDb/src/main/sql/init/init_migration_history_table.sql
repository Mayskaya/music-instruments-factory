create table "__EFMigrationsHistory"
(
    "MigrationId" varchar(150) not null
        constraint "PK___EFMigrationsHistory"
            primary key,
    "ProductVersion" varchar(32) not null
);