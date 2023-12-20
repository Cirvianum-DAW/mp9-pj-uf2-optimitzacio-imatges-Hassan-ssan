const sharp = require('sharp');

sharp("../img/tpv-mb.png")
  .png({ quality: 75, compressionLevel: 7 })
  .toFile("tpv-mb.webp", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });