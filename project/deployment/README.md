# Images in Docker hub
**MiCRM APP** : `rienelmot24/micrm-app`

**MiCRM DB** : `rienelmot24/micrm-db`

# Deployment system MiCRM
```
docker-compose build
```

## Startup containers for debug
```
docker-compose up --abort-on-container-exit 
docker-compose rm
```

## Startup container for production
```
docker-compose up
```

# Show all containers
```
docker ps -a
```

# Clear all containers
```
docker rm $(docker ps -aq)
```

# Clear all images
```
docker rmi $(docker images -aq)
```

You can add `-f` flag for force removing