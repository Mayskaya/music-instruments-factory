CREATE TABLE "RolePermission"
(
    id         INTEGER      NOT NULL,
    role       INTEGER      NOT NULL,
    permission INTEGER      NOT NULL,
    value      VARCHAR(100) NOT NULL,
    value_type VARCHAR(100) NOT NULL
);

ALTER TABLE "RolePermission"
    ADD CONSTRAINT "PK_RolePermission"
        PRIMARY KEY (id);

CREATE INDEX "IXFK_RolePermission_Permission" ON "RolePermission" (role ASC);

CREATE INDEX "IXFK_RolePermission_Role" ON "RolePermission" (permission ASC);

ALTER TABLE "RolePermission"
    ADD CONSTRAINT "FK_RolePermission_Role"
        FOREIGN KEY (role) REFERENCES "Role" (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE "RolePermission"
    ADD CONSTRAINT "FK_RolePermission_Permission"
        FOREIGN KEY (permission) REFERENCES "Permission" (id) ON DELETE No Action ON UPDATE No Action;

ALTER TABLE "RolePermission"
    ADD CONSTRAINT "UQ_RolePermission_Role_Permission"
        UNIQUE (role, permission);