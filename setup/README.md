# Readiness Platform Setup

This repository contains general setup scripts when the platform is installed.


## Importer

- Requires an importer directory

`~/AppData/ReadinessPlatform/importer`


## Database

- Requires an pgdata directory

`~/AppData/ReadinessPlatform/pgdata`

- Mounted in the docker container as

`~/AppData/ReadinessPlatform/pgdata:/var/lib/postgresql/data`

- add database.env in the root directory for credentials (check setup/defaults for sample)

`readiness-platform/database.env`


## Geoserver

- Requires an gsdata directory

`~/AppData/ReadinessPlatform/gsdata`

- Mounted in the docker container as

`~/AppData/ReadinessPlatform/gsdata:/opt/geoserver/data_dir`
