// // 1.Створи HTML - файл, в ньому пропиши всі можливі способи використання JS;
// // 2.Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4 - х імен змінних, що потрібні тобі для даної задачі.Також напиши до 5 неправильних імен(неправильні імена повинні бути закоментовані);
// // 3.Вкажи всі можливі способи коментування коду;
// // 4.Які стилі написання імен змінних ти знаєш ?


// // Cпособи використання JS
// //  1. JS у тегі <script> в <head> 
// //   <script>
// //     console.log("JS у head");
// //   </script>

// // //  2. Підключення зовнішнього JS-файлу
// // <head>
// //   <script src="script.js" defer></script>
// // </head>

// // //  3. JS прямо в атрибуті HTML (inline JS)
// //   <button onclick="alert('Привіт!')">Натисни мене</button>

// // //  4. JS у тегі <script> в body 
// //   <script>
// //     console.log("JS у body");
// //   </script>


// // Назви змінних
let firstName = "Орися";
let lastName = "Лебідь";
let userFullName = "Орися Лебідь";
let person_name = "Орися";


let 1name = "Орися";        //  не можна починати з цифри
let user-name = "Орися";   // дефіс заборонений
let let = "Орися";         //  зарезервоване слово
let user name = "Орися";  //  пробіли не дозволені
let @name = "Орися";       //  спецсимволи


// // Cпособи коментування коду
// // Це однорядковий коментар
// /*
//   Це
//   багаторядковий
//   коментар
// */
// // <!-- Це коментар в HTML -->


// // Cтилі написання імен змінних

1. camelCase
let currentUser = "Орися";
// 2. snake_case
let current_user = "Орися";
// 3. PascalCase
let CurrentUser = "Орися";
// 4.UPPER_CASE
const CURRENT_USER = "Орися";

неправильно записана назва змінної
4. kebab-case
let current-user = "Орися";



// // Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
// // Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
// // Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата


let userName = prompt("What is your name?");
alert('Hello, ' + userName);

let birthYear = prompt("What is your birth year?");
let age = 2025 - birthYear;
const currentAge = alert('Your age is ' + age);

let sideSquare = prompt("Type is the length of the side of the square?");
let perimeter = 4 * sideSquare;
alert('The perimeter of the square is ' + perimeter);


// // Запитай у користувача радіус кола і виведи площу такої окружності.
// // Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
// // Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

let radius = prompt("Type the radius of the circle?");
let circleArea = 3.14 * (radius ** 2);
alert('The area of the circle is ' + circleArea);


let distance = Number(prompt("Enter distance (km):"));
let timeMinutes = Number(prompt("Enter time (minutes):"));

let timeHours = timeMinutes / 60;
let speed = distance / timeHours;

let time = timeMinutes / 60;

if (time === 0) {
  alert("You can't divide by zero!");
  prompt('Type time again');
}

alert(`Required speed: ${speed} km/h`);


let dollar = Number(prompt("Type the amount of dollars?"));
let euro = dollar * 0.85;

alert("You get " + euro + " euros");


