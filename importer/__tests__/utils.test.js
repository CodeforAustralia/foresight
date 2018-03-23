const utils = require('../lib/utils');
const reader = require('../lib/reader');

const config = {
	bomData: {
		src: `${__dirname}/bom/raw`,
		netcdf: `${__dirname}/bom/netcdf`,
		meta: `${__dirname}/bom/meta`
	},
	bomFiles: {
		curing: {
			prefix: "Curing_SFC"
		}
	}
};

const { bomData } = config;
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

		const { meta } = bomData;
		const dest = `${meta}/index.json`;

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

describe('Reader Extract', () => {

	test('extracts file metadata into a folder', () => {

		const { meta, netcdf } = bomData;

		const pathSrc = `${netcdf}/Curing_SFC.nc`;
		const pathDest = `${meta}/Curing_SFC.json`;

		const result = {
			prefix: 'Curing_SFC',
			url: 'meta/Curing_SFC.json'
		};

		return reader.extract(pathSrc, pathDest, 'Curing_SFC', 'Bom')
			.then((metaObj) => {
				expect(metaObj).toEqual(result);
			})
			.catch((err) => {
				expect(err).toBeUndefined();
			});
	});

	test('throws error if src netcdf file does not exist', () => {

		const { meta, netcdf } = bomData;

		const pathSrc = `${netcdf}/NONEXISTENT_SFC.nc`;
		const pathDest = `${meta}/Curing_SFC.json`;

		return reader.extract(pathSrc, pathDest, 'Curing_SFC', 'Bom')
			.then((metaObj) => {
				expect(metaObj).toBeUndefined();
			})
			.catch((err) => {
				expect(err).toBeDefined();
			});
	});

});
