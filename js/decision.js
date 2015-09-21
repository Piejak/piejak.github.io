var randomconvos = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png", "image9.png", "image10.png", ];

function getRandomConvo(comAr){
  var num = Math.floor(Math.random() * comAr.length);
  var img = comAr[num];
  var imgStr = '<img src="img/' + img + '" alt = "something went wrong">';
  document.write(imgStr); document.close();
}

var randomdates = ["date1.png", "date2.png", "date3.png", "date4.png", "date5.png", "date6.png", "date7.png", "date8.png", "date9.png", "date10.png", "date11.png", ];

function getRandomDate(dateAr){
  var number = Math.floor(Math.random() * dateAr.length);
  var image = dateAr[number];
  var imageStr = '<img src="img/' + image + '" alt = "something went wrong">';
  document.write(imageStr); document.close();
}
