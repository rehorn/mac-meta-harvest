var glob = require('glob');
var rimraf = require('./rimraf');

module.exports = harvest;

function harvest(path) {
    path = path + '**/{.DS_Store,.AppleDouble,.apdisk,.VolumeIcon.icns,.Thumbs.db,.fseventsd,.Spotlight-V100,.TemporaryItems,.Trashes}';
    glob(path, function(err, files) {
        files.forEach(function(file) {
            rimraf(file, function(err) {
                console.log('rm: ' + file);
            });
        });
    });
};
