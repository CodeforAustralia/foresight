# Foresight Setup

This repository contains general setup scripts when the platform is installed.
All the paths are relative to the project folder.


## Importer

- Copy & Paste the 'settings-sample.json' into './config' folder and rename it to 'settings.json'

`cp setup/importer/settings-sample.json importer/config/settings.json`

- Modify this settings.json specifying source and temp folders

`importer/config/settings.json`


## API

- Requires an api docker image

`cd setup/api`

`./build.sh`

- Requires a public_html directory

`api/public_html`

- Mounted in the docker container as

`api/public_html:/src/public_html`


## Geoserver

- Requires a geoserver docker image

`cd setup/geoserver`

`./build.sh`

- Requires a gsdata directory

`geoserver/gsdata`

- Mounted in the docker container as

`geoserver/gsdata:/opt/geoserver/data_dir`

## Interface

_For the DELWP instance of this application the layer, indicator, and settings configuration is kept in a separate repository._

### Build

From the interface folder:

```sh
cd ../interface
```

Build the application:

```sh
yarn run build
```

Copy the build files into the API public HTML folder:

```
cp build/ ../api/public_html/
```
