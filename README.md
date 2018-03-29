# Foresight

This is the repository for the readiness platform being developed by Code for Australia with Predictive Services.

The repository contains several different services which should be able to operate independently from each other. Current services:

- **Geoserver** - serves the WMS/WFS data
- **API** - serves JSON data
- **Interface** - displays the map
- **Importer** - imports GZipped NetCDF files and processes their metadata into JSON files to be served by the API


## Setup

Each service within this repository has its own `README.md` with instructions on running it locally.

General requirements:

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/)

1. Change to the platform's root folder.
2. Follow setup instructions [Setup](setup/README.md)


## Deploying:

1. Initialise docker swarm.

`docker swarm init`

- Use service README files for instructions on individual services.

2. Deploy platform stack in root project folder.

`docker stack deploy -c docker-deploy.yml foresight`

3. To stop the platform.

`docker stack rm foresight`

4. Shutting Deployment:

`docker swarm leave --force`


## Environments

There are currently no deployment environments for this repository. It is intended that it will be deployed to the Horizon environment.


## Contributing

The contribution style we are using is [trunk based development](https://trunkbaseddevelopment.com/). This means:

- Frequent pull requests from short-lived branches
- Only ever release from `master`

All contributions should be code reviewed and tested before being merged to `master`.
