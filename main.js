'use strict'

let btn = document.querySelector("#btn");
let input1 = document.querySelector("#text");
let input2 = document.querySelector("#textTransfer");
let input3 = document.querySelector("#textPlaceholder");

console.dir(btn);
console.dir(input1);
console.dir(input2);
console.dir(input3);


btn.onclick = function () {
    if (input1.value != "") {
      input2.value = input1.value;
    }
}

input3.onmouseout = function () {
  if (input3.value != "") {
    input3.placeholder = input3.value;
    input3.value = "";
  }
};
console.dir(input3.placeholder);
