# Foresight (Geoserver)

## Development, Testing and Deployment

Geoserver included in the docker deploy yaml


### Developing GS

1. A "gsdata" folder/volume from the user directory needs to be mounted in the container.

`./gsdata:/opt/geoserver/data_dir`

Geoserver landing page

`http://localhost:8080/geoserver`


### Deploying GS

1. Copy the data files to data directory.

`gsdata/data/netcdf/CHaines_SFC.nc`
`gsdata/data/netcdf/Curing_SFC.nc`
`gsdata/data/netcdf/DF_SFC.nc`
`gsdata/data/netcdf/FFDI_SFC.nc`
`gsdata/data/netcdf/GFDI_SFC.nc`
`gsdata/data/netcdf/KBDI_SFC.nc`
`gsdata/data/netcdf/RH_SFC.nc`
`gsdata/data/netcdf/T_SFC.nc`
`gsdata/data/netcdf/Wind_Dir_SFC.nc`
`gsdata/data/netcdf/Wind_Mag_SFC.nc`

2. Deploy geoserver using instructions [Main](../README.md)
