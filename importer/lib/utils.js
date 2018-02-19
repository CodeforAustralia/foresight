'use strict';

const fs = require('fs');
const zlib = require('zlib');
const nff = require('node-find-files');


module.exports.finder = (dir, fromDate) => {

	return new Promise(((resolve, reject) => {

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
			reject();
		});

		find.on("complete", () => {
			resolve(filePaths);
		});

		find.startSearch();
	}));

};

module.exports.decompress = (src, dest) => {

	return new Promise(((resolve, reject) => {

		if (fileExists(src))
		{
			// prepare streams
			const input = fs.createReadStream(src);
			const output = fs.createWriteStream(dest);

			// extract the archive
			input.pipe(zlib.createGunzip()).pipe(output);

			// callback on extract completion
			output.on('close', () => {
				console.log("Unzipped " + src);
				resolve();
			});
		}
		else {
			reject();
		}
	}));

};

const fileExists = (filePath) => {
	try {
		return fs.statSync(filePath).isFile();
	} catch (err) {
		return false;
	}
};
