// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
    country: 'Germany',
    model: 'BMW',
    year: 2017,
    averageSpeed: 200,
    fuelCapacity: 50,
    averageConsumption: 10,
    drivers: ['Orysia', 'Oleksandr'],
}
car.displayInfo = function() {
    console.log(`Country: ${this.country}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed} km/h`);
    console.log(`Fuel Capacity: ${this.fuelCapacity} L`);
    console.log(`Average Consumption: ${this.averageConsumption} L/100km`);
    console.log(`Drivers: ${this.drivers.join(', ')}`);
};
car.addDriver = function(name) {
    this.drivers.push(name);
};
car.checkDriver = function(name) {
    return this.drivers.includes(name);
};
car.calculateTrip = function(distance) {
    const travelTime = distance / this.averageSpeed;
    const breaks = Math.floor(travelTime / 4);
    const totalTime = travelTime + breaks;
    const fuelNeeded = (distance / 100) * this.averageConsumption;
    return {
        totalTime: totalTime,
        fuelNeeded: fuelNeeded
    };
};

// Приклад використання:
car.displayInfo();
car.addDriver('Ivan');
console.log(car.checkDriver('Orysia')); // true
console.log(car.checkDriver('Maria')); // false
const trip = car.calculateTrip(800);
console.log(`Total Time: ${trip.totalTime} hours`);
console.log(`Fuel Needed: ${trip.fuelNeeded} L`);   

//Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
    hours: 20,
    minutes: 59,
    seconds: 45,
}
time.displayTime = function() {
    console.log(`${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`);
};
time.addSeconds = function(sec) {
    this.seconds += sec;
    while (this.seconds >= 60) {
        this.seconds -= 60;
        this.minutes += 1;
    }
    while (this.minutes >= 60) {
        this.minutes -= 60;
        this.hours += 1;
    }
    this.hours = this.hours % 24;
};
time.addMinutes = function(min) {
    this.minutes += min;
    while (this.minutes >= 60) {
        this.minutes -= 60;
        this.hours += 1;
    }
    this.hours = this.hours % 24;
};
time.addHours = function(hr) {
    this.hours = (this.hours + hr) % 24;
};

// Приклад використання:
time.displayTime(); // 20:59:45
time.addSeconds(30);
time.displayTime(); // 21:00:15
time.addMinutes(75);
time.displayTime(); // 22:15:15
time.addHours(5);
time.displayTime(); // 03:15:15                 

