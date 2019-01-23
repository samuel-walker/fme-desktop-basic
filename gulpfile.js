// Tests to make sure gitbook was built to _book directory

function checkBuild(cb) {
  var fs = require('fs');
  const dir = '_book';
  fs.access(dir, fs.constants.F_OK, (err) => {
    console.log(`${dir} ${err ? 'does not exist' : 'exists'}`);
  });
  cb();
}

exports.default = checkBuild
