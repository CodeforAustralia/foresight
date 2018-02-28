# Readiness Platform Setup

This repository contains general setup scripts when the platform is installed.
All the paths are relative to the project folder.


## Database

- Requires an pgdata directory

`./pgdata`

- Mounted in the docker container as

`./pgdata:/var/lib/postgresql/data`

- add database.env in the database directory for credentials (check setup/database for sample)

`database.env`


## Geoserver

- Requires a geoserver docker image

`cd setup/geoserver`

`./build.sh`

- Requires a gsdata directory

`geoserver/gsdata`

- Mounted in the docker container as

`geoserver/gsdata:/opt/geoserver/data_dir`
