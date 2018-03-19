'use strict';

const fs = require('fs');
const netcdf = require('netcdfjs');
const _	= require('lodash');
const utils = require('./utils');


module.exports.extract = (src, dest, prefix, source) => {

	return new Promise(((resolve, reject) => {

		if (utils.fileExists(src))
		{
			// create reader
			const nr = netCDFReader(src);
			const meta = getMetaTemplate();

			meta.prefix = prefix;
			meta.source = source;
			meta.creationTime = getCreationTime(nr.globalAttributes);
			meta.timeArray = nr.getDataVariable('time');

			const json = JSON.stringify(meta);

			fs.writeFile(dest, json, 'utf8',  (err) => {
				if (err)
					reject();
				else
					resolve();
			});

			console.log(dest);
		}
		else {
			reject();
		}
	}));

};

const netCDFReader = (file) => {

	const data = fs.readFileSync(file);
	return new netcdf(data);
};

const getMetaTemplate = () => {
	return {
		prefix: "",
		source: "",
		creationTime: 0,
		timeArray: []
	};
};

const getCreationTime = (attributes) => {
	const att = _.find(attributes, { name: 'creationTime' });
	return att.value;
};
