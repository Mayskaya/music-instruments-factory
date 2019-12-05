CREATE TABLE "PersistedGrants"
(
    "Key"          VARCHAR(200)   NOT NULL
        CONSTRAINT "PK_PersistedGrants"
            PRIMARY KEY,
    "Type"         VARCHAR(50)    NOT NULL,
    "SubjectId"    VARCHAR(200),
    "ClientId"     VARCHAR(200)   NOT NULL,
    "CreationTime" TIMESTAMP      NOT NULL,
    "Expiration"   TIMESTAMP,
    "Data"         VARCHAR(50000) NOT NULL
);

CREATE INDEX "IX_PersistedGrants_Expiration"
    ON "PersistedGrants" ("Expiration");

CREATE INDEX "IX_PersistedGrants_SubjectId_ClientId_Type"
    ON "PersistedGrants" ("SubjectId", "ClientId", "Type");