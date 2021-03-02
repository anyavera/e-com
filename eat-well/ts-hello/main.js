var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
//inna
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
/*let a: number;
a = 1;
a = true;
a = 'a';

console.log(a);*/
//let count = 5;
//count = 'a';
/*function log(message) {
  console.log(message);
}

var message = 'hello world';
log (message);*/
//var number = 1;
//let count = 2;
/*function doSomithing () {
  for (let i = 0; i < 5; i++){
    console.log(i);
  }
  console.log('Finally: ' + i);
}

doSomithing();*/
/*function doSomithing () {
  for (var i = 0; i < 5; i++){
    console.log(i);
  }
  console.log('Finally: ' + i);
}

doSomithing();*/
