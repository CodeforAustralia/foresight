# Foresight (API)

## Development, Testing and Deployment

API included in the docker deploy yaml. The api provides access to the metadata and serves the index.html Single Page Application.


### Developing API

Requirements:

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

1. Follow setup instructions [Setup](../setup/README.md)
2. Copy the meta data files from the importer to public_html directory.
3. Install dependencies with `yarn install`.
4. `yarn run start`


### Deploying API

1. Copy the meta data files from the importer to public_html directory.

`public_html/meta/index.json`
`public_html/meta/CHaines_SFC.json`
`public_html/meta/Curing_SFC.json`
`public_html/meta/DF_SFC.json`
`public_html/meta/FFDI_SFC.json`
`public_html/meta/GFDI_SFC.json`
`public_html/meta/MaxFDI_SFC.json`
`public_html/meta/KBDI_SFC.json`
`public_html/meta/RH_SFC.json`
`public_html/meta/T_SFC.json`
`public_html/meta/Wind_Dir_SFC.json`
`public_html/meta/Wind_Mag_SFC.json`
`public_html/meta/fdr_90perDistrict.json`
`public_html/meta/fdr_90perICC.json`
`public_html/meta/fdr_90perLGA.json`

2. Deploy geoserver using instructions [Main](../README.md)
