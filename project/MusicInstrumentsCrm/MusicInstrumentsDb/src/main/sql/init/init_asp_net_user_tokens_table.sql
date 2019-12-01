CREATE TABLE "AspNetUserTokens"
(
    "UserId"        TEXT         NOT NULL
        CONSTRAINT "FK_AspNetUserTokens_AspNetUsers_UserId"
            REFERENCES "AspNetUsers"
            ON DELETE CASCADE,
    "LoginProvider" VARCHAR(128) NOT NULL,
    "Name"          VARCHAR(128) NOT NULL,
    "Value"         TEXT,
    CONSTRAINT "PK_AspNetUserTokens"
        PRIMARY KEY ("UserId", "LoginProvider", "Name")
);