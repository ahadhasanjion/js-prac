//array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

var singers = ['NH', 'JB', 'ED', 'MJ', 'EB']
// console.log(singers.length);

//কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 

var fnames = ['Emon', 'Hasan', 'Salman', 'Rohim', 'Korim'];
var fname = fnames[3];
// console.log(fname);

//কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 

var fruits = ['Mango', 'Apple', 'Jackfruit', 'Blueberry', 'Coconat'];
fruits[2] = ('Banana')
// console.log(fruits);

//একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

var cars = ['Ford', 'Tesla', 'Tata', 'General Motors', 'Toyota', 'Honday', 'Nissan'];
var secondindex = cars.indexOf('Honday');
// console.log(secondindex);

//কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

var colors = ['Red', 'Blue', 'yellow', 'Green', ];
colors.push('Orange')
colors.pop();
// console.log(colors);

//কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

var lnames = ['Khan', 'Sharma', 'Hasan', 'Rahim'];
lnames.unshift('Jion');
lnames.shift();
// console.log(lnames);

//তোমার কাছে:  ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var myMoney = 81000;
if (myMoney > 80000) {
    // console.log('buy Mac');
} else if (myMoney > 60000 && myMoney <= 80000) {
    // console.log('Buy Gaming Laptop');
} else if (myMoney > 40000 && myMoney <= 60000) {
    // console.log('Buy Lenevo Yoga Laptop');
} else if (myMoney > 20000 && myMoney <= 40000) {
    // console.log('Buy Old Laptop');
} else {
    // console.log('Buy Mobile');
}

//আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট  হিসেবে দেখাও

for (var i = 1; i <= 39; i++) {
    // console.log('আসকে আমার মন ভালো নেই');
}
var i = 1;
while (i < +39) {
    // console.log('আসকে আমার মন ভালো নেই');
    i++
}

//একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও

for (var i = 58; i <= 98; i++) {
    // console.log(i);
}
var i = 58;
while (i <= 98) {
    // console.log(i);
    i++
}

//একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

for (var i = 412; i <= 456; i += 2) {
    // console.log(i);
}
var i = 412
while (i <= 456) {
    // console.log(i);
    i += 2;
}

//একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

for (var i = 581; i <= 623; i += 2) {
    // console.log(i);
}
var i = 581;
while (i <= 623) {
    // console.log(i);
    i += 2;
}

//তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

var eIlearned = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND CSS', 'VS CODE', 'JS', ];
for (var i = 0; i < eIlearned.length; i++) {
    var eilearn = eIlearned[i]
    // console.log(eilearn);
};

//তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

var mobilePhones = ['Samsung', 'Iphone', 'One Plus', 'Nokia', 'Xiaomi', 'Huwai']
var i = 0;
while (i < mobilePhones.length) {
    var mobilephone = mobilePhones[i];
    // console.log(mobilephone);
    i++
}

//একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

for (var i = 30; i <= 86; i++) {
    if (i == 44) {
        break;
    }
    // console.log(i);
}

//তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var booksPrice = [150, 260, 400, 500, 350, 200, 100, 650, 180, 199, 2000, 50];
for (var i = 0; i < booksPrice.length; i++) {
    var bookPrice = booksPrice[i];
    if (bookPrice > 200) {
        continue;
    }
    // console.log(bookPrice)
}

// INCHES To FEET
function InchesToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

let inch = 144;
let inchtofeet = InchesToFeet(inch);
// console.log(inchtofeet);

//FEET TO INCHES 
function FeetToInches(feet) {
    let inches = feet * 12;
    return inches;
}
let feets = 10;
let feettoinch = FeetToInches(feets);
//console.log(feetinch);

//MILES TO KILOMETER
function milestokilometer(miles) {
    let kilometer = miles * 1.609;
    return kilometer
}
let mile = 100;
let miletokilometer = milestokilometer(mile);
// console.log(miletokilometer); 

//ODD EVEN NUMBER
function oddnumber(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}
const mynumber = oddnumber(111);
// console.log(mynumber);


// LEAP YEAR 
function isleapyear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        // console.log('a leap year', year);
        return true;
    } else {
        // console.log('not a leap year', year);
        return false;
    }
}
const myYear = isleapyear(1933);
// console.log(myYear);

function leapyear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
let myYears = 2000;
let leapyears = leapyear(myYears);
// console.log(leapyears);

//ODD SUM 
// function getoddnumber(numbers){
//     const oddnumbers = [];
//     for( let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0){
//             // console.log(index, element);
//             oddnumbers.push(element);
//         }
//     }
//     // return oddnumbers;
// }

// function getsumofarry(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         // console.log(sum);
//     }
//     // return sum;
// }

// const mynumbers = [12, 65, 91, 45, 78, 32, 45]
// const oddnumbers = getoddnumber(mynumbers);
// // console.log(oddnumbers);
// const sumofoddnumbers = getsumofarry(oddnumbers);
// console.log(sumofoddnumbers);

//Calculate Factorial of a number using for loop
function sumOfNumber(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++) {
        sum = sum + i;
        // console.log(i, sum);
    };
    // return sum;
}
// sumOfNumber(7)


//MULTIFICATION
function MULTIFICATION(number) {
    let multi = 1;
    for (let i = 1; i <= number; i++) {
        multi = multi * i;
    }
    return multi;
}
//const multi = MULTIFICATION(9);

//FACTORIAL FOR LOOP / WHILE LOOP
function Factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
        // console.log(i);
    }
    // return result;
}
const number = 7;
const facto = Factorial(number);
// console.log(facto);
function factorial(numbers) {
    let num = 1;
    let result = 1;
    while (num <= 8) {
        result = result * num;
        num++;
    }
    // return result;
}

//FACTORIAL WHILE REVERSE 
function factoriaL(num) {
    let i = num;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    // return result;
}


// FIND A LEAP YEAR IN AN ARRAY
function findLeapYear(Lyear) {
    let newarray = [];
    for (let i = 0; i < Lyear.length; i++) {
        const index = i;
        const element = Lyear[i];
        if (element % 4 === 0) {
            newarray.push(element);
        }
    }
    // return newarray;
}
const Lyear = [2023, 2024, 2025, 2028, 2030];
const FindLyear = findLeapYear(Lyear);
//  console.log(findLeapYear(Lyear));

// মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।
function HoursToSeconds(Hours) {
    let seconds = Hours * 60 * 60;
    return seconds;
}
const Hours = 4;
const HToSeconds = HoursToSeconds(Hours);
// console.log(HToSeconds);

//এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
function htom(hour) {
    let minutes = hour * 60;
    return minutes;
}
const hour = 2;
const htominute = htom(hour);
// console.log(htominute);

// leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
function LeapYear(YeaR) {
    if (YeaR % 4 == 0 && YeaR % 100 != 0 || YeaR % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
const YeaR = 2023;
const LeapY = LeapYear(YeaR);
// console.log(LeapY);

//তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function myage(age) {
    const remainder = age % 2;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}
const age = 23;
const OddEvenAge = myage(age);
//console.log(OddEvenAge);

//WRITE A FUNCTION CALLED MAKE_AVG WHICH WILL TAKE AN THREE INTEGER AND RETUN THE AVERAGE OF THODE VALUES
function make_avg(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}
// console.log(make_avg(20, 20, 20));

function mak_avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    let average = sum / numbers.length;
    return average;

}
let numbers = [10, 20, 30, 40, 50];
const myagerage = make_avg(numbers);

// console.log(myagerage);

//WRITE A FUNCTION CALLED odd-EVEN which take a integer value and tells weather this value is even or odd.you need to do it in 2 wqays: 1. has return + has parameters. 2. has no mreturn + has parameters
function odd_even(number1) {
    if (number1 % 2 == 0) {
        // return true;
        // console.log('even number');
    } else {
        // return false;
        // console.log('odd number')
    }
}
odd_even(22)

//PIZZA
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    server: 2
}
const SECONDVALUE = pizza.toppings[2];
//  console.log(SECONDVALUE);  

//. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
function fullName(firstname, lastname) {
    var fname = firstname + " " + lastname;
    return fname;
}
// console.log(fullName('Ahad', 'Jion'));

//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
// function multiplicationtable(numb){
//     for(let i = 1; i <= 10; i++){
//          mult = numb * i;
//         multit += numb + " x " + i + " = " + mult + "\n";
//     }
//     return multit;
// }
// const multitable = multiplicationtable(5);
// // console.log(multitable);


//একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
function sq(num) {
    squarenumber = Math.pow(num, 2);
    return squarenumber;
}

const squaervalue = sq(5);
// console.log(squaervalue);

//একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function ToLower(Name) {
    var myname = Name.toLowerCase();
    return myname;
}
// console.log(ToLower('Jion'));

// Remove duplicate items from an array
function RemoveDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) == false) {
            unique.push(name);
        }
    }
    return unique
}
const names = ['Ahad', 'Hasan', 'Jion', 'Niall', 'Hasan', 'Ahad', 'Abdul', 'Kabul', 'Kabul', 'Abul', 'Abdul', 'Jion'];
const RemoveDuplicateNames = RemoveDuplicate(names);
// console.log(RemoveDuplicateNames);

//Write foo, bar, foobar if divisible by 3 or 5 or both
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log('foobar');
    } else if (i % 3 === 0) {
        // console.log('foo');
    } else if (i % 5 === 0) {
        // console.log('bar')
    } else {
        // console.log(i);
    }
}


//Use add and multiplication to calculate wood requirements
function woodcalculator(chairQ, TableQ, BedQ) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairwood = perChairWood * chairQ;
    const tablewood = perTableWood * TableQ;
    const bedwood = perBedWood * BedQ;

    const totalwood = chairwood + tablewood + bedwood;
    return totalwood;
}
const totalwood = woodcalculator(1, 0, 0);
// console.log(totalwood);

//Find the cheapest phone from an array of phone objects
const phones = [{
        name: 'Samsung',
        price: 100000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'One Plus',
        price: 40000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Huwai',
        price: 80000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Xiaomi',
        price: 650000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Nokia',
        price: 35000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Apple',
        Pprice: 100000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Asus',
        price: 45000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Micromax',
        price: 20000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
    {
        name: 'Walton',
        price: 15000,
        Color: 'Green',
        Storage: '156GB',
        Ram: '8GB',
        Camera: '10MP'
    },
]

function cheapestphone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myphone = cheapestphone(phones);
// console.log(myphone);

//Calculate the total cost of the products in a shopping cart

const shoppingcart = [{
        name: 'shoe',
        price: 6000,
        quantity: 5
    },
    {
        name: 't-shirt',
        price: 3000,
        quantity: 4
    },
    {
        name: 'Hoddie',
        price: 5000,
        quantity: 3
    },
    {
        name: 'ToteBag',
        price: 1000,
        quantity: 2
    },
];

function totalexpense(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const producttotal = product.price * product.quantity;
        sum = sum + producttotal;
    }
    return sum;
}

const myexpense = totalexpense(shoppingcart);
// console.log(myexpense);

// Multi-layer discount price calculation
function TicketPrice(Ticketquantity) {
    const first100ticketrate = 100;
    const second100ticketrate = 90;
    const restticketrate = 70;
    if (Ticketquantity <= 100) {
        const price = Ticketquantity * first100ticketrate;
        return price;
    } else if (Ticketquantity <= 200) {
        const first100ticketprice = 100 * first100ticketrate;
        const restticketquantity = Ticketquantity - 100;
        const restticketprice = restticketquantity * second100ticketrate;
        const totalprice = first100ticketprice + restticketprice;
        return totalprice;
    } else {
        const first100ticketprice = 100 * first100ticketrate;
        const second100ticketprice = 100 * second100ticketrate;
        const restticketquantity = Ticketquantity - 200;
        const restticketprice = restticketquantity * restticketrate;
        const totalcost = first100ticketprice + second100ticketprice + restticketprice;
        return totalcost;
    }
}
const mytotalexpense = TicketPrice(201);
// console.log(mytotalexpense);

//Handle unexpected function input parameter error
function add(num1, num2) {
    return num1 + num2;
}
const result = add(15, 15);
// console.log(result); 

//write a function that will take 3 numbers and return the max number
function MaxNumber(num1, num2, num3) {
    // if(num1 > num2 && num1 > num3){
    //     // console.log(num1);
    // }
    // else if(num2 > num1 && num2 > num3){
    //     // console.log(num2);
    // }
    // else{
    //     // console.log(num3);
    // }
}
const mnumber = MaxNumber(5, 6, 7);
// console.log(Math.max(5, 6, 7));
//write a function that will take 3 parameters and return the min number
function MinNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        // console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        // console.log(num2);
    } else {
        // console.log(num3);
    }
}
// console.log(Math.min(1, 2, 3));
// MinNumber(1, 2, 3);

//একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
let Smallnumbers = [25, 26, 50, 99, 100, 500, 5];
let smallnumber = Smallnumbers[0];
for (let i = 1; i < Smallnumbers.length; i++) {
    let element = Smallnumbers[i];
    if (element < smallnumber) {
        smallnumber = element;
    }
}
// console.log(smallnumber);

//একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 
let minNumber = [500, 600, 1000];
let Min = minNumber[0];
for (let i = 1; i < minNumber.length; i++) {
    let element = minNumber[i];
    if (element < Min) {
        Min = element;
    }
}
// console.log(Min);
// একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
function avarage(totalnumbers) {
    let sum = 0;
    for (let i = 0; i < totalnumbers.length; i++) {
        sum = sum + totalnumbers[i];
    }
    let totalaverage = sum / totalnumbers.length;
    return totalaverage;

}
let totalnumbers = [10, 20, 30, 40, 50];
const myavarage = avarage(totalnumbers);
// console.log(myavarage);

//একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
function FullArea(width, height) {
    const area = width * height;
    return area;
}
const FArea = FullArea(7, 7);
// console.log(FArea);

//. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

let arr = [20, 30, 40, 700, 1000, , 500];
// console.log(arr.sort()[arr.length-2]);

// তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
function CelToFer(celsius) {
    let Far = (celsius * (9 / 5) + 32);
    return Far;
}
// console.log(CelToFer(200));

//একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
function FarToCel(Fahrenheit) {
    let Cel = (Fahrenheit - 32) * 5 / 9;
    return Cel;
}
// console.log(FarToCel(100));

//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
// var calculateInterest = function (total,year,rate) {
//     var interest = rate/100+1;
//     return parseFloat((total*Math.pow(interest,year)).toFixed(4));
// }

// // var answer = calculateInterest(915,13,2);
const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;

function Interest(p, t, r, n) {
    const amount = p * (Math.pow((1 + (r / n)), (n * t)));
    const interest = amount - p;
    return interest;
};
// console.log(Interest(principal, time, rate, n));

// কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
function PrimeNumber(number) {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const IsPrimeNumber = PrimeNumber(37);
// console.log(IsPrimeNumber);

//একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের ক
function TriangleArea(a, b, c) {
    let tarea = (a + b + c) / 2;
    let TotalTriangleArea = Math.sqrt(tarea * (tarea - a) * (tarea - b) * (tarea - c));
    return TotalTriangleArea;
}
const TArea = TriangleArea(5, 6, 7);
// console.log(TArea);

// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
function bestFriend(myfriends) {
    var bestfriends = myfriends[0];
    for (let i = 0; i < myfriends.length; i++) {
        let index = i;
        let element = myfriends[index];
        if (element.length > bestfriends.length) {
            bestfriends = element;
        }
    }
    return bestfriends;
}
const myfriends = ['rahim', 'National University', 'khalek', 'Jhankar Bhaiya', 'Ahad Hasan Jion', 'Laal Singh Chaddha'];
var friend = bestFriend(myfriends);
// console.log(friend);

// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
function paperRequirements(book1, book2, book3) {
    let book1page = 100;
    let book2page = 200;
    let book3page = 300

    let books1 = book1page * book1;
    let books2 = book2page * book2;
    let books3 = book3page * book3;

    let totalbookpages = books1 + books2 + books3;
    return totalbookpages;
}
const bookpages = paperRequirements(5, 6, 7);
// console.log(bookpages);

//এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
function PositiveNumber(numberarr) {
    // let positive = numberarr[0];
    let positive = [];
    for (let i = 0; i < numberarr.length; i++) {
        let element = numberarr[i];
        if (element >= 0) {
            positive.push(element);
        } else {
            break;
        }
    }
    return positive;

}
const numberarr = [2, 5, 6, -8, 9, 10];
const PositiveN = PositiveNumber(numberarr);
// console.log(PositiveN);

//তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
var i = 7;
while (i <= 19) {
    // console.log(i);
    i += 2;
}

//তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
let fames = ['Rohim', 'korim', 'abul', 'kabul', 'babul', 'chabul', 'rabul'];
fames[4] = 'kobul';
fames.push('lalu', 'lolu');
fames.pop();
//console.log(fames);

//তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
let myarr = ['kodu', 'modu', 'jodu', 85, 86, 99];
for (i = 0; i < myarr.length; i++) {
    let marr = myarr[i]
    // console.log(marr);
}

// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
function mn(mnum) {
    for (let i = 0; i < mnum.length; i++) {
        let mnm = mnum[i];
        if (mnm > 80) {
            // console.log(mnm);
        }
    }
}
let mnum = [10, 20, 30, 80, 90, 100, ];
mn(mnum);


// /একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।
let fvrtsingers = [{
    name: 'Niall Horan',
    Active: 2019,
    Label: 'Capitol Records',
}]
fvrtsingers.Label = 'Warner Music Records';
// console.log(fvrtsingers); 

//RadianToDegree

// function radianToDegree(radian) {
//     if (typeof radian == 'number') {
//         let radiantodegree = (radian * 180 / Math.PI);
//         let degree = radiantodegree.toFixed(2);
//         return degree;
//     } 
//     else {
//         return 'Please Enter Radian Number';
//     }
// }
// console.log(radianToDegree(199));

//Calculate the total that i have to pay
// function oilPrice(dissel, petrol, octane) {
//     if (typeof dissel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
//         return 'Please Enter Dissel, petrol, Octane Liter';
//     } 
//     else {
//         let disselPerLiter = 114;
//         let petrolPerLiter = 130;
//         let octanePerLiter = 135;

//         let disselPrice = disselPerLiter * dissel;
//         let petrolPrice = petrolPerLiter * petrol;
//         let octanePrice = octanePerLiter * octane;

//         let totaloilPrice = disselPrice + petrolPrice + octanePrice;
//         return totaloilPrice;
//     }
// }
// // console.log(oilPrice(0, 2, 3));

//check the given fule name is js or not
// function isJavaScriptFile(File){
//     if(typeof File !== 'string'){
//         return 'Please Type Valid File'
//     }
//     else if (File.endsWith('.js')) {
//         return true;
//     } 
//     else {
//         return false;
//     }
// }
// console.log(isJavaScriptFile('image.jpg.js'));

// let FriendOne = {name: 'Jion',friend: 'Niall'}
// let FriendTwo = {name: 'Niall',friend: 'Jion'}

// function isBestFriend(FriendOne, FriendTwo) { 
//     if(typeof FriendOne.name !== 'string' && typeof FriendTwo.friend !== 'string' && FriendOne.friend !== 'string' && FriendTwo.name !== 'string'){
//         return 'Please Enter Valid Name';

//     }   
//     else if(FriendOne.name == FriendTwo.friend && FriendTwo.name == FriendOne.friend) {
//         return true;
//     } 
//     else{
//         return false;
//     }
// }
// console.log(isBestFriend(FriendOne, FriendTwo));

// function publicBusFare(TotalPublic) {
//     if (typeof TotalPublic !== 'number') {
//         return 'Please Enter Total Public Number'
//     } 
//     else {
//         let BusCap = 50;
//         let MicroBusCap = 11;
//         let PublicBusPrice = 250;

//         let Bus = TotalPublic % BusCap;
//         let MicroBus = Bus % MicroBusCap;
//         let totalCost = MicroBus * PublicBusPrice;
//         return totalCost;
//     }

// }
// // console.log(publicBusFare(50)); 


//PROBLEM NUMBER 1
//  function radianToDegree(radian) {
//     if (typeof radian == 'number') {
//         let radiantodegree = (radian * 180 / Math.PI);
//         let degree = radiantodegree.toFixed(2);
//         return degree;
//     } 
//     else {
//         return 'Please Enter Radian Number';
//     }
// }
// // console.log(radianToDegree(10));

// //PROBLEM NUMBER 2
// function isJavaScriptFile(File) {
//     if (typeof File !== 'string') {
//         return 'Please Type Valid File'
//     } else if (File.endsWith('.js')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // console.log(isJavaScriptFile('image.jpg.js'));

// //PROBLEM NUMBER 3
// function oilPrice(dissel, petrol, octane) {
//     if (typeof dissel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
//         return 'Please Enter Dissel, petrol, Octane Liter';
//     } else {
//         let disselPerLiter = 114;
//         let petrolPerLiter = 130;
//         let octanePerLiter = 135;

//         let disselPrice = disselPerLiter * dissel;
//         let petrolPrice = petrolPerLiter * petrol;
//         let octanePrice = octanePerLiter * octane;

//         let totaloilPrice = disselPrice + petrolPrice + octanePrice;
//         return totaloilPrice;
//     }
// }
// // console.log(oilPrice(0, 0, 1));

// //PROBLEM NUMBER 4
// function publicBusFare(TotalPublic) {
//     if (typeof TotalPublic !== 'number') {
//         return 'Please Enter Total Public Number'
//     } else {
//         let BusCap = 50;
//         let MicroBusCap = 11;
//         let PublicBusPrice = 250;

//         let Bus = TotalPublic % BusCap;
//         let MicroBus = Bus % MicroBusCap;
//         let totalCost = MicroBus * PublicBusPrice;
//         return totalCost;
//     }

// }
// // console.log(publicBusFare(50));

// //PROBLEM NUMBER 5
// let FriendOne = {name: 'Jion', friend: 'Niall'}
// let FriendTwo = {name: 'Niall', friend: 'Jion'}

// function isBestFriend(FriendOne, FriendTwo) {
//     if (typeof FriendOne.name !== 'string' && typeof FriendTwo.friend !== 'string' && FriendOne.friend !== 'string' && FriendTwo.name !== 'string') {
//         return 'Please Enter Valid Name';

//     }
//     else if (FriendOne.name == FriendTwo.friend && FriendTwo.name == FriendOne.friend) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// // console.log(isBestFriend(FriendOne, FriendTwo));










//PROBLEM NUMBER 1
// function radianToDegree(radian) {
//     if (typeof radian == 'number') {
//         let radiantodegree = (radian * 180 / Math.PI);
//         let degree = radiantodegree.toFixed(2);
//         return degree;
//     } 
//     else {
//         return 'Please Enter Radian Number';
//     }
// }

// //PROBLEM NUMBER 2
// function  isJavaScriptFile (File) {
//     if (typeof File !== 'string') {
//         return 'Please Type Valid File'
//     } else if (File.endsWith('.js')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //PROBLEM NUMBER 3
// function oilPrice(dissel, petrol, octane) {
//     if (typeof dissel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
//         return 'Please Enter Dissel, petrol, Octane Liter';
//     } else {
//         let disselPerLiter = 114;
//         let petrolPerLiter = 130;
//         let octanePerLiter = 135;

//         let disselPrice = disselPerLiter * dissel;
//         let petrolPrice = petrolPerLiter * petrol;
//         let octanePrice = octanePerLiter * octane;

//         let totaloilPrice = disselPrice + petrolPrice + octanePrice;
//         return totaloilPrice;
//     }
// }

// //PROBLEM NUMBER 4
// function publicBusFare(TotalPublic) {
//     if (typeof TotalPublic !== 'number') {
//         return 'Please Enter Total Public Number'
//     } else {
//         let BusCap = 50;
//         let MicroBusCap = 11;
//         let PublicBusPrice = 250;

//         let Bus = TotalPublic % BusCap;
//         let MicroBus = Bus % MicroBusCap;
//         let totalCost = MicroBus * PublicBusPrice;
//         return totalCost;
//     }

// }

// //PROBLEM NUMBER 5
// let FriendOne = {name: 'Jion', friend: 'Niall'}
// let FriendTwo = {name: 'Niall', friend: 'Jion'}

// function isBestFriend(FriendOne, FriendTwo) {
//     if (typeof FriendOne.name !== 'string' && typeof FriendTwo.friend !== 'string' && FriendOne.friend !== 'string' && FriendTwo.name !== 'string') {
//         return 'Please Enter Valid Name';

//     }
//     else if (FriendOne.name == FriendTwo.friend && FriendTwo.name == FriendOne.friend) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }






//PROBLEM NUMBER 1 START
function radianToDegree(radian) {
    if (typeof radian == 'number') {
        let radiantodegree = (radian * 180 / Math.PI);
        let degree = radiantodegree.toFixed(2);
        return degree;
    } else {
        return 'Please Enter Radian Number';
    }
}
console.log(radianToDegree(10));
//PROBLEM NUMBER 1 END
//PROBLEM NUMBER 2 START
function isJavaScriptFile(File) {
    if (typeof File !== 'string') {
        return 'Please Type Valid File'
    } else if (File.endsWith('.js')) {
        return true;
    } else {
        return false;
    }
}
console.log(isJavaScriptFile('mylove.js'));
//PROBLEM NUMBER 2 END
//PROBLEM NUMBER 3 START
function oilPrice(dissel, petrol, octane) {
    if (typeof dissel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
        return 'Please Enter Dissel, petrol, Octane Liter';
    } else {
        let disselPerLiter = 114;
        let petrolPerLiter = 130;
        let octanePerLiter = 135;
        let disselPrice = disselPerLiter * dissel;
        let petrolPrice = petrolPerLiter * petrol;
        let octanePrice = octanePerLiter * octane;
        let totaloilPrice = disselPrice + petrolPrice + octanePrice;
        return totaloilPrice;
    }
}
console.log(oilPrice(0, 0, 1));
//PROBLEM NUMBER 3 END
//PROBLEM NUMBER 4 START
function publicBusFare(TotalPublic) {
    if (typeof TotalPublic !== 'number') {
        return 'Please Enter Total Public Number'
    } else {
        let BusCap = 50;
        let MicroBusCap = 11;
        let PublicBusPrice = 250;
        let Bus = TotalPublic % BusCap;
        let MicroBus = Bus % MicroBusCap;
        let totalCost = MicroBus * PublicBusPrice;
        return totalCost;
    }
}
console.log(publicBusFare(365));
//PROBLEM NUMBER 4 END
//PROBLEM NUMBER 5 START
let FriendOne = {
    name: 'Jion',
    friend: 'Niall'
}
let FriendTwo = {
    name: 'Niall',
    friend: 'Jion'
}

function isBestFriend(FriendOne, FriendTwo) {
    if (typeof FriendOne.name !== 'string' && typeof FriendTwo.friend !== 'string' && FriendOne.friend !== 'string' && FriendTwo.name !== 'string') {
        return 'Please Enter Valid Object';
    } else if (FriendOne.name == FriendTwo.friend && FriendTwo.name == FriendOne.friend) {
        return true;
    } else {
        return false;
    }
}
console.log(isBestFriend(FriendOne, FriendTwo));
//PROBLEM NUMBER 5 END