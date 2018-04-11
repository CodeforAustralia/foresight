const _	= require('lodash');
const utils = require('./lib/utils');
const reader = require('./lib/reader');
const config = require('./config/settings.json');

const { metaData, bomData, bomFiles, cfaData, cfaFiles } = config;
const FilesModifiedAfterDate = new Date('2010-01-01');


// Process Bom files

const findBomFiles = () => {

	console.log("Bom Finder started ... ");
	const { src } = bomData;

	return utils.finder(src, FilesModifiedAfterDate)
		.then((filePaths) => {
			console.log("Finder finished!");
			return filePaths;
		})
		.catch((err) => {
			console.log(err);
		});
};

const decompressBomNetcdf = (filePaths) => {

	console.log("Bom Decompressor started ... ");
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

	console.log("Bom Extractor started ... ");
	const { name, netcdf } = bomData;
	const { dest } = metaData;
	const source = name || "BoM";
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const pathSrc = `${netcdf}/${value.prefix}.nc`;
		const pathDest = `${dest}/${value.prefix}.json`;
		promises.push(reader.extract(pathSrc, pathDest, value.prefix, source));
	});

	return Promise.all(promises);
};

// Process CFA files

const findCfaFiles = () => {

	console.log("Finder started ... ");
	const { src } = cfaData;

	return utils.finder(src, FilesModifiedAfterDate)
		.then((filePaths) => {
			console.log("Finder finished!");
			return filePaths;
		})
		.catch((err) => {
			console.log(err);
		});
};

const copyCfaFiles = (filePaths) => {

	console.log("Copier started ... ");
	const { shp, ext } = cfaData;
	const promises = [];

	const extensions = _.isArray(ext) ? ext : [];

	_.forEach(cfaFiles, (value, key) => {

		for (let i = 0; i < extensions.length; i++ ) {
			const pathSrc = _.find(filePaths, (path) => _.includes(path, `${value.prefix}.${extensions[0]}`));
			if (pathSrc) {
				const pathDest = `${shp}/${value.prefix}.${extensions[0]}`;
				promises.push(utils.writeFile(pathSrc, pathDest));
			}
		}
	});

	return Promise.all(promises);
};

const extractCfaMeta = () => {

	console.log("Extractor started ... ");
	const { name, shp } = cfaData;
	const { dest } = metaData;
	const source = name || "BoM";
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const pathSrc = `${shp}/${value.prefix}.shp`;
		const pathDest = `${dest}/${value.prefix}.json`;
		promises.push(reader.extract(pathSrc, pathDest, value.prefix, source));
	});

	return Promise.all(promises);
};

const extractAll = () => {

	const promises = [];
	//promises.push(extractBomMeta());
	promises.push(extractCfaMeta());

	return Promise.all(promises);
};

const createIndex = (metaObjs) => {

	const { dest } = metaData;
	const merged = _.merge(metaObjs[0], metaObjs[1]);

	const out = `${dest}/index.json`;
	return utils.writeJsonFile(out, merged);
};

// Run

//findBomFiles()
	//.then(decompressBomNetcdf)
	//.then(findCfaFiles)
	//.then(copyCfaFiles)
findCfaFiles()
	.then(copyCfaFiles)
	//.then(extractAll)
	//.then(createIndex)
	.then(() => {
		console.log("Importer finished!");
	})
	.catch((err) => {
		console.error(err);
	});
