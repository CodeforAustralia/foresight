# Foresight Importer

This service imports data in a [NetCDF](https://www.unidata.ucar.edu/software/netcdf/) format and processes it so that it can be used by the other services.

## Running

Requirements:

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

1. Follow setup instructions [Setup](../setup/README.md)
2. Install dependencies with `yarn install`.
3. Copy the Gzipped files into the 'source folder configured in settings.json'
4. Copy the Shape files into the 'shapes' folder configured in settings.json
5. `yarn run start`
6. Replace the "netcdf" folder in geoserver with the one from importer

`readiness-platform/geoserver/gsdata/data/netcdf`

7. Replace the "shp" folder in geoserver with the one from importer

`readiness-platform/geoserver/gsdata/data/shp`

8. Replace the meta folder in api with the one from importer

`readiness-platform/api/public_html/meta`


NOTE: Geoserver creates hidden files in the "netcdf" and "shp" folders that it uses for indexing. To avoid data corruption, it is best to completely
replace these folders instead of overwriting some of their contents.


## Testing

`yarn run test`
