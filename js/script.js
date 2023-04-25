function maxName(name1, name2, name3) {
	var names = [name1, name2, name3];
	let longest = names.reduce((a, b) => a.length > b.length ? a : b);
	console.log(longest);
	//names.sort((a, b) => b.length - a.length)
	//console.log(names[0]);
}

maxName("Michael", "George", "Alex")


function min(...array) {
	var nums = [];
	for (let item of array) {
		if (typeof item == "number") {
			nums.push(item)
		} else if (Array.isArray(item)) {
			nums.push(...item);
		} else if (typeof item == "object") {
			var values = Object.values(item);
			nums.push(...values);
		}
	}
	return console.log(Math.min(...nums));
}

min(1, 2);
min([1, 2]);
min({ a: 1, b: 2 });
min({ a: 1, b: 2 }, { a: 11, b: 12 });







let nums = [4, 2, 9, 3, 4, 12, 42, 52, 16, 1, 6, 10, 8, 5, 7]

function sort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let k = i + 1; k < array.length; k++) {
			if (array[i] > array[k]) {
				let temp = array[i]
				array[i] = array[k]
				array[k] = temp
			}
		}
	}
	return console.log(array);
	
}
sort(nums)




//Сортировка пузырьком
function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array
}
//bubbleSort(nums)



































//function howMuch(cars, defect, boolean) {
//	if (boolean) {
//		return defect * 100 / cars.toFixed(2)
//	}else {
//		return defect * cars / 100;
//	}
//};

//howMuch(10042, 14, false)


//!-----------------------------------------------------------------
//let askName = prompt("Your name").trim();
//let askAge = +prompt("How old a u?");

//askName = askName[0].toUpperCase() + askName.slice(1).toLowerCase()

//console.log(askName);

//if (askName[0] === "u" && askAge >= 18) {
//	alert("Welcome")
//}else {
//	alert("Get out")
//}

//let name = "John";
//let admin = name;
//console.log(admin);

//let balance = 25000;

//let car = 4480;
//let food = 890;
//let spending = car + food;

//let invoice = 5500;
//let stock = 4200;
//let earings = invoice + stock;

//totalBalance = "Balance: " + ((balance - spending) + earings);
//console.log(totalBalance);


//for(let i = 0; i < 10; i++) {
//	console.log(i);
//}

//let ask = prompt("Ваше имя ?");
//ask = ask[0].toUpperCase() + ask.slice(1).toLowerCase()

//if (ask[0] === "A" || ask[0] === "А"){
//	alert("Имя подходит");
//}else {
//	alert("Имя не подходит");
//}




//let fib = [0, 1]
//let ask = +prompt("Сколько раз ?")
//for (let i = 0; i < ask; i++) {
//	fib.push(fib[i] + fib[i + 1])
//}

//console.log(fib);










//let arr = [
//	{
//		id: Math.random(),
//		name: 'Timur',
//		info: {
//			school: '235',
//			faculity: 'SMM'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Imran',
//		info: {
//			school: 'ne izvestno',
//			faculity: 'programming'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Aminjon',
//		info: {
//			school: '444',
//			faculity: 'Dizayn'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Maxmud',
//		info: {
//			school: '777',
//			faculity: '3dsmax'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Muxammad',
//		info: {
//			school: '5555',
//			faculity: 'Backend'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Timur',
//		info: {
//			school: '235',
//			faculity: 'SMM'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Imran',
//		info: {
//			school: 'ne izvestno',
//			faculity: 'programming'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Aminjon',
//		info: {
//			school: '444',
//			faculity: 'Dizayn'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Maxmud',
//		info: {
//			school: '777',
//			faculity: '3dsmax'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Maxmud',
//		info: {
//			school: '777',
//			faculity: '3dsmax'
//		},
//	},
//	{
//		id: Math.random(),
//		name: 'Muxammad',
//		info: {
//			school: '5555',
//			faculity: 'Backend'
//		},
//	},
//]

//let categories = [
//	{
//		course: ' SMM',
//		count: 0
//	},
//	{
//		course: 'PROGRAMMING',
//		count: 0
//	},
//	{
//		course: '     3DSMAX',
//		count: 0
//	},
//	{
//		course: ' DIZAYN',
//		count: 0
//	},
//	{
//		course: '   BACKEND',
//		count: 0
//	},
//]
////Первая домашка
//arr.forEach(item => item.info.faculity = item.info.faculity.toLowerCase().trim());
//categories.forEach(item => item.course = item.course.toLowerCase().trim());
//arr.forEach(person => categories.forEach(item => item.course === person.info.faculity ? item.count++ : item))
//console.log(categories);


////Вторая домашка
//for (let i = 5; i >= 0; i--) {
//	for (let k = 0; k <= i; k++) {
//		document.write(" *")
//	}
//	document.write("<br>")
//}


////Третья домашка
//for (let i = 2; i <= 9; i++) {
//	document.write(`----------------<br>`)
//	for (let k = 2; k <= 9; k++) {
//		document.write(`<span >${i} * ${k} = ${i * k}</span> <br> `)
//	}
//}

//!-----------------------------------------------------------

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


//!-----------------------------------------------------------

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


//!-----------------------------------------------------------


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


//!-----------------------------------------------------------

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


//!-----------------------------------------------------------


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
//total = num[0][0].a.price + num[1][0].a.price + num[2][0].a.price

//num.forEach(item => {
//	total += item[0].a.price
//})
//console.log(total);

//!-----------------------------------------------------------

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


//!-----------------------------------------------------------


//let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati'];
//let longestName = arr[0]
//let max = arr.sort((a,b) => b.length - a.length)[0]

//arr.forEach((name) => {
//	if (longestName > name) {
//		longestName = name
//	}
//})
//console.log(longestName);
//console.log(max);


//let numbers = [2,4,1,4,7,3,2,7,9,3,2]
//let even = [] // четные
//let odd = [] // не четные``
//numbers.forEach((num) => num % 2 === 0 ? even.push(num) : odd.push(num));

//console.log(even);
//console.log(odd);


//!-----------------------------------------------------------





//!-----------------------------------------------------------

//let courses = [
//	{
//		title: 'SMM',
//		howLong: 3
//	},
//	{
//		title: 'Dev',
//		howLong: 6
//	},
//	{
//		title: 'Graph',
//		howLong: 4
//	},
//]

//let earnings = {
//	total: 0,
//	max: 0,
//	min: 0
//}

//let m = 0
//let w = 0
//let average_age = 0
//let smm = 0
//let dev = 0
//let graph = 0

//let students = [
//	{
//		sex: 'm',
//		age: 14,
//		payment: 1220000,
//		course: {
//			title: 'SMM',
//		}
//	},
//	{
//		sex: 'm',
//		age: 24,
//		payment: 1883000,
//		course: {
//			title: 'Graph'
//		}
//	},
//	{
//		sex: 'w',
//		age: 16,
//		payment: 2190000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'm',
//		age: 19,
//		payment: 718000,
//		course: {
//			title: 'Graph'
//		}
//	},
//	{
//		sex: 'w',
//		age: 15,
//		payment: 2195000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'm',
//		age: 24,
//		payment: 460000,
//		course: {
//			title: 'SMM'
//		}
//	},
//	{
//		sex: 'w',
//		age: 14,
//		payment: 560000,
//		course: {
//			title: 'SMM'
//		}
//	},
//	{
//		sex: 'w',
//		age: 22,
//		payment: 160000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'm',
//		age: 26,
//		payment: 883000,
//		course: {
//			title: 'Graph'
//		}
//	},
//	{
//		sex: 'w',
//		age: 26,
//		payment: 750000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'm',
//		age: 23,
//		payment: 212000,
//		course: {
//			title: 'Graph',
//		}
//	},
//	{
//		sex: 'w',
//		age: 24,
//		payment: 883000,
//		course: {
//			title: 'Graph'
//		}
//	},
//	{
//		sex: 'w',
//		age: 27,
//		payment: 190000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'w',
//		age: 19,
//		payment: 210000,
//		course: {
//			title: 'Graph'
//		}
//	},
//	{
//		sex: 'w',
//		age: 21,
//		payment: 770000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'm',
//		age: 18,
//		payment: 1200000,
//		course: {
//			title: 'SMM'
//		}
//	},
//	{
//		sex: 'w',
//		age: 51,
//		payment: 880000,
//		course: {
//			title: 'SMM'
//		}
//	},
//	{
//		sex: 'm',
//		age: 51,
//		payment: 2430000,
//		course: {
//			title: 'Dev'
//		}
//	},
//	{
//		sex: 'w',
//		age: 33,
//		payment: 1277000,
//		course: {
//			title: 'Graph'
//		}
//	},
//	{
//		sex: 'w',
//		age: 21,
//		payment: 2750000,
//		course: {
//			title: 'Dev'
//		}
//	},
//]

//const setup = (arr) => {
//	for (let i = 0; i < arr.length; i++) {
//		if (arr[i].course.title === "SMM") {
//			arr[i].course.howLong = 3
//			smm += 1
//		}else if (arr[i].course.title === "Dev") {
//			arr[i].course.howLong = 6
//			dev += 1
//		}else if (arr[i].course.title === "Graph") {
//			arr[i].course.howLong = 4
//			graph += 1
//		}
//		if (arr[i].payment > earnings.max) {
//			earnings.max = arr[i].payment
//		}else if (arr[i].payment < earnings.min) {
//			console.log(earnings.min = arr[i].payment);
//		}
//	}
//	arr.forEach(item => item.sex === "m" ? m += 1 : w += 1);
//	arr.forEach(num => earnings.total += num.payment);
//	arr.forEach(people => average_age += people.age);
//	average_age = average_age / arr.length
//	console.log(`M:${m} W:${w}`);
//	console.log(`SMM: ${smm}`);
//	console.log(`Dev: ${dev}`);
//	console.log(`Graph: ${graph}`);
//	console.log(`total: ${earnings.total} Max:${earnings.max} Min:${earnings.min}`);
//	console.log(`average age: ${average_age}`);
//	console.log(arr);
//}
//setup(students)

// В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*
// 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*
// 2. Сохранить количество девочек и мальчиков внутри переменных m и w*
// 3. Сохранить заработок учебного центра в earning.total*
// 4. Узнать кто больше всех платит за обучение в earning.max*
// 5. Узнать кто меньше всех платит за обучение в earning.min*
// 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*
// 7. Посчитать средний возраст студентов в average_age*



//!-----------------------------------------------------------

//let students = [
//	{
//		name: "Rustam",
//		age: 15,
//		gender: 'man'
//	},
//	{
//		name: "Sunnat",
//		age: 21,
//		gender: 'man'
//	},
//	{
//		name: "Amir",
//		age: 20,
//		gender: 'man'
//	},
//	{
//		name: "Doniyor",
//		age: 13,
//		gender: 'man'
//	},
//	{
//		name: "Farrux",
//		age: 11,
//		gender: 'man'
//	},
//	{
//		name: "Timur",
//		age: 18,
//		gender: 'man'
//	},
//	{
//		name: "Sokhib",
//		age: 18,
//		gender: 'man'
//	},
//	{
//		name: "Ibragim",
//		age: 15,
//		gender: 'woman'
//	},
//	{
//		name: "Ibragim",
//		age: 15,
//		gender: 'woman'
//	},
//	{
//		name: "Raximjon",
//		age: 18,
//		gender: 'man'
//	}
//]
//let m = 0, w = 0;
//students.forEach(item => item.gender === "man" ? m += 1 : w += 1)
//console.log(`Mans:${m}, Womans: ${w}` );

//!-----------------------------------------------------------

// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr
//let arr = [
//	{
//		"userId": 1,
//		"id": 1,
//		"title": "delectus aut au`tem",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 2,
//		"title": "quis ut nam facilis et officia qui",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 3,
//		"title": "fugiat veniam minus",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 4,
//		"title": "et porro tempora",
//		"completed": true
//	},
//	{
//		"userId": 1,
//		"id": 5,
//		"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 6,
//		"title": "qui ullam ratione quibusdam voluptatem quia omnis",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 7,
//		"title": "illo expedita consequatur quia in",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 8,
//		"title": "quo adipisci enim quam ut ab",
//		"completed": true
//	},
//	{
//		"userId": 1,
//		"id": 9,
//		"title": "molestiae perspiciatis ipsa",
//		"completed": false
//	},
//	{
//		"userId": 1,
//		"id": 10,
//		"title": "illo est ratione doloremque quia maiores aut",
//		"completed": true
//	},
//]
//let a = {
//	count: 0,
//	arr: []
//}

//let b = {
//	count: 0,
//	arr: []
//}

//arr.forEach(item => {
//	if(item.completed === true) {
//		a.count++
//		a.arr.push(item)
//	}else {
//		b.count++
//		b.arr.push(item)
//	}
//})
//console.log(a);
//console.log(b);


// Раскидать людей в разные массивы в зависимости от их почты
//let users = [
//	{
//		"id": 1,
//		"name": "Leanne Graham",
//		"username": "Bret",
//		"email": "Sincere@april.biz",
//		"address": {
//			"street": "Kulas Light",
//			"suite": "Apt. 556",
//			"city": "Gwenborough",
//			"zipcode": "92998-3874",
//			"geo": {
//				"lat": "-37.3159",
//				"lng": "81.1496"
//			}
//		},
//		"phone": "1-770-736-8031 x56442",
//		"website": "hildegard.org",
//		"company": {
//			"name": "Romaguera-Crona",
//			"catchPhrase": "Multi-layered client-server neural-net",
//			"bs": "harness real-time e-markets"
//		}
//	},
//	{
//		"id": 2,
//		"name": "Ervin Howell",
//		"username": "Antonette",
//		"email": "Shanna@melissa.tv",
//		"address": {
//			"street": "Victor Plains",
//			"suite": "Suite 879",
//			"city": "Wisokyburgh",
//			"zipcode": "90566-7771",
//			"geo": {
//				"lat": "-43.9509",
//				"lng": "-34.4618"
//			}
//		},
//		"phone": "010-692-6593 x09125",
//		"website": "anastasia.net",
//		"company": {
//			"name": "Deckow-Crist",
//			"catchPhrase": "Proactive didactic contingency",
//			"bs": "synergize scalable supply-chains"
//		}
//	},
//	{
//		"id": 3,
//		"name": "Clementine Bauch",
//		"username": "Samantha",
//		"email": "Nathan@yesenia.net",
//		"address": {
//			"street": "Douglas Extension",
//			"suite": "Suite 847",
//			"city": "McKenziehaven",
//			"zipcode": "59590-4157",
//			"geo": {
//				"lat": "-68.6102",
//				"lng": "-47.0653"
//			}
//		},
//		"phone": "1-463-123-4447",
//		"website": "ramiro.info",
//		"company": {
//			"name": "Romaguera-Jacobson",
//			"catchPhrase": "Face to face bifurcated interface",
//			"bs": "e-enable strategic applications"
//		}
//	},
//	{
//		"id": 4,
//		"name": "Patricia Lebsack",
//		"username": "Karianne",
//		"email": "Julianne.OConner@kory.org",
//		"address": {
//			"street": "Hoeger Mall",
//			"suite": "Apt. 692",
//			"city": "South Elvis",
//			"zipcode": "53919-4257",
//			"geo": {
//				"lat": "29.4572",
//				"lng": "-164.2990"
//			}
//		},
//		"phone": "493-170-9623 x156",
//		"website": "kale.biz",
//		"company": {
//			"name": "Robel-Corkery",
//			"catchPhrase": "Multi-tiered zero tolerance productivity",
//			"bs": "transition cutting-edge web services"
//		}
//	},
//	{
//		"id": 5,
//		"name": "Chelsey Dietrich",
//		"username": "Kamren",
//		"email": "Lucio_Hettinger@annie.ca",
//		"address": {
//			"street": "Skiles Walks",
//			"suite": "Suite 351",
//			"city": "Roscoeview",
//			"zipcode": "33263",
//			"geo": {
//				"lat": "-31.8129",
//				"lng": "62.5342"
//			}
//		},
//		"phone": "(254)954-1289",
//		"website": "demarco.info",
//		"company": {
//			"name": "Keebler LLC",
//			"catchPhrase": "User-centric fault-tolerant solution",
//			"bs": "revolutionize end-to-end systems"
//		}
//	},
//	{
//		"id": 6,
//		"name": "Mrs. Dennis Schulist",
//		"username": "Leopoldo_Corkery",
//		"email": "Karley_Dach@jasper.info",
//		"address": {
//			"street": "Norberto Crossing",
//			"suite": "Apt. 950",
//			"city": "South Christy",
//			"zipcode": "23505-1337",
//			"geo": {
//				"lat": "-71.4197",
//				"lng": "71.7478"
//			}
//		},
//		"phone": "1-477-935-8478 x6430",
//		"website": "ola.org",
//		"company": {
//			"name": "Considine-Lockman",
//			"catchPhrase": "Synchronised bottom-line interface",
//			"bs": "e-enable innovative applications"
//		}
//	},
//	{
//		"id": 7,
//		"name": "Kurtis Weissnat",
//		"username": "Elwyn.Skiles",
//		"email": "Telly.Hoeger@billy.biz",
//		"address": {
//			"street": "Rex Trail",
//			"suite": "Suite 280",
//			"city": "Howemouth",
//			"zipcode": "58804-1099",
//			"geo": {
//				"lat": "24.8918",
//				"lng": "21.8984"
//			}
//		},
//		"phone": "210.067.6132",
//		"website": "elvis.io",
//		"company": {
//			"name": "Johns Group",
//			"catchPhrase": "Configurable multimedia task-force",
//			"bs": "generate enterprise e-tailers"
//		}
//	},
//	{
//		"id": 8,
//		"name": "Nicholas Runolfsdottir V",
//		"username": "Maxime_Nienow",
//		"email": "Sherwood@rosamond.me",
//		"address": {
//			"street": "Ellsworth Summit",
//			"suite": "Suite 729",
//			"city": "Aliyaview",
//			"zipcode": "45169",
//			"geo": {
//				"lat": "-14.3990",
//				"lng": "-120.7677"
//			}
//		},
//		"phone": "586.493.6943 x140",
//		"website": "jacynthe.com",
//		"company": {
//			"name": "Abernathy Group",
//			"catchPhrase": "Implemented secondary concept",
//			"bs": "e-enable extensible e-tailers"
//		}
//	},
//	{
//		"id": 9,
//		"name": "Glenna Reichert",
//		"username": "Delphine",
//		"email": "Chaim_McDermott@dana.io",
//		"address": {
//			"street": "Dayna Park",
//			"suite": "Suite 449",
//			"city": "Bartholomebury",
//			"zipcode": "76495-3109",
//			"geo": {
//				"lat": "24.6463",
//				"lng": "-168.8889"
//			}
//		},
//		"phone": "(775)976-6794 x41206",
//		"website": "conrad.com",
//		"company": {
//			"name": "Yost and Sons",
//			"catchPhrase": "Switchable contextually-based project",
//			"bs": "aggregate real-time technologies"
//		}
//	},
//	{
//		"id": 10,
//		"name": "Clementina DuBuque",
//		"username": "Moriah.Stanton",
//		"email": "Rey.Padberg@karina.biz",
//		"address": {
//			"street": "Kattie Turnpike",
//			"suite": "Suite 198",
//			"city": "Lebsackbury",
//			"zipcode": "31428-2261",
//			"geo": {
//				"lat": "-38.2386",
//				"lng": "57.2232"
//			}
//		},
//		"phone": "024-648-3804",
//		"website": "ambrose.net",
//		"company": {
//			"name": "Hoeger LLC",
//			"catchPhrase": "Centralized empowering task-force",
//			"bs": "target end-to-end models"
//		}
//	}
//]
//let emails = {
//	org: [],
//	net: [],
//	info: []
//}
//let other = []

//users.forEach(item => {
//	let key = item.email.split(".").at(-1)
//	if (emails[key]) {
//		emails[key].push(item)
//	} else {
//		other.push(item)
//	}
//})

//console.log(emails);
//console.log(other);









//!-----------------------------------------------------------

//let jobs = [
//	{
//		id: 1,
//		company_name: "raximjon_pepsi",
//		tax: 13,
//		budget: 2_000_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 15000
//			},
//			{
//				title: "salary",
//				total: 500_000
//			},
//			{
//				title: "rent",
//				total: 200_000
//			},
//		]
//	},
//	{
//		id: 2,
//		company_name: "amir_fanta_stick",
//		tax: 12,
//		budget: 1_800_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 20_000
//			},
//			{
//				title: "salary",
//				total: 700_000
//			},
//			{
//				title: "rent",
//				total: 100_000
//			},
//		]
//	},
//	{
//		id: 3,
//		company_name: "frump_buildings",
//		tax: 14,
//		budget: 3_000_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 50_000
//			},
//			{
//				title: "salary",
//				total: 1_200_000
//			},
//			{
//				title: "rent",
//				total: 500_000
//			},
//		]
//	},
//	{
//		id: 4,
//		company_name: "farrux_tube",
//		tax: 12,
//		budget: 10_000_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 700_000
//			},
//			{
//				title: "salary",
//				total: 4_000_000
//			},
//			{
//				title: "rent",
//				total: 300_000
//			},
//		]
//	},
//	{
//		id: 5,
//		company_name: "desla",
//		tax: 14,
//		budget: 14_000_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 700_000
//			},
//			{
//				title: "salary",
//				total: 3_000_000
//			},
//			{
//				title: "rent",
//				total: 5_000_000
//			},
//		]
//	},
//	{
//		id: 6,
//		company_name: "nosway_u_rustama",
//		tax: 10,
//		budget: 100_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 10_000
//			},
//			{
//				title: "salary",
//				total: 0
//			},
//			{
//				title: "rent",
//				total: 0
//			},
//		]
//	},
//	{
//		id: 7,
//		company_name: "vinovodochnaya_u_timura",
//		tax: 21,
//		budget: 1_000_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 40_000
//			},
//			{
//				title: "salary",
//				total: 20_000
//			},
//			{
//				title: "rent",
//				total: 30_000
//			},
//		]
//	},
//	{
//		id: 8,
//		company_name: "sokhib_books",
//		tax: 10,
//		budget: 400_000,
//		expensesPerYear: [
//			{
//				title: "furniture",
//				total: 40_000
//			},
//			{
//				title: "salary",
//				total: 12_000
//			},
//			{
//				title: "rent",
//				total: 15_000
//			},
//		]
//	}
//]
//let successfull = ["successfull"]
//let unsuccessfull = ["unsuccessfull"]
//for (let item of jobs) {
//	let total = item.expensesPerYear.reduce((a, b) => a + b.total / 12, 0);
//	item.budgetPerMonth = Math.round(item.budget / 12);
//	item.expensesPerMonth = Math.round(total);
//	item.percent = Math.round(item.expensesPerMonth * 100 / item.budgetPerMonth);
//	item.taxPerMonth = Math.round((item.budgetPerMonth / 100) * (item.tax / 12));
//	item.profitPerMonth = item.budgetPerMonth - (item.taxPerMonth + item.expensesPerMonth)
//}
//jobs.forEach(person => person.profitPerMonth > 0 ? successfull.push(person) : unsuccessfull.push(person));
//let allTaxes = jobs.reduce((a, b) => a + b.taxPerMonth, 0);
//let maxTax = jobs.reduce((a, b) => a.taxPerMonth > b.taxPerMonth ? a : b);
//let minTax = jobs.reduce((a, b) => a.taxPerMonth < b.taxPerMonth ? a : b);
//let totalSpending = jobs.reduce((a, b) => a + b.expensesPerMonth, 0)

//console.log(jobs);
//console.log(successfull);
//console.log(unsuccessfull);
//console.log(`Общий налог всех компаний: ${allTaxes}`);
//console.log(maxTax);
//console.log(minTax);
//console.log(`Средний расход всех компаний без учета налога : ${totalSpending / jobs.length}`);
//console.log(`Средний расход всех компаний с налогом : ${(totalSpending + allTaxes) / jobs.length}`);

//!-----------------------------------------------------------



//!-----------------------------------------------------------