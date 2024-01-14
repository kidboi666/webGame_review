
const $operate = document.querySelector('#operate');
const $result = document.querySelector('#result');

const $num1 = document.querySelector('#num1');
const $num2 = document.querySelector('#num2');
const $num3 = document.querySelector('#num3');
const $num4 = document.querySelector('#num4');
const $num5 = document.querySelector('#num5');
const $num6 = document.querySelector('#num6');
const $num7 = document.querySelector('#num7');
const $num8 = document.querySelector('#num8');
const $num9 = document.querySelector('#num9');
const $num0 = document.querySelector('#num0');
const $divide = document.querySelector('#divide');
const $multiply = document.querySelector('#multiply');
const $plus = document.querySelector('#plus');
const $minus = document.querySelector('#minus');
const $clear = document.querySelector('#clear');

const $dot = document.querySelector('#dot');
const $percent = document.querySelector('#percent');
const $operator = document.querySelector('#operator');
const $backSpace = document.querySelector('#backSpace');

let numOne = '';
let numTwo = '';
let operator = '';
let temp;

function onClickClear() {
  numOne = '';
  numTwo = '';
  operator = '';
  $result.value = '';
  $operate.value = '';
}

function onClickNumber(event) {
  if (operator) {
    numTwo += event.target.textContent;
    drawResult(numTwo);
  } else if (!operator) {
    numOne += event.target.textContent;
    drawResult(numOne);
  }
}

function calculator() {
  switch(operator) {
    case '+' : temp = parseInt(numOne) + parseInt(numTwo); break;
    case '-' : temp = parseInt(numOne) - parseInt(numTwo); break;
    case 'X' : temp = parseInt(numOne) * parseInt(numTwo); break;
    case '/' : temp = parseInt(numOne) / parseInt(numTwo); break;
  };
  drawResult(temp);
  console.log(temp)
}

function onClickOperate(event) {
  if (numTwo) {
    calculator();
    numOne = temp;
    numTwo = '';
  } else if (numOne) {
    drawOperator(event.target.textContent);
  } else if (event.target.textContent === '-') {
    numOne = '-';
  } else {
    alert('연산할 숫자를 먼저 입력하세요');
  }
}

function drawResult(text) {
  $result.value = text;
}

function drawOperator(value) {
  operator = value;
  $operate.value = value;
}

$num1.addEventListener('click', onClickNumber);
$num2.addEventListener('click', onClickNumber);
$num3.addEventListener('click', onClickNumber);
$num4.addEventListener('click', onClickNumber);
$num5.addEventListener('click', onClickNumber);
$num6.addEventListener('click', onClickNumber);
$num7.addEventListener('click', onClickNumber);
$num8.addEventListener('click', onClickNumber);
$num9.addEventListener('click', onClickNumber);
$num0.addEventListener('click', onClickNumber);
$operator.addEventListener('click', onClickOperate);
$plus.addEventListener('click', onClickOperate);
$minus.addEventListener('click', onClickOperate);
$multiply.addEventListener('click', onClickOperate);
$divide.addEventListener('click', onClickOperate);
$clear.addEventListener('click', onClickClear);
