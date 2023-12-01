console.log('№1');

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('');
console.log('№2');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] < -3 && arr2[j] > -10) {
        console.log(arr2[j]);
    }
}

console.log('');
console.log('№3');

let arr3 = [];
let arr4 = [];

let i1 = 23;
for (let i = 0; i < 35; i++) {
    arr3[i] = i1;
    i1++;
}
let num = 23;
let j = 0;
while (num < 58) {
    if (num >= 58) break;
    arr4[j] = num;
    num++;
    j++;
}

console.log(arr3);
console.log(arr4);
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log(sum);

console.log('');
console.log('№4');

let arr5 = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr5.length; i++) {
    let num1 = String(arr5[i]);
    let fir = num1[0];
    if (fir == 1 || fir == 2 || fir == 5) {
        console.log(num1);
    }
}

console.log('');
console.log('№5');

let arr6 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arr6.length; i++) {
    if (i > 4) {
        document.write("<b>" + arr6[i] + "</b>" + "\n");
    } else {
        document.write(arr6[i] + "\n");
    }
}

console.log('');
console.log('№6');

let arr7 = [4, 5, 6, 8, 9, '10', 45];

arr7.push(28);

let lenght = arr7.length;

let last = arr7[lenght - 1];

console.log(last);

console.log('');
console.log('№7');
let arr8 = [];
let i = 0;
let element = 1;

while (element) {
    element = +prompt();
    if (element == null) {
        console.log(arr8);
        console.log(arr8.sort());
        break;
    }
    arr8[i] = element;
    i++;
}

console.log(arr8);
console.log(arr8.sort());

console.log('');
console.log('№8');

let arr9 = [12, false, 'Текст', 4, 2, -5, 0];
let rez = [];

while (arr9.length) {
    let buff = arr9.pop();
    buff = buff.toString();
    buff = buff.split('');
    buff = buff.reverse();
    buff = buff.join('');
    rez.push(buff);
}

console.log(rez);


console.log('');
console.log('№9');

let arr10 = [5, 9, 21,  ,  , 9, 78,  ,  ,  , 6];
let num3 = 0;

for (let i = 0; i < arr10.length; i++){
    if(arr10[i] === undefined){
        num3++;
    }
}

console.log(num3);


console.log('');
console.log('№10');

let arr11 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let fIndex = arr11.indexOf(0);
let lIndex = arr11.lastIndexOf(0);
let rez2 = 0;

if (fIndex === -1 || lIndex === -1){
    rez2 = 'Нулей нет';
}else if (fIndex === lIndex){
    rez2 = 'Только один 0';
}else {
    let s = arr11.slice(fIndex, lIndex);
    while (s.length){
        rez2 += s.pop();
    }
}

console.log(rez2);

console.log('');
console.log('№11');
let hol = +prompt();

for (let i = 1; i <= hol; i++){
    let sp = '';
    let p = '';

    for(let j = 0; j < hol - i; j++){
        sp = sp + ' '
    }

    for (let j = 0; j < i * 2 - 1; j++){
        p += '^';
    }

    document.write(`<pre>${sp + p}</pre>`);
}