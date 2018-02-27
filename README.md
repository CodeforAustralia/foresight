# Foresight

This is the repository for the readiness platform being developed by Code for Australia with Predictive Services.

The repository contains several different services which should be able to operate independently from each other. Current services:

- **Geoserver** - serves the wms/wfs data
- **API** - serves the restful json data
- **Interface** - displays the map


## Running locally

Each service within this repository has its own `README.md` with instructions on running it locally.

General requirements:

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://www.docker.com/)

Deploying locally:

- Change to the platform's root folder.
- Follow setup instructions [Setup](setup/README.md)
- Initialise docker swarm.

`docker swarm init`

- Use service read me files for instructions on individual services.


Shutting Deployment:

`docker swarm leave --force`


## Deployment

There are currently no deployment environments for this repository. It is intended that it will be deployed to the Horizon environment.

## Contributing

The contribution style we are using is [trunk based development](https://trunkbaseddevelopment.com/). This means:

- Frequent pull requests from short-lived branches
- Only ever release from `master`

All contributions should be code reviewed and tested before being merged to `master`.
