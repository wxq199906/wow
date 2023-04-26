console.log('script.js is called!');

function add() {
  console.log('add is called!');
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var result = num1 + num2;
  document.getElementById('result').innerHTML = '结果：' + result;
}

function subtract() {
  console.log('subtract is called!');
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var result = num1 - num2;
  document.getElementById('result').innerHTML = '结果：' + result;
}
// function console.log();
