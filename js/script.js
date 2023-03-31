let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati'];
let longestName = arr[0]
let max = arr.sort((a,b) => b.length - a.length)[0]

arr.forEach((name) => {
	if (longestName > name) {
		longestName = name
	}
})
console.log(longestName);
console.log(max);


let numbers = [2,4,1,4,7,3,2,7,9,3,2]
let even = [] // четные  
let odd = [] // не четные
numbers.forEach((num) => num % 2 === 0 ? even.push(num) : odd.push(num));


console.log(even);
console.log(odd);





//let name = "John";
//let admin = name;
//console.log(admin);

////initial balance
//let balance = 25000;

////spending
//let car = 4480;
//let food = 890;
//let spending = car + food;

////earings
//let invoice = 5500;
//let stock = 4200;
//let earings = invoice + stock;

////total
//totalBalance = "Balance: " + ((balance - spending) + earings);
//console.log(totalBalance);


//let str = "Lorem ipsum dolor sit amet a consectetur adipisicing elit. Eum adipisci aliquid odio esse at, error illum quisquam soluta. Magnam, voluptate blanditiis ipsum facere ad nihil nesciunt amet ullam possimus unde."
//let cutFirst = str.slice(str.search("a"),str.search("a") + 1).toUpperCase();
//let cutSecond = str.slice(str.search("m"),str.search("m") + 1);
//let cutThird = str.slice(str.search("i"),str.search("i") + 1 );
//let cutThird = str.slice(str.search("i"),str.search("i") + 1 );
//let myName = cutFirst + cutSecond + cutThird + cutFouth
//console.log(myName);


////Первое задание 
//let str = "aaa@bbb@ccc";
//str = str.split("@").join("!");
//console.log(str);

////Второе задание
//let word = "HELLOWORLD";
//let wordHello = word.slice(word.search("HELLO"), "HELLO".length);
//let wordWorld = word.slice(word.search("HELLO") + "HELLO".length, "HELLOWORLD".length);
//let concat = wordHello[0] + wordHello.slice(1).toLocaleLowerCase() + " " + wordWorld.toLocaleLowerCase();
//console.log(concat);

////Третье задание
//let greeting = "Hello, it is HTML";
//greeting = greeting.slice(greeting.search("Hello, it is"), "Hello, it is".length) + " not JS";
//console.log(greeting);

////Четвертое задание
//let randomNum = Math.round(Math.random() * 10)//рандомное число от 0 до 10
//console.log(randomNum);

////Пятое задание
//let txt = " Lex Luter has a big suit ";
//let findA = txt.slice(txt.search("a"),txt.search("a") + 1).toLocaleUpperCase();
//let findLex = txt.slice(txt.search("Lex"),txt.search("Lex") + "Lex".length).toLocaleLowerCase();
//let findedWord = findA + findLex
//console.log(findedWord);




////Задание1
//let num = +prompt("Напишите любое число");

//if(num % 2 === 0) {
//	alert("Четное");
//}else{
//	alert("Нечетное");
//}

////Задание2
//let firstName = prompt("Как вас зовут?");
//let age = +prompt("Сколько вам лет?");

//if (firstName.length % 2 === 0 && age >= 18) {
//	alert("Отлично")
//}else {
//	alert("Не подходите")
//}


////Задание 3
//let ask = prompt("Ваше имя ?");
//ask = ask[0].toUpperCase() + ask.slice(1).toLowerCase()

//if (ask[0] === "A" || ask[0] === "А"){
//	alert("Имя подходит");
//}else {
//	alert("Имя не подходит");
//}

////Первое задание
//let whichDay = +prompt("Какой день(число) ?");

//if (whichDay >= 1 && whichDay < 11) {
//	alert("Первая декада");
//}else if (whichDay >=	 11 && whichDay < 21) {
//	alert("Вторая декада");
//}else if (whichDay >= 21 && whichDay <= 31) {
//	alert("Третья декада");
//}else {
//	alert("Нету такого дня(числа) в месяце")
//}

////Второе задание
//let name = "Alex";
//let money = 10000;
//let account = 7777;

//let ask = prompt("Ваше имя ?");
//if (ask === name) {
//	let pass = +prompt("Номер счёта ?");
//	if (pass === account) {
//		let cash = +prompt("Сколько обналичить ?");
//		if (cash <= money){
//			alert("Все отлично");
//			alert(`Сняли: ${cash}`)
//			alert(`Осталось: ${money - cash}`)
//		}else {
//			alert("Недостаточно средств")
//		}
//	}else {
//		alert("Неправильный номер счета");
//	}
//}else {
//	alert("Пользователь не найден");
//}


////Третье задание 
//let askName = prompt("Ваше имя ?");

//if (askName[0] === "A" || askName[0] === "a") {
//	let askAge = +prompt("Сколько вам лет ?");
//	if (askAge >= 20 && askAge <= 40) {
//		let askMoney = +prompt("Сколько у вас денег?");
//		if (askMoney >= 100) {
//			let people = +prompt("Сколько вас ?");
//			if (people <= 10) {
//				alert("Добро пожаловать)")
//			}else {
//				alert("Вас слишком много!")
//			}
//		}else {
//			alert("у вас мало денег")
//		}
//	}else {
//		alert("Возраст не подходит")
//	}
//}else{
//	alert("Вам нельзя")
//}

//let students = [1,2,3,'Farrux', true, 'Hello', ['guys', 'my', 11], true, 'name is', [[0,'years old',0,'and I am']]];
//console.log(`${students[5]} ${students[6][0]} ${students[6][1]} ${students[8]} ${students[3]} ${students[9][0][3]} ${students[6][2]} ${students[9][0][1]}`);





//let arr = ["Amir", "Farrux", "Sunnat", "Rahim", "Maksim",];
//console.log(arr);

////первая задача
//let index = +prompt("Какой индекс?").trim();
//console.log(index);
//if (index === "" || isNaN(index)) {
//	alert("Введите индекс")
//}else if (index > arr.length - 1) {
//	alert("Нет никого под этим индексом")
//}else {
//	let ques = confirm(`Под индексом ${index}, ${arr[index]}. Хотите удалить ?`)
//	if (ques === true) {
//		alert(`${arr[index]} успешно удален`)
//		let spl = arr.splice(index, 1);
//		console.log(spl);
//	} else {
//		alert("Массив не изменился")
//	}
//}


////вторая задача
//let nameSearch = prompt("Напишите имя которое хотите удалить").trim();
//if (nameSearch === "") {
//	alert("Вы ничего не ввели")
//}else if(!arr.includes(nameSearch[0].toUpperCase() + nameSearch.slice(1).toLowerCase())) {
//	alert("Нет такого имени в массиве")
//}else {
//	nameSearch = nameSearch[0].toUpperCase() + nameSearch.slice(1).toLowerCase()
//	let searchIdx = arr.indexOf(nameSearch);
//	let ask = confirm(` ${nameSearch} найден. Хотите удалить из массива ?`)
//	if (ask === true) {
//		let del = arr.splice(searchIdx, 1)
//		alert(`${nameSearch} успешно удален из массива`)
//		console.log(del);
//	} else {
//		alert("Массив не изменился")
//	}
//}
//console.log(arr);


////Третья задача
//let num = [
//	[
//		{
//			a:{
//				price:20
//			}
//		}
//	],
//	[
//		{
//			a:{
//				price:44
//			}
//		}
//	],
//	[
//		{
//			a:{
//				price: 35
//			}
//		}
//	],
	
//];

//let total = 0;
////total = num[0][0].a.price + num[1][0].a.price + num[2][0].a.price

//num.forEach(item => {
//	total += item[0].a.price
//})
//console.log(total);



//let arr = ["Doniyor", "Sohib", "Farrux", "Samir",]

//let finded = arr.filter((item) => item.length % 2 === 0 )
//let findedTwo = arr.filter((item) => item.length % 2 !== 0 )


//console.log(`четные ${finded}`);
//console.log(`нечетные ${findedTwo}`);

//let arr = [1,2,3,4,5,6,7];
//let total = 0
//let sum = arr.filter((num) => {
//	total += num
//});

//console.log(total);

//let arr = [1,2,3,0, '', "hello", null, NaN, undefined,];

//let temp = arr.filter((item) => item);
//console.log(temp);
