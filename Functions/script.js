// класична функція: 
function name(param) {
    return param;
}

// стрілочна функція:
let arrowName = (param) => {
    return param;
}


// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs(...args) {
    console.log(args.length);
}
countArgs(1, 2, 3); // 3
countArgs("a", "b"); // 2
countArgs(); // 0

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function takeNambers(f, j) {
    if (f < j) {
        return -1;
    }
    else if (f > j) {
        return 1;
    }
    else {
        return 0;
    }
}

takeNambers(5, 10); // -1
takeNambers(10, 5); // 1
takeNambers(5, 5); // 0

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function join(a, b, c) {
   const arr = [a, b, c];
    const joinNum = arr.join('');
    const number = +(joinNum);
    return number;
}
join(1, 4, 9); // 149
join(0, 0, 7); // 7

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function area(length, width) {
    if (width === undefined) {
        return length * length;
    } else {
        return length * width;
    }
}
area(5, 10); // 50
area(4); // 16

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
isPerfectNumber(6); // true
isPerfectNumber(28); // true
isPerfectNumber(12); // false

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
function perfectNumbersInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            console.log(i);
        }
    }
}
perfectNumbersInRange(1, 1000); // 6, 28, 496

