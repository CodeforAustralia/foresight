'use strict';

const nff = require('node-find-files');


module.exports.finder = (dir, fromDate) => {

	return new Promise(((resolve, reject) => {

		const fileList = [];

		const find = new nff({
			rootFolder: dir,
			filterFunction: (path, stat) => {
				return (stat.mtime > fromDate) ? true : false;
			}
		});

		find.on("match", (strPath, stat) => {
			console.log(strPath + " - " + stat.mtime);
			fileList.push(strPath);
		});

		find.on("patherror", (err, strPath) => {
			console.log("Error for Path " + strPath + " " + err);
		});

		find.on("error", (err) => {
			console.log("Global Error " + err);
			reject();
		});

		find.on("complete", () => {
			console.log("Finished");
			resolve(fileList);
		});

		find.startSearch();
	}));

};
