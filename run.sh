#!/usr/bin/env bash

COMPOSE_FILE="-f docker/docker-compose.yml"
COMMAND=$1

if [ "$COMMAND" == "up" ]; then
	docker-compose $COMPOSE_FILE up --build --remove-orphans -d
	docker-compose $COMPOSE_FILE ps
elif [ "$COMMAND" == "down" ]; then
    docker-compose $COMPOSE_FILE stop
elif [ "$COMMAND" == "info" ]; then
	docker-compose $COMPOSE_FILE ps
else
    echo "Usage: "
    echo "  $0 <up|down|info>"
    exit 1
fi
