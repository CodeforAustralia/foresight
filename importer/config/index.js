const os = require('os');

module.exports.bomData = {
	src: process.env.BOM_SRC || `${os.homedir()}/AppData/Bom`,
	ext: 'nc.gz'
};

module.exports.bomFiles = {
	temperature: {
		prefix: 'T_SFC'
	}
};
