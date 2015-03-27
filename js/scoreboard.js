var blue = 0;
var red = 0;

function blueteamscore(){
  blue++;
  document.getElementById('blue-score').innerHTML = blue;
}

function redteamscore(){
  red++;
  document.getElementById('red-score').innerHTML = red;
}

function bluename(){
  document.getElementById('blue-name').innerHTML = prompt("Enter a new name") + '' + '<button class="write btn-floating btn-large red lighten-1" onclick="bluename()"><i class="mdi-content-create"></i></button>';
}

function redname(){
  document.getElementById('red-name').innerHTML = prompt("Enter a new name") + '' + '<button class="write btn-floating btn-large light-blue" onclick="redname()"><i class="mdi-content-create"></i></button>';
}
