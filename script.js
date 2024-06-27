"use strict";
const a = [...document.querySelectorAll(".game")];
const b = [...document.querySelectorAll(".operation")];
const operations = ["x", "÷", "+", "-","."];
const valuess = document.querySelector(".inp");
const value2 = document.querySelector(".inp2");
const clearval = document.querySelector(".clear");
const equal = document.querySelector(".net");
const rem = document.querySelector(".del");
let z = 1;
let count = 1;
a.forEach(function (val) {
  val.addEventListener("click", function () {
    if (val.textContent == "+" || val.textContent == "-" || val.textContent==".") {
      if (operations.includes(valuess.value.slice(-1))) {
      } else {
        valuess.value += val.textContent;
      }
    } else {
      valuess.value += val.textContent;
    }
  });
});
clearval.addEventListener("click", function () {
  valuess.value = value2.value = "";
});
b.forEach(function (oper) {
  oper.addEventListener("click", function () {
    let c = valuess.value[0] == undefined ? undefined : valuess.value.slice(-1);
    if (c == undefined || c == oper.textContent) {
      valuess.value += "";
    } else {
      if (operations.includes(valuess.value.slice(-1))) {
      } else {
        valuess.value += oper.textContent;
      }
    }
  });
});
equal.addEventListener("click", function () {
  value2.value = valuess.value;
  let k = valuess.value.replaceAll("÷", "/").replaceAll("x", "*");
  let m = eval(k) ? eval(k) : "";
  valuess.value = m;
});
rem.addEventListener("click", function () {
  let w = valuess.value;
  valuess.value = w.slice(0, w.length - 1);
});
