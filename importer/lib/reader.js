'use strict';

const fs = require('fs');
const netcdf = require('netcdfjs');
const _	= require('lodash');
const moment = require('moment');
const utils = require('./utils');

const API_DEST = 'meta';


module.exports.extractNetcdf = (src, dest, prefix, source) => {

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
						reject(err);
					else
						resolve(createMetaObj(prefix));
				});

				console.log(dest);
			}
			else {
				reject(`File does not exist: ${src}`);
			}
		}
		catch (error) {
			reject(error);
		}
	}));

};

module.exports.extractShape = (src, dest, prefix, source, availableLayers) => {

	return new Promise(((resolve, reject) => {

		try {
			if (utils.fileExists(src)) {

				// create reader
				const promise = shapefileReader(src);
				const meta = getMetaTemplate();

				promise.then((stats) => {

					meta.prefix = prefix;
					meta.source = source;
					meta.creationTime = stats.ctime;
					delete meta.timeArray;
					meta.layerArray = getLayerArray(stats.mtimeMs, prefix, availableLayers);

					const json = JSON.stringify(meta);

					fs.writeFile(dest, json, 'utf8', (err) => {
						if (err)
							reject(err);
						else
							resolve(createMetaObj(prefix));
					});

					console.log(dest);

				}).catch(reject);

			}
			else {
				reject(`File does not exist: ${src}`);
			}
		}
		catch (error) {
			reject(error);
		}
	}));

};

const shapefileReader = (file) => {

	return new Promise(((resolve, reject) => {
		try {
			fs.stat(file, (error, stats) => {
				if (error)
					reject(error);
				else
					resolve(stats);
			});
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

const getLayerArray = (mtimeMs, prefix, availableLayers) => {

	return _.map(availableLayers, (layer, index) => {
		return { [`${prefix}${layer}`]: moment(mtimeMs, 'x').startOf('day').add(index, 'day').toISOString() };
	});
};

