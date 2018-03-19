# Readiness Platform Setup

This repository contains general setup scripts when the platform is installed.
All the paths are relative to the project folder.


## Importer

- Copy & Paste the 'settings-sample.json' into './config' folder and rename it to 'settings.json'

`cp setup/importer/settings-sample.json importer/config/settings.json`

- Modify this settings.json specifying source and temp folders

`importer/config/settings.json`


## Geoserver

- Requires a geoserver docker image

`cd setup/geoserver`

`./build.sh`

- Requires a gsdata directory

`geoserver/gsdata`

- Mounted in the docker container as

`geoserver/gsdata:/opt/geoserver/data_dir`
