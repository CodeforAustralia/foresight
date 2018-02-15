const utils 	= require('./lib/utils');
const reader	= require('./lib/reader');
const config 	= require('./config');

const { bomData, bomFiles } = config;


//const file = __dirname + '/samples/' + 'sample.nc';
//reader.reader(file);

// Find Files

const findFiles = () => {

	const { src, ext } = bomData;
	const dateModified = new Date('2018-01-01');

	utils.finder(src, dateModified)
		.then((files) => {
			console.log(files);
		})
		.catch((err) => {
			console.log(err);
		});
};


findFiles();
