//14. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

var singers =['NH', 'JB', 'ED', 'MJ', 'EB']
// console.log(singers.length);

//17. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 

var fnames = ['Emon', 'Hasan', 'Salman', 'Rohim', 'Korim'];
var fname = fnames[3];
// console.log(fname);

//18. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 

var fruits = ['Mango', 'Apple', 'Jackfruit', 'Blueberry', 'Coconat'];
fruits[2]  = ('Banana')
// console.log(fruits);

//19. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?

var cars = ['Ford', 'Tesla', 'Tata', 'General Motors', 'Toyota', 'Honday', 'Nissan'];
var secondindex = cars.indexOf('Honday');
// console.log(secondindex);

//21. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

var colors = ['Red', 'Blue', 'yellow', 'Green',];
colors.push('Orange')
colors.pop();
// console.log(colors);

//22. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

var lnames = ['Khan', 'Sharma', 'Hasan', 'Rahim'];
lnames.unshift('Jion');
lnames.shift();
// console.log(lnames);

//24. তোমার কাছে:  ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var myMoney = 81000;
if(myMoney > 80000){
    // console.log('buy Mac');
}
else if(myMoney > 60000 && myMoney <=80000){
    // console.log('Buy Gaming Laptop');
}
else if(myMoney > 40000 && myMoney <= 60000){
    // console.log('Buy Lenevo Yoga Laptop');
}
else if(myMoney > 20000 && myMoney <= 40000){
    // console.log('Buy Old Laptop');
}
else{
    // console.log('Buy Mobile');
}

//25. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট  হিসেবে দেখাও

for(var i = 1; i<=39; i++){
    // console.log('আসকে আমার মন ভালো নেই');
}
var i = 1;
while(i <+ 39){
    // console.log('আসকে আমার মন ভালো নেই');
    i++
}

//29. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও

for(var i = 58; i<=98; i++){
    // console.log(i);
}
var i = 58;
while(i <= 98){
    // console.log(i);
    i++
}

//30. ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

for (var i = 412; i <= 456; i+=2){
    // console.log(i);
}
var i = 412
while(i <= 456){
    // console.log(i);
    i+=2;
}

//31. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

for(var i = 581; i <= 623; i+=2){
    // console.log(i);
}
var i = 581;
while(i <= 623){
    // console.log(i);
    i+=2;
}

//33.তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

var eIlearned = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND CSS', 'VS CODE', 'JS',];
for( var i = 0; i <eIlearned.length; i++){
    var eilearn = eIlearned[i]
    // console.log(eilearn);
};

//34.তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

var mobilePhones = ['Samsung', 'Iphone', 'One Plus', 'Nokia', 'Xiaomi', 'Huwai']
 var i = 0;
 while( i < mobilePhones.length){
    var mobilephone = mobilePhones[i];
    // console.log(mobilephone);
    i++
 }

//35. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

for (var i = 30; i <= 86; i++){
    if(i == 44){
        break;
    }
    // console.log(i);
}

//36.  তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var booksPrice = [150, 260, 400, 500, 350, 200,100, 650, 180, 199, 2000, 50];
for (var i = 0; i < booksPrice.length; i++) {
    var bookPrice = booksPrice[i];
    if(bookPrice > 200){
        continue;
    }
    // console.log(bookPrice)
}