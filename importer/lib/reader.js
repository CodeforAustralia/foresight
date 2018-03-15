'use strict';

const fs = require('fs');
const netcdf = require('netcdfjs');


module.exports.netCDFReader = (file) => {

	const data = fs.readFileSync(file);
	return new netcdf(data);
};
