const os = require('os');

module.exports.bomData = {
	src: process.env.BOM_SRC || `${os.homedir()}/AppData/Bom`,
	dest: `${os.homedir()}/AppData/ReadinessPlatform/importer`,
	ext: 'nc.gz'
};

module.exports.bomFiles = {
	temperature: {
		prefix: 'T_SFC'
	},
	ffdi: {
		prefix: 'FFDI_SFC'
	},
	kbdi: {
		prefix: 'KBDI_SFC'
	}
};
