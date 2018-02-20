# Readiness Platform

This is the repository for the readiness platform being developed by Code for Australia with Predictive Services.

The repository contains several different services which should be able to operate independently from each other. Current services:

- **Importer** - imports and processes data
- **Interface** - displays the map

## Running locally

Each service within this repository has its own `README.md` with instructions on running it locally.

General requirements:

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/)

Deploying locally:

1. Follow setup instructions [Setup](setup/README.md)
2. Initialise docker swarm.

`docker swarm init`

3. Deploy all services on the platform.

`docker stack deploy -c docker-compose.yml readiness-platform`

4. To stop the platform.

`docker stack rm readiness-platform`

`docker swarm leave --force`


## Deployment

There are currently no deployment environments for this repository. It is intended that it will be deployed to the Horizon environment.

## Contributing

The contribution style we are using is [trunk based development](https://trunkbaseddevelopment.com/). This means:

- Frequent pull requests from short-lived branches
- Only ever release from `master`

All contributions should be code reviewed and tested before being merged to `master`.
