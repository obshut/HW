console.log('№1');
console.log('№1.1');
for (let i = 1; i < 51; i++){
    console.log(i);
}
console.log('');
console.log('№1.2');
for (let i = 35; i > 7; i--){
    console.log(i);
}

console.log('');
console.log('№2');
let a = 89;
while (true) {
    if (a >= 11) {
        console.log(a);
    } else {
        break;
    }
    a--;
}

console.log('');
console.log('№3');
let s = 0;
let n = 0;
while (true){
    if (s <= 100) {
        n += s;
    } else {
        break;
    }
    s++;
}
console.log(n);

console.log('');
console.log('№4');
let sum = 0;
let num = +prompt('Введите число от 1 до 5');

for (num; num > 0; num--) {
    sum += num;
}
console.log(sum);

console.log('');
console.log('№5');

let even = 8;
for (even; even <= 56; even++) {
    if (even % 2 === 0) {
        console.log(even);
    }
}

document.write('№6');
document.write(' ');

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j < 11; j++) {
        document.write("<div>");
        document.write(`${i} * ${j} = ${i * j}` + "</br>");
    }
    document.write("</br>");
    document.write("</div>");
}

console.log('');
console.log('№7');

let n1 = 1000;
let answer = 0;
let num1 = 0;

while (true) {
    n1 = n1 / 2;
    if (n1 < 50) {
        num1++;
        console.log(n1);
        console.log(num1);
        break;
    } else {
        num1++;
    }
}

console.log('');
console.log('№8');

let numeric;
let b = 0;
let sum1 = 0;

while (true) {
    numeric = +prompt();
    if (numeric === 0 || numeric === null) {
        console.log('Сумма чисел = ' + sum1);
        console.log('Среднее арифмитическое = ' + sum1 / b);
        break;
    }

    if (isNaN(numeric)) {
        alert('Введено не верное значение');
        console.log('Сумма чисел = ' + sum1);
        console.log('Среднее арифмитическое = ' + sum1 / b);
        break;
    }
    b++;
    sum1 += numeric;
}

console.log('');
console.log('№9');

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let max = -Infinity;
let min = Infinity;
let l = '';

for (let i = 0; i < str.length; i++){
    if (str[i] !== ' ') {
        l += str[i];
    }else{
        l = +l;
        if (max < l) max = l;
        if(min > l) min = l;
        l = '';
    }
}
console.log(`Max:${max}`);
console.log(`Min:${min}`);

console.log('');
console.log('№10');

let numm = prompt('Введите число');
let summ = 0;
let count = 0;
let emt = '';

for (let i = 0; i < numm.length; i++) {
    console.log(numm[i]);
    summ += +numm[i];
    count += 1;
    emt = numm[i] + emt;
}

console.log(`Число ${numm}:
            цифры в числе ${count};
            сумма = ${summ};
            обратный порядок ${emt}.
            `);
