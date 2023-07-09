const ncp = require("ncp").ncp;

function copyImages() {
  const sourceDir = "src/images";
  const destinationDir = "dist/images";

  ncp(sourceDir, destinationDir, function (err) {
    if (err) {
      console.error(err);
    }
  });
}

function copyCss() {
  const sourceDir = "rose/css/";
  const destinationDir = "dist/css/";

  ncp(sourceDir, destinationDir, function (err) {
    if (err) {
      console.error(err);
    }
  });
}

copyImages();
