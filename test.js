var sharp = require('sharp');

var i = sharp('image.png');

i.metadata(function(err,m) {
  console.log("Metadata", m);
});

i.embed() // works without embed
  .resize(100, 100)
  .background({r:0,g:0,b:0,a:0}) // works with a:1
  .toBuffer(function(err, output, info) {
    if (err) {
      throw err;
    } else {
      console.log("All good")
    }
  });
