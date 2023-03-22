//Первое задание 
let str = "aaa@bbb@ccc";
str = str.split("@").join("!");
console.log(str);

//Второе задание
let word = "HELLOWORLD";
let wordHello = word.slice(word.search("HELLO"), "HELLO".length);
let wordWorld = word.slice(word.search("HELLO") + "HELLO".length, "HELLOWORLD".length);
let concat = wordHello[0] + wordHello.slice(1).toLocaleLowerCase() + " " + wordWorld.toLocaleLowerCase();
console.log(concat);

//Третье задание
let greeting = "Hello, it is HTML";
greeting = greeting.slice(greeting.search("Hello, it is"), "Hello, it is".length) + " not JS";
console.log(greeting);

//Четвертое задание
let randomNum = Math.round(Math.random() * 10)//рандомное число от 0 до 10
console.log(randomNum);

//Пятое задание
let txt = " Lex Luter has a big suit ";
let findA = txt.slice(txt.search("a"),txt.search("a") + 1).toLocaleUpperCase();
let findLex = txt.slice(txt.search("Lex"),txt.search("Lex") + "Lex".length).toLocaleLowerCase();
let findedWord = findA + findLex
console.log(findedWord);






















































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