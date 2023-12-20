const sharp = require("sharp");

sharp("../img/collsacampus-mb.png")
  .png({ quality: 75, compressionLevel: 7 })
  .toFile("../img/collsacampus-mb.webp", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
