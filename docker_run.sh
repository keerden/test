#!/bin/bash

docker container rm test-container
docker build . -t test-container 
docker run -p 1234:8080 --name test-container test-container 
