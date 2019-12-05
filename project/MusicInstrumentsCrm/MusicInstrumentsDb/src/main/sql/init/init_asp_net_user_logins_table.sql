CREATE TABLE "AspNetUserLogins"
(
    "LoginProvider"       VARCHAR(128) NOT NULL,
    "ProviderKey"         VARCHAR(128) NOT NULL,
    "ProviderDisplayName" TEXT,
    "UserId"              TEXT         NOT NULL
        CONSTRAINT "FK_AspNetUserLogins_AspNetUsers_UserId"
            REFERENCES "AspNetUsers"
            ON DELETE CASCADE,
    CONSTRAINT "PK_AspNetUserLogins"
        PRIMARY KEY ("LoginProvider", "ProviderKey")
);

CREATE INDEX "IX_AspNetUserLogins_UserId"
    ON "AspNetUserLogins" ("UserId");
