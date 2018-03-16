const _	= require('lodash');
const utils = require('./lib/utils');
const reader = require('./lib/reader');
const config = require('./config/settings.json');

const { bomData, bomFiles } = config;


// Finds the files of interest from bom data location

const findFiles = () => {

	console.log("Finder started ... ");
	const { src } = bomData;
	const dateModified = new Date('2010-01-01');

	return utils.finder(src, dateModified)
		.then((filePaths) => {
			console.log("Finder finished!");
			return filePaths;
		})
		.catch((err) => {
			console.log(err);
		});
};

const decompressBomNetcdf = (filePaths) => {

	console.log("Decompressor started ... ");
	const { netcdf } = bomData;
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const path = _.find(filePaths, (path) => _.includes(path, value.prefix));
		if (path) {
			const pathDest = `${netcdf}/${value.prefix}.nc`;
			promises.push(utils.decompress(path, pathDest));
		}
	});

	return Promise.all(promises);
};

const extractBomMeta = () => {

	console.log("Extractor started ... ");
	const source = "Bom";
	const { meta, netcdf } = bomData;
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const pathSrc = `${netcdf}/${value.prefix}.nc`;
		const pathDest = `${meta}/${value.prefix}.json`;
		promises.push(reader.extract(pathSrc, pathDest, value.prefix, source));
	});

	return Promise.all(promises);
};

// Run

findFiles()
	.then(decompressBomNetcdf)
	.then(extractBomMeta)
	.then(() => {
		console.log("Importer finished!");
	});
