CREATE TABLE "DeviceCodes"
(
    "UserCode"     VARCHAR(200)   NOT NULL
        CONSTRAINT "PK_DeviceCodes"
            PRIMARY KEY,
    "DeviceCode"   VARCHAR(200)   NOT NULL,
    "SubjectId"    VARCHAR(200),
    "ClientId"     VARCHAR(200)   NOT NULL,
    "CreationTime" TIMESTAMP      NOT NULL,
    "Expiration"   TIMESTAMP      NOT NULL,
    "Data"         VARCHAR(50000) NOT NULL
);

CREATE UNIQUE INDEX "IX_DeviceCodes_DeviceCode"
    ON "DeviceCodes" ("DeviceCode");

CREATE INDEX "IX_DeviceCodes_Expiration"
    ON "DeviceCodes" ("Expiration");