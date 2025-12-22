{
    // let age = +prompt("Enter your age:");

    if (age < 0 || isNaN(age)) {
        console.log("Try again");
    }
    else if (age === 0) {
        console.log("You are just born");
    }
    else if (age >= 1 && age <= 11) {
        console.log("You are a child");
    }
    else if (age >= 12 && age <= 17) {
        console.log("You are a teenager");
    }
    else if (age >= 18 && age <= 59) {
        console.log("You are an adult");
    }
    else {
        console.log("You are a senior");
    };

}

{
    // let someNumber = +prompt("Enter a number between 0 and 9:");

    switch (someNumber) {
        case 0:
            console.log(")");
            break;
        case 1:
            console.log("!");
            break;
        case 2:
            console.log("@");
            break;
        case 3:
            console.log("#");
            break;
        case 4:
            console.log("$");
            break;
        case 5:
            console.log("%");
            break;
        case 6:
            console.log("^");
            break;
        case 7:
            console.log("&");
            break;
        case 8:
            console.log("*");
            break;
        case 9:
            console.log("(");
            break;
        default:
            console.log("Try again");
    };
}

{
    // let x = +prompt("Enter the first number:");
    // let y = +prompt("Enter the second number:");

    function calculate(x, y) {
        return x + y;
    }
    console.log(`The sum is: ${calculate(x, y)}`);
}


{
    // let z = +prompt("Enter the first number:");
    // let w = +prompt("Enter the second number:");
    if (isNaN(z) || isNaN(w)) {
        console.log("Try again");
    }
    else {

        let min = Math.min(z, w);
        for (let i = min; i >= 1; i--) {
            if (z % i === 0 && w % i === 0) {
                console.log(i);
                break;
            }
        }
    }
}

{
    // let a = +prompt("Enter the first number:");
    // let b = +prompt("Enter the second number:");
    if (isNaN(a) || isNaN(b)) {
        console.log("Try again");
    }
    else {
        let min = Math.min(a, b);
        for (let i = min; i >= 1; i--) {
            if (a % i === 0 && b % i === 0) {
                console.log(i);
                break;
            }
        }
    }
}

{
    // let number = +prompt("Напишіть число для перевірки дільників");
    if (isNaN(number) || number <= 0) {
        console.log("Спробуйте ще раз");
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                console.log(i);
            }
        }
    }

    // let n = +prompt("Enter a number to check if it's a palindrome:");
    if (isNaN(n) || n < 0) {
        console.log("Try again");
    }
    else {
        let str = n.toString();
        let reversedStr = str.split('').reverse().join('');
        if (str === reversedStr) {
            console.log("The number is a palindrome");
        }
        else {
            console.log("The number is not a palindrome");
        }
    }
}

{
    // let sumBeforeDiscount = +prompt("Сума до знижки:");
    if (isNaN(sumBeforeDiscount) || sumBeforeDiscount < 0) {
        console.log("Спробуйте ще раз");
    }
    else {
        let discount = 0;
        if (sumBeforeDiscount >= 200 && sumBeforeDiscount < 300) {
            discount = 0.03;
        }
        else if (sumBeforeDiscount >= 300 && sumBeforeDiscount < 500) {
            discount = 0.05;
        }
        else if (sumBeforeDiscount >= 500) {
            discount = 0.07;
        }

        let finalSum = sumBeforeDiscount * (1 - discount);
        console.log(`Сума зі знижкою: ${finalSum.toFixed(2)}`);
    }
}

{
    let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;
    for (let i = 0; i < 10; i++) {
        // let number = +prompt("Enter a number:");
        if (isNaN(number)) {
            console.log("Try again");
            i--;
            continue;
        }
        if (number > 0) {
            positive++;
        }
        else if (number < 0) {
            negative++;
        }
        else {
            zero++;
        }
        if (number % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
    }
    console.log(`Positive numbers: ${positive}`);
    console.log(`Negative numbers: ${negative}`);
    console.log(`Zeros: ${zero}`);
    console.log(`Even numbers: ${even}`);
    console.log(`Odd numbers: ${odd}`);
}

{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let index = 0;

    while (true) {
        // let showNext = confirm(`${days[index]}. Do you want to see the next day?`);
        if (!showNext) break; // 
        index = (index + 1) % days.length;
    }

}