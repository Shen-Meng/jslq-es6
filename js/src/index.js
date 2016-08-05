// 解构数组
// let [a, b, c] = ["has", 2, 3];
//
// console.log(a);

// 解构对象
// function num(){
//   return {a: 1, b: 2, c: 3};
// }
// let {a: fir, b: sec, c: thi} = num();
//
// console.log(fir, sec, thi);

// 模版字符串
// let time = "今天",
//     locations = "宾馆",
//     doing = "嗨皮";v
//
// var str = `${time}我在${locations}${doing}`;
// console.log(str);

// 带标签的模版字符串
// let time = "今天",
//     locations = "宾馆",
//     doing = "嗨皮";
//
// var str = iamdoing`${time}我在${locations}${doing}`;
// function iamdoing(string, ...value) {
//   console.log(string, value);
// }

// 判断字符串里是否包含其他的字符串
// let time = "今天",
//     locations = "宾馆",
//     doing = "嗨皮";
//
// var str = `${time}我在${locations}${doing}`;
// console.log(
//   str.startsWith("今天"),
//   str.endsWith("皮"),
//   str.includes("冰馆")
// );

// 函数默认参数
// function breakfast(person = "小明", likes = "小红") {
//    console.log(`${person}喜欢${likes}`);
// }
// breakfast();
// breakfast("林晓","慧媛");

// 展开操作符spread
// let arr1 = ['hello', 'kitty'],
//     arr2 = ['kim', ...arr1];
// console.log([...arr1]);
// console.log(arr2);
// function logarr(str1, str2, ...strs) {
//   console.log(str1, str2, strs);
// }
// logarr('111', '222', '333', '444', '555', '666');

// 解构参数
// function date(person, location, {doing, leaving} = {}) {
//   console.log(person, location, doing, leaving);
// }
// date("linxiao", "hangzhou", {doing: "writing", leaving: "alone"});

// 箭头函数
// let func = n => n * n;
// console.log(func(8));
// let func1 = (m, n) => {
//   let c = m + n;
//   console.log(c);
// }
// func1(4, 7);

// 对象表达式
// let person1 = "kim";
// let person2 = 'nina';
//
// let people = {
//   person1,
//   person2
// }
//
// console.log(people);

// 对比两个值是否相等Object.is()
// console.log(-0 == +0);
// console.log(-0 === +0);
// console.log(NaN === NaN);
// console.log(Object.is(-0,+0));
// console.log(Object.is(NaN,NaN));

// 把对象的值复制到另一个对象里-Object.assign()
 // let arr = {};
 //
 // Object.assign(arr, {arr1: "ni", arr2: "hao"});
 // console.log(arr);

// 设置对象的prototype - Object.setPrototypeOf();
// let breakfast = {
//   getDrink() {
//     return 'tea';
//   }
// }
//
// let dinner = {
//   getDrink() {
//     return 'bear';
//   }
// }
//
// let sunday = Object.create(breakfast);
// console.log(sunday.getDrink());
// console.log(Object.getPrototypeOf(sunday) == breakfast);
//
// Object.setPrototypeOf(sunday, dinner);
// console.log(sunday.getDrink());

// __proto__
// let breakfast = {
//   getDrink() {
//     return 'tea';
//   }
// }
//
// let dinner = {
//   getDrink() {
//     return 'bear';
//   }
// }
//
// let sunday = {
//   __proto__: breakfast
// }
// console.log(sunday.getDrink());
// sunday.__proto__ = dinner;
// console.log(sunday.getDrink());

// super
// let breakfast = {
//   getDrink() {
//     return 'tea';
//   }
// }
//
// let dinner = {
//   getDrink() {
//     return 'bear';
//   }
// }
//
// let sunday = {
//   __proto__: breakfast,
//   getDrink() {
//     return super.getDrink() + 'milk'
//   }
// }
//
// console.log(sunday.getDrink());

// 迭代器Iterators
// function chef(...foods) {
//   let i = 0;
//
//   return {
//     next(){
//       let done = (i > foods.length);
//       let value = !done ? foods[i++] : undefined;
//
//       return {
//         value: value,
//         done: done
//       }
//     }
//   }
// }
//
// var linxiao = chef('tomato', 'eggs');
// console.log(linxiao.next());
// console.log(linxiao.next());
// console.log(linxiao.next());

// 生成器Generators,有问题
// function* chef(){
//   yield "tomato";
//   yield "eggs";
// }
//
// var linxiao = chef();
// console.log(linxiao.next());
// console.log(linxiao.next());
// console.log(linxiao.next());


// 类class
// class Chef {
//   constructor(food) {
//     this.food = food
//   }
//   cook() {
//     console.log(this.food);
//   }
// }
//
// let linxiao = new Chef("tomato");
// linxiao.cook();

// get 和 set
// class Chef {
//   constructor(food) {
//     this.food = food;
//     this.dish = [];
//   }
//
//   get menu() {
//     return this.dish;
//   }
//   set menu(dish) {
//     this.dish.push(dish);
//   }
//   cook() {
//     console.log(this.food);
//   }
// }
//
// let linxiao = new Chef();
// console.log(linxiao.menu = "eggs");
// console.log(linxiao.menu = "pizza");
// console.log(linxiao.menu);

// 静态方法static
// class Chef {
//   constructor(food) {
//     this.food = food;
//     this.dish = [];
//   }
//
//   get menu() {
//     return this.dish;
//   }
//   set menu(dish) {
//     this.dish.push(dish);
//   }
//   static cook(food) {
//     console.log(food);
//   }
// }
//
// Chef.cook('potato');

// 继承extends
// class Person {
//   constructor(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//   }
//
//   intro() {
//     return `${this.name}在${this.birthday}出生`;
//   }
// }
//
// class Chef extends Person {
//   constructor(name, birthday) {
//     super(name, birthday);
//   }
// }
//
// var linxiao = new Chef("林晓", '1994-10-30');
// console.log(linxiao.intro());

// Set
// let group = new Set(['Tim', 'Tommy', 'Bob']);
// group.add("Tina");
//
// console.log(group);
// console.log(group.size);
// console.log(group.has("Tim"));
// group.delete("Bob");
// console.log(group);
// group.forEach(index => {
//   console.log(index);
// });

// Map
// let food = new Map();
// let fruit = {}, cook = function() {}, dessert = '甜点';
//
// food.set(fruit, 'lemon');
// food.set(cook, 'knife');
// food.set(dessert, 'cookie');
//
// console.log(food);
// console.log(food.size);
// console.log(food.get(fruit));
// console.log(food.get(cook));
// food.delete(dessert);
// console.log(food.get(dessert));
//
// food.forEach((value, key) => {
//   console.log(`${key}, ${value} \n`);
// })
