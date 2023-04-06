"use strict";
const prompt = require('prompt-sync')({sigint: true})
//1
var x = 23;
var y = 46;
var z = 12;
console.log(x + y + z);

//2
var seconds_in_minute = 60;
var minutes_in_hour = 60;
var hours_in_day = 24;
var days_in_year = 365;

function convertAge(age) {
    var x = age * seconds_in_minute*minutes_in_hour*hours_in_day*days_in_year;
    return x;
}
console.log(convertAge(22));


//3
//Создайте две переменные.
// Поместите в них переменную **`count`** и превратите в строку,
// а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

let count = 42
let userAge = '42'

let inString = count.toString()
let inNumber = parseInt(userAge)

console.log("count convert to " + typeof(inString))
console.log("userAge convert to " + typeof(inNumber))


//4
//Сложите переменные так, чтобы в результате получилось выражение: 
//**`12 white bears`** и результат выведите в консоль.

let a = 1
let b = 2
let c = "white bears"



function cluing(){
    let numbers_string = a.toString() + b.toString()
    return numbers_string.split(" ").concat(c).toString().replace(",", " ")
}

console.log(cluing())


//5
//Создайте переменные и поместите в них нижеприведенные слова.
// Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

    let access = "access"
    let marine = "marine"
    let ice = "ice"
    let garden = "garden"
    let jaw = "jaw"
    let fruits = [access, marine, ice, garden, jaw]

    var lengthWords = 0

    for(let i = 0;i < fruits.length; i++ ){
        lengthWords += fruits[i].length
    }

    console.log(lengthWords)


//6
//Создайте переменные и присвойте им значения:
//Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

   let a0 ='true'
   let a1 = false
   let a2 =  17
   let a3 = undefined
   let a4 = null

   let massiv = [a0, a1,a2,a3,a4]

   for(let i = 0; massiv.length > i; i++){
    console.log(typeof(massiv[i]))
   }

//7
//С помощью условий выведите в консоль разработчика наибольшее число.

let height = 15
let width = 20

function viewConditionResult(){
    if(height > width)
    return height
    else if(width > height)
    return width
    else if(width = height)
    return 0
}

console.log(viewConditionResult())

//8
//Переберите числа от 1 до 20 (используя циклические конструкции) и выведите в консоль все числа кратные трём.

let ar = new Array(20).fill(1).map( (_, i) => i+1 )

for(let i = 0; i < ar.length; i++){
    if(ar[i]%3 == 0){
        console.log(ar[i])
    }
}

//9
//Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
//Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
//Для решения этой задачи нам помогут логические операторы **`|| &&`**.

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork

function canGoToWork(){ 
    if(key && documents && pen && apple && orange)
    shouldGoToWork = "Все взято"
    else 
    shouldGoToWork = "Потеряшка"
    return shouldGoToWork
}

console.log(canGoToWork())


//10
//Написать код, который в зависимости от переданного ему числа выводит сообщение в консоль: 
//1. Если число делится без остатка на 5 выводим сообщение `Fizz`
//2. Если число делится без остатка на 3 выводим сообшение `Buzz`
//3. Если число делится без остатка и на 3 и на 5 выводим сообшение `FizzBuzz`


function dividingCompletely(numb){
    if(numb % 5 == 0) 
    console.log("Fizz")
    else if(numb % 3 == 0)
    console.log("Buzz")
    else if(numb % 5 == 0 && numb % 3 == 0)
    console.log("FizzBuzz")
}

dividingCompletely(15)


//11
//какого хера...
//Написать код, который в зависимости от переданного ему числа выводит сообщение в консоль:
//- Если число больше 18, то выводит сообщение - `Let's go drink some beer`. 
//- Если меньше, то выводит сообщение - `Better drink cola`. 
//- Добавить условие, что если возраст от 16-18, выводим сообщение - `You can buy some smokes, but don't tell your mother`.

let num = 17

if(num > 18)
console.log("Let's go drink some beer")
else if( 16 <= num < 18)
console.log("You can buy some smokes, but don't tell your mother")
else if(num < 18)
console.log("Better drink cola")

//12
//Напишем код для туристического терминала. 
//Создать переменную для стороны света в которую пользовател хотел отправиться. 
//После ввода данных мы должны вывести в консоль сообщение из списка. 
//Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз (текст произвольный).

+ `south` - `you need to turn around`
+ `north` - `your path is the straight path`
+ `west` - `on your left`
+ `east` - `just go to the right`
 

function travel(){
console.log("Choose number of side where you want to go:")
console.log("1 - south")
console.log("2 - north")
console.log("3 - west")
console.log("4 - east")
var side_of_the_world = prompt(" ")

switch(side_of_the_world){
    case 1:  console.log("you need to turn around")
    c
}
}





//13
//Поменяйте значение переменных местами не создавая дополнительной переменной:

    let d = 4
    let e = 3

    d = d + e
    e = d - e
    d = d - e

    console.log(d,e)


//14
//Написать код, который будет выводить в консоль лесенку.

let grid = '#'

for(let i = 1; i <= 6; i++){
        console.log(grid.repeat(i))
}


