CREATE TABLE "AspNetUserRoles"
(
    "UserId" TEXT NOT NULL
        CONSTRAINT "FK_AspNetUserRoles_AspNetUsers_UserId"
            REFERENCES "AspNetUsers"
            ON DELETE CASCADE,
    "RoleId" TEXT NOT NULL
        CONSTRAINT "FK_AspNetUserRoles_AspNetRoles_RoleId"
            REFERENCES "AspNetRoles"
            ON DELETE CASCADE,
    CONSTRAINT "PK_AspNetUserRoles"
        PRIMARY KEY ("UserId", "RoleId")
);

CREATE INDEX "IX_AspNetUserRoles_RoleId"
    ON "AspNetUserRoles" ("RoleId");
