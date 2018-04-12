const _	= require('lodash');
const utils = require('./lib/utils');
const reader = require('./lib/reader');
const config = require('./config/settings.json');

const { metaData, bomData, bomFiles, cfaData, cfaFiles } = config;
const FilesModifiedAfterDate = new Date('2010-01-01');


// Process Bom files

let availableBomFiles = [];

const findBomFiles = () => {

	console.log("Bom Finder started ... ");
	const { src } = bomData;

	return utils.finder(src, FilesModifiedAfterDate)
		.then((filePaths) => {
			console.log("Finder finished!");
			availableBomFiles = filePaths;
		})
		.catch((err) => {
			console.log(err);
		});
};

const decompressBomNetcdf = () => {

	console.log("Bom Decompressor started ... ");
	const { netcdf } = bomData;
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const path = _.find(availableBomFiles, (path) => _.includes(path, value.prefix));
		if (path) {
			const pathDest = `${netcdf}/${value.prefix}.nc`;
			promises.push(utils.decompress(path, pathDest));
		}
	});

	return Promise.all(promises);
};

const extractBomMeta = () => {

	console.log("Bom Extractor started ... ");
	const { name, netcdf } = bomData;
	const { dest } = metaData;
	const source = name || "BoM";
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const path = _.find(availableBomFiles, (path) => _.includes(path, `${value.prefix}`));
		if (path) {
			const pathSrc = `${netcdf}/${value.prefix}.nc`;
			const pathDest = `${dest}/${value.prefix}.json`;
			promises.push(reader.extractNetcdf(pathSrc, pathDest, value.prefix, source));
		}
	});

	return Promise.all(promises);
};

// Process CFA files

let availableCfaFiles = [];

const findCfaFiles = () => {

	console.log("CFA Finder started ... ");
	const { src } = cfaData;

	return utils.finder(src, FilesModifiedAfterDate)
		.then((filePaths) => {
			console.log("Finder finished!");
			availableCfaFiles = filePaths;
		})
		.catch((err) => {
			console.log(err);
		});
};

const copyCfaFiles = () => {

	console.log("CFA Copier started ... ");
	const { shp, ext } = cfaData;
	const promises = [];

	const extensions = _.isArray(ext) ? ext : [];

	_.forEach(cfaFiles, (value, key) => {

		for (let i = 0; i < extensions.length; i++ ) {
			const pathSrc = _.find(availableCfaFiles, (path) => _.includes(path, `${value.prefix}.${extensions[i]}`));
			if (pathSrc) {
				const pathDest = `${shp}/${value.prefix}.${extensions[i]}`;
				promises.push(utils.writeFile(pathSrc, pathDest));
			}
		}
	});

	return Promise.all(promises);
};

const extractCfaMeta = () => {

	console.log("CFA Extractor started ... ");
	const { name, shp } = cfaData;
	const { dest } = metaData;
	const source = name || "CFA";
	const promises = [];

	_.forEach(cfaFiles, (value, key) => {

		const path = _.find(availableCfaFiles, (path) => _.includes(path, `${value.prefix}.shp`));
		if (path) {
			const pathSrc = `${shp}/${value.prefix}.shp`;
			const pathDest = `${dest}/${value.prefix}.json`;
			promises.push(reader.extractShape(pathSrc, pathDest, value.prefix, source));
		}
	});

	return Promise.all(promises);
};

const extractAll = () => {

	const promises = [];
	promises.push(extractBomMeta());
	promises.push(extractCfaMeta());

	return Promise.all(promises);
};

const createIndex = (metaObjs) => {

	const { dest } = metaData;
	const combined = _.concat(metaObjs[0], metaObjs[1]);

	const out = `${dest}/index.json`;
	return utils.writeJsonFile(out, combined);
};

// Run

findBomFiles()
	.then(decompressBomNetcdf)
	.then(findCfaFiles)
	.then(copyCfaFiles)
	.then(extractAll)
	.then(createIndex)
	.then(() => {
		console.log("Importer finished!");
	})
	.catch((err) => {
		console.error(err);
	});
