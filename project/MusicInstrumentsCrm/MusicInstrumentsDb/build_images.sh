#!/bin/bash

echo 'Building pure micrm-db image (without init data)'
docker build --target=clear -t rienelmot24/micrm-db .  

echo 'Building micrm-db image (with init data)'
docker build --target=init -t rienelmot24/micrm-db . 
