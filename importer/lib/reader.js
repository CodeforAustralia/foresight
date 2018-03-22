'use strict';

const fs = require('fs');
const netcdf = require('netcdfjs');
const _	= require('lodash');
const moment = require('moment');
const utils = require('./utils');

const API_DEST = 'meta';


module.exports.extract = (src, dest, prefix, source) => {

	return new Promise(((resolve, reject) => {

		try {
			if (utils.fileExists(src)) {
				// create reader
				const nr = netCDFReader(src);
				const meta = getMetaTemplate();

				meta.prefix = prefix;
				meta.source = source;
				meta.creationTime = getCreationTime(nr.globalAttributes);
				meta.timeArray = getTimeVariable(nr.getDataVariable('time'));

				const json = JSON.stringify(meta);

				fs.writeFile(dest, json, 'utf8', (err) => {
					if (err)
						reject();
					else
						resolve(createMetaObj(prefix));
				});

				console.log(dest);
			}
			else {
				reject();
			}
		}
		catch (error) {
			reject(error);
		}
	}));

};

const netCDFReader = (file) => {

	const data = fs.readFileSync(file);
	return new netcdf(data);
};

const createMetaObj = (prefix) => {
	return {
		prefix: prefix,
		url: `${API_DEST}/${prefix}.json`
	};
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
	return moment(att.value, 'X').toISOString();
};

const getTimeVariable = (arr) => {
	return _.map(arr, (value) => {
		return moment(value, 'X').toISOString();
	});
};
