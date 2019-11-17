#!/bin/bash

docker build . --tag=micrm_db_init --build-arg SHOULD_CONTAIN_INIT='true'

echo 'docker build . --tag=micrm_db';
docker build . --tag=micrm_db
