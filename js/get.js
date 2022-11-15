// ファイルの読み込み確認
console.log('イベント発火');

let title = document.getElementById('title');
let text = document.getElementById('text');

let menu = document.querySelector('#menu');
let liList = document.querySelectorAll('#menu li');
let getLi2 = document.querySelector('#menu li:nth-child(2)');
let li1 = liList[0];
let li2 = liList[1];
let li3 = liList[2];

let p = document.querySelector('p');
alert(p.textContent);
// console.log(p.textContent);