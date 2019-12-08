CREATE ROLE replica_user WITH
    LOGIN
    PASSWORD 'replica_user'
    REPLICATION SUPERUSER;