const _	= require('lodash');
const utils = require('./lib/utils');
const reader = require('./lib/reader');
const config = require('./config');

const { bomData, bomFiles } = config;


// Finds the files of interest from bom data location

const findFiles = () => {

	console.log("Finder started ... ");
	const { src } = bomData;
	const dateModified = new Date('2018-01-01');

	return utils.finder(src, dateModified)
		.then((filePaths) => {
			console.log("Finder finished!");
			return filePaths;
		})
		.catch((err) => {
			console.log(err);
		});
};

const decompressFiles = (filePaths) => {

	console.log("Decompressor started ... ");
	const { dest } = bomData;
	const promises = [];

	_.forEach(bomFiles, (value, key) => {

		const path = _.find(filePaths, (path) => _.includes(path, value.prefix));
		if (path) {
			const pathDest = `${dest}/${value.prefix}.nc`;
			promises.push(utils.decompress(path, pathDest));
		}
	});

	return Promise.all(promises);
};

findFiles()
	.then(decompressFiles)
	.then(() => {
		console.log("Decompressor finished!");
	});
