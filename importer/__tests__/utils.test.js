const utils = require('../lib/utils');
const reader = require('../lib/reader');

const config = {
	metaData: {
		dest: `${__dirname}/bom/meta`
	},
	bomData: {
		src: `${__dirname}/bom/raw`,
		netcdf: `${__dirname}/bom/netcdf`
	},
	cfaData: {
		src: `${__dirname}/bom/rawCfa`,
		shp: `${__dirname}/bom/shp`,
		ext: [".dbf", ".shp", ".shx"]
	}
};

const { metaData, bomData, cfaData } = config;
const FilesModifiedAfterDate = new Date('2010-01-01');


describe('Utils Finder', () => {

	test('finds files in a folder', () => {

		const { src } = bomData;

		return utils.finder(src, FilesModifiedAfterDate)
			.then((filePaths) => {
				expect(filePaths.length).toBe(1);
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if src folder does not exist', () => {

		const nonexistentSrc = `${__dirname}/bom/nonexistent`;

		return utils.finder(nonexistentSrc, FilesModifiedAfterDate)
			.then(() => {})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});


describe('Utils Decompress', () => {

	test('unzips files in a folder', () => {

		const { src, netcdf } = bomData;

		const pathSrc = `${src}/Curing_SFC_0A88CAA15CE8C8AD08F8CF748C24EEC98305913C.nc.gz`;
		const pathDest = `${netcdf}/Curing_SFC.nc`;

		return utils.decompress(pathSrc, pathDest)
			.then((unzippedObj) => {
				expect(unzippedObj).toBeDefined();
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if src file does not exist', () => {

		const { src, netcdf } = bomData;

		const pathSrc = `${src}/NONEXISTENT_SFC_0A88CAA15CE8C8AD08F8CF748C24EEC98305913C.nc.gz`;
		const pathDest = `${netcdf}/NONEXISTENT_SFC.nc`;

		return utils.decompress(pathSrc, pathDest)
			.then(() => {})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});

describe('Utils writeJsonFile', () => {

	test('writes json files into a folder', () => {

		const { dest: out } = metaData;
		const dest = `${out}/index.json`;

		const obj = { key: 'value' };

		return utils.writeJsonFile(dest, obj)
			.then(() => {
				expect(utils.fileExists(dest)).toEqual(true);
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if destination folder does not exist', () => {

		const nonexistentDest = `${__dirname}/bom/nonexistent`;
		const dest = `${nonexistentDest}/index.json`;

		const obj = { key: 'value' };

		return utils.writeJsonFile(dest, obj)
			.then(() => {
				expect(utils.fileExists(dest)).toEqual(false);
			})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});

describe('Utils writeFile', () => {

	test('writes files into a folder', () => {

		const { src, shp } = cfaData;
		const source = `${src}/fdr_90perDistrict_day0.shp`;
		const dest = `${shp}/fdr_90perDistrict_day0.shp`;

		return utils.writeFile(source, dest)
			.then(() => {
				expect(utils.fileExists(dest)).toEqual(true);
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if destination folder does not exist', () => {

		const { src } = cfaData;
		const nonexistentDest = `${__dirname}/bom/nonexistent`;
		const source = `${src}/fdr_90perDistrict_day0.shp`;
		const dest = `${nonexistentDest}/fdr_90perDistrict_day0.shp`;

		return utils.writeFile(source, dest)
			.then(() => {
				expect(utils.fileExists(dest)).toEqual(false);
			})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});

describe('Reader ExtractNetCdf', () => {

	test('extracts netcdf file metadata into a folder', () => {

		const { dest } = metaData;
		const { netcdf } = bomData;

		const pathSrc = `${netcdf}/Curing_SFC.nc`;
		const pathDest = `${dest}/Curing_SFC.json`;

		const result = {
			prefix: 'Curing_SFC',
			url: 'meta/Curing_SFC.json'
		};

		return reader.extractNetcdf(pathSrc, pathDest, 'Curing_SFC', 'BoM')
			.then((metaObj) => {
				expect(metaObj).toEqual(result);
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if src netcdf file does not exist', () => {

		const { dest } = metaData;
		const { netcdf } = bomData;

		const pathSrc = `${netcdf}/NONEXISTENT_SFC.nc`;
		const pathDest = `${dest}/Curing_SFC.json`;

		return reader.extractNetcdf(pathSrc, pathDest, 'Curing_SFC', 'BoM')
			.then((metaObj) => {
				expect(metaObj).toBeUndefined();
			})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});


describe('Reader ExtractShape', () => {

	test('extracts shape file metadata into a folder', () => {

		const { dest } = metaData;
		const { shp } = cfaData;

		const pathSrc = `${shp}/fdr_90perDistrict_day0.shp`;
		const pathDest = `${dest}/fdr_90perDistrict_day0.json`;

		const result = {
			prefix: 'fdr_90perDistrict_day0',
			url: 'meta/fdr_90perDistrict_day0.json'
		};

		return reader.extractShape(pathSrc, pathDest, 'fdr_90perDistrict_day0', 'CFA')
			.then((metaObj) => {
				expect(metaObj).toEqual(result);
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if src netcdf file does not exist', () => {

		const { dest } = metaData;
		const { shp } = cfaData;

		const pathSrc = `${shp}/NONEXISTENT_SFC.nc`;
		const pathDest = `${dest}/fdr_90perDistrict_day0.json`;

		return reader.extractShape(pathSrc, pathDest, 'fdr_90perDistrict_day0', 'CFA')
			.then((metaObj) => {
				expect(metaObj).toBeUndefined();
			})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});
