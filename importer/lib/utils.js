'use strict';

const fs = require('fs');
const zlib = require('zlib');
const nff = require('node-find-files');


module.exports.finder = (dir, fromDate) => {

	return new Promise(((resolve, reject) => {

		try {
			const filePaths = [];

			const find = new nff({
				rootFolder: dir,
				filterFunction: (path, stat) => {
					return (stat.mtime > fromDate) ? true : false;
				}
			});

			find.on("match", (strPath, stat) => {
				console.log(strPath + " - " + stat.mtime);
				filePaths.push(strPath);
			});

			find.on("patherror", (err, strPath) => {
				console.log("Error for Path " + strPath + " " + err);
			});

			find.on("error", (err) => {
				console.log("Global Error " + err);
				reject(err);
			});

			find.on("complete", () => {
				resolve(filePaths);
			});

			find.startSearch();

		}
		catch (error) {
			reject(error);
		}

	}));

};

module.exports.decompress = (src, dest) => {

	return new Promise(((resolve, reject) => {

		try {
			if (exports.fileExists(src)) {
				// prepare streams
				const input = fs.createReadStream(src);
				const output = fs.createWriteStream(dest);

				// extract the archive
				input.pipe(zlib.createGunzip()).pipe(output);

				// callback on extract completion
				output.on('close', () => {
					console.log("Unzipping to " + dest);
					resolve({src, dest});
				});
			}
			else {
				reject(`File does not exist: ${dest}`);
			}
		}
		catch (error) {
			reject(error);
		}
	}));

};

module.exports.writeJsonFile = (dest, data) => {

	return new Promise(((resolve, reject) => {

		try {
			const json = JSON.stringify(data);

			fs.writeFile(dest, json, 'utf8', (err) => {
				if (err)
					reject(err);
				else
					resolve();
			});

			console.log(dest);
		}
		catch (error) {
			reject(error);
		}
	}));

};

module.exports.writeFile = (src, dest) => {

	return new Promise(((resolve, reject) => {

		let rd = null;
		let wr = null;

		try {
			console.log(dest);
			rd = fs.createReadStream(src);
			wr = fs.createWriteStream(dest);

			rd.on('error', reject);
			wr.on('error', reject);
			wr.on('finish', resolve);
			rd.pipe(wr);
		}
		catch (error) {
			rd.destroy();
			wr.end();
			reject(error);
		}
	}));

};

module.exports.fileExists = (filePath) => {
	try {
		return fs.statSync(filePath).isFile();
	} catch (err) {
		return false;
	}
};
