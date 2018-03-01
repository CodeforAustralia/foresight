# Foresight (Geoserver)

## Development, Testing and Deployment

Geoserver included in the docker compose yaml


### Developing GS

A "gsdata" folder/volume from the user directory needs to be mounted in the container.

`./gsdata:/opt/geoserver/data_dir`

Geoserver landing page

`http://localhost:8080/geoserver`


### Deploying GS

1. Copy the data files to data directory.

`gsdata/data/netcdf/T_SFC.nc`
`gsdata/data/netcdf/*`

2. Deploy geoserver stack on the platform.

`docker stack deploy -c docker-compose.yml foresight-gs`

3. To stop the platform.

`docker stack rm foresight-gs`
