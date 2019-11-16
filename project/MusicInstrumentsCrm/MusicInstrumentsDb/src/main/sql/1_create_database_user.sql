/*
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    SHOULD BE FIRST IN SCHEMA.SQL
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
CREATE USER admin SUPERUSER PASSWORD 'admin';
CREATE DATABASE micrm_db;
GRANT ALL PRIVILEGES ON DATABASE micrm_db TO admin;

