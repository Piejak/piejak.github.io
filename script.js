var randomImages = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png", "image9.png", "image10.png", ];

function getRandomImage(imgAr){
  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr[num];
  var imgStr = '<img src="' + img + '" alt = "something went wrong">';
  document.write(imgStr); document.close();
}
