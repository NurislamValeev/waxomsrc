let number = 1;
while (number <= 5) {
  console.log(number);
  number++;
}
//==================================
number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);
//==================================
for (number = 1; number <= 5; number++) {
  console.log(number);
}
//==================================
for (let count = 0; count < 3; count++) {
  console.log(`Число: ${count}`);
}
//==================================
let bill = 0;
while (bill < 3) {
  console.log(`Число: ${bill}`);
  bill++;
}
//==================================
myTag: for (let sum = 0; sum < 2; sum++) {
  for (let size = 0; size < 3; size++) {
    if (size == 1) {
      break myTag;
    }
    console.log(size);
  }
}

/* let admin;
let name;
name = 'Джон';
admin = name;
//alert(admin)
let earth = 'Земля'; //ourPlanetName
let currentUserName = 'Джон!';
//alert(currentUserName)

let userNameInfo = prompt('Как Вас зовут, дорогуша? / 你叫什么名字啊？', '');

alert(`Вас зовут ${userNameInfo}! / 你叫${userNameInfo}!`);
alert(6 + 2); */

/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); // 12
 */

/* let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', 'Напишите здесь...');
if (year == 2015) {
	alert('Вы правы!')
}
else if (year == 2014) {
	alert("Вы почти правы! Только на год позже.")
}
else if (year == 2016) {
	alert("Вы почти правы! Только на год раньше.")
}
else {
	alert("Неправильный ответ:(")
} */

/* let javaQuestion = prompt('Какое «официальное» название JavaScript?', '')
let javaAnswer = 'ECMAScript'
if (javaQuestion == javaAnswer) {
	alert('Верно!')
} else {
	alert(`Не знаете? Это ${javaAnswer}!`)
}
 */

/*
let numberQuestio	n = prompt('Type a number here', '')
if (numberQuestion > 0) {
	alert(1)
} if (numberQuestion < 0) {
	alert(-1);
} else {
	alert(0)
}
 */

/* let result
(a + b < 4) ? result = 'Мало' : result = 'Много'
 */

/* let message;
message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
		(login == '') ? 'Нет логина' :
			''
*/

/* let login = prompt('昊旻，你爱我吗？', '');

if (login == '爱') {

	let password = prompt('真的吗？');
	if (password == '真的') {
		alert('谢谢昊旻美女!')
	} else if (password == '' || password == null) {
		alert('注销')
	} else {
		alert('好吧。。。')
	}

} else if (login == '' || login == null) {
	alert('注销')
} else {
	alert('好吧。。。我以为你爱我！')
}
 */

/* for (let number = 2; number <= 10; number++) {
	if (number % 2 == 0) {
		alert(number);
	}
} */

/* let answers = [],
  questions = ['Your first name?', 'Your last name?', 'Your age?'];

for (let i = 0; i < questions.length; i++) {
  answers[i] = prompt(questions[i], '');
}
console.log(answers); */
