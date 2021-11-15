// x = 5;
// console.log(Math.pow(x,9));

// var otherNum = 12345;
// console.log(otherNum);

 //var otherNum = 23456;
// console.log(otherNum)


//console.log(typeof(otherNum));

 //var myName = "jahangir khan";
 // console.log(myName);
 // console.log(typeof(myName));

//var myAge = 1234567890;
//console.log(myAge);
 
// onclick function 
    function clickMe() {
    //     let obj = new Date();
    //     obj.setHours(5)
    //     alert(obj.toLocaleString());
    //     alert(obj.setHours(5));
         alert("check click function onclick");
    //     console.log(obj);
     }

//Number + String
    // a = 10;
    // b = "number";
    // console.log(a + b);

//Number - Number in string
    // c = 9;
    // d = "5";
    // console.log(c - d);

//Number - number in string
    // a = 9;
    // b = "string";
    // console.log(a - b);

// string  + string
    // e = "java";
    // f = "script";
    // console.log(e+f)

// empty string + empty string
    // g = " ";
    // h = " ";
    // console.log(g+h);

// string - number
    // i = "klm";
    // j = 0;
    // console.log(i-j);

// string - string
    // k = "jk";
    // l = "jk";
    // console.log(k-l);

// true + false
    // m = true;
    // n = false;
    // console.log(m + n);

//Variable Naming Practice
    // var _myName = "jahangir khan"
    //  console.log(_myName)

    // var _1myName = "_1myName"
    //  console.log(_1myName)

    // var  1myName  = "1myName"
    //  console.log(1myName)

    // var $myName = "$myName"
    //  console.log($myName)

    //  var myName% = "$myName"
    //  console.log(myName%)

//post increment 
    // var a = 1;
    // var b = a++;

    // console.log(a);
    // console.log(b);

//pre increments
    // var c = 1;
    // var d = ++c;

// console.log(c);
// console.log(d);

    // var a = 2;
    // var b = 1;
// console.log(a != b);

// two value swap
    // var a = 5;
    // var b = 10;

    //  a = a + b ;
    //  b = a - b;
    //  a = a -b ;
    
    //  console.log(a);
    //  console.log(b);

    // var a = 1;
    // var b = 2;

    // c = a ; 
    // b = c ;
    // a = b + c;

    // console.log(a);
    // console.log(b);

// if else condition
    // var tomorrow = "rain";

    // if (tomorrow == "rain") {
    //     console.log("take a raincoat")
    // } else {
    //     console.log("no need to take a raincoat")
    // }

    // var year = 2020;
    // if (year %  4 === 1) {
    //     console.log("the year " + year + " is a leap year")
    // } else {
    //     console.log("the year " + year + " is not a leap year")
    // }

// elseif condition
    // var area = "triangle";
    // var PI = 3.142 , l = 5, b = 4, r = 3;

    // if(area == "circle"){
    //     console.log("the area of circle is : " + PI*r**2);
    // }
    // else if(area == "triangle"){
    //     console.log("the area of triangle is : " + (l*b)/2);
    // }
    // else if (area == "rectangle"){
    //     console.log("the area of rectangle is : " + l*b);
    // }
    // else{
    //     console.log("can't found the area .");
    // }
  
// bigint 
    // console.log(2n ** 53n);

//ternary operator
        //var age = 18 ;
       // console.log((age >= 18) ? "you can vote" : "you can't vote"); 

//switch statement
    //  var area = "string";
    //  var PI = 3.142 , l = 5, b = 4, r = 3;

    //   switch(area){      
    //     case 'circle':
    //         console.log("the area of circle is : " + PI*r**2);
         

    //     case 'triangle':
    //         console.log("the area of triangle is : " + (l*b)/2);
       

    //     case 'rectangle':
    //         console.log("the area of rectangle is : " + l*b);
      

    //     default:
    //         console.log("not found area in any case");
    //   }

// while loop
    // var num = 11;
    // while (num <= 20) {
    //     console.log(num)
    //     num++
    // }

// do while loop
    // var num = 0;
    // do {
    //    console.log(num);
    //    num++; 
    // } while (num > 10);
 
// for loop
    // for($i = 0; $i < 5 ;$i++){
    //     console.log(*);
    // }

    // for($i = 1; $i <= 10; $i++){
    //     console.log($i*8);
    // }

// functions 
    // function sum(){
    //     var a = 10 , b = 20 ;
    //     var total = a + b;
    //     console.log(total)
    // }
    // sum();

    // function sum(a ,b){
    //     var total = a + b;
    //     console.log(total);
    // }
    // sum(1 , 2);

    // function sum(a, b){
    //      var total = a + b;
    //      console.log(total)
    // }
    // var funExp =  sum(5 , 10);

    // function sum(a ,b){
    //       return total = a + b;
    //     }
    // var funExp =  sum(5 , 10);
    // console.log(funExp);

    // var funExp = function(a ,b){
    //            return total = a + b;
    //        }
    //    var sum =  funExp(15 , 15);
    //    console.log(sum);

    // var funExp = function(a ,b){
    //            return total = a + b;
    //        }
    //    var sum =  funExp (15 , 15);
    //    var sum1 = funExp (20 , 15);
    //    console.log(sum > sum1);

//------------------------------------ ES6 ADVANCED FEATURES START ------------------------------------------

// var v let v const
    // var is a function scoop ;
    // let and const is block scoop;

    // function varFunction() {
    //     const myFirstName ="jahangir";
    //     console.log(myFirstName);

    //     if(true){
    //         let myLastName = "khan";
    //         console.log(myLastName);
    //         console.log("inner " + myLastName);
    //         //console.log("outer " + myFirstName)
    //     } 
    //      console.log("innerOuter " + myFirstName) 
    // }
    // varFunction();

    // const myName = "jahangir khan";
    // console.log(myName);

    // myName = "islam khan";
    // console.log(myName);

// literals (template string)
    // a = 5;
    // b = 10;
    // total = a + b;
    // console.log} + ${b}  is = ${total}`);

//default parameter
  //  b is a default parameter
    //     function add(a, b=10){
    //         return a + b;           
    //     }
    //    console.log(add(38));

// traditional function expression
    // const getExpression =  function(a , b){
        
    // //    return a * b
    //      var total = a + b;
    //      console.log(total)
    //  };
    // console.log(getExpression(2,1));

// Arrow function

    // const sum = function (a , b){
    //     return {
    //         a : a,
    //         b : b
    //     }
    // }
    // console.log(sum(10 , 20));

    // const sum =  (a , b) => ({ a : a,  b : b})
    // console.log(sum(10 , 20));

    // const sum = (a , b) => `sum of a and b is ${a+b}`;
    // console.log(sum(10 , 20));

    // let sum = () => (a = 10) + (b = 12);
    // console.log(sum())
    
// Arrays

    // let cats = []
    // cats[30] = ['Dusty']
    // console.log(cats.length)
    //let cars = new Array; // optional
    // let cars = ["VOLVO" , "BMW", "FORD" , "SUZUKI" , "TATA"];
    // console.log(cars[0]);
    // console.log(cars[cars.length - 1]);
    // console.log(`index no. of TATA is ${cars.indexOf("TATA")}`);
    // console.log("index no. of TATA is " + cars.indexOf("TATA"));

    // let cars = ["VOLVO" , "BMW" , "FORD" , "SUZUKI" , "TATA"];
    // for (let i = 0; i < cars.length; i++) {
    //     console.log(cars[i])
    // }

// for in loop
// it return index
    // let cars = ["VOLVO" , "BMW" , "FORD" , "SUZUKI" , "TATA"];
    // for (const count in cars) {
    //    console.log(count);
    // }

// for of loop
// it return elements
    // let cars = ["VOLVO" , "BMW" , "FORD" , "SUZUKI" , "TATA"];
    // for(let allValue of cars) 
    // {
    //     console.log(allValue);
    // }

// forEach loop in array 
// break and continue not acceptable, it returns undefined because it edit original array;

    // let cars = ["VOLVO" , "BMW" , "FORD" , "SUZUKI" , "TATA"];
    //  cars.forEach(function(element , index , array) {
    //      console.log(element  + " : " + index , array)
    //  });
 
    //  cars.forEach((element , index , array) => {
    //     console.log(element  + " : " + index , array)
    // });

    // cars.forEach(function(element,index,array) {
    //     console.log(element , index , array)
    // });

// Searching and filter in Array 
// filter , it returns new array
  // Array.prototype.indexOf()

        // let cars = ["VOLVO" , "BMW" , "FORD" , "SUZUKI" , "FORD"];
        // console.log(cars.indexOf("FORD"));

        // 3 mean 3 number vaali index se search karna start hogi . 

        // let cars = ["VOLVO" ,"FORD" , "BMW" ,  "SUZUKI" , "FORD"];
        // console.log(cars.indexOf("FORD" , 3));

  // Array.prototype.lastIndexOf()
        // const bikes = ['honda' , "Hero" , "tvs" , "honda" , "ktm" ,"mahindra" , "jfkfl;klsdj" , "honda","Hero" , "tvs"];
        // console.log(bikes.lastIndexOf('honda'));

        // const bikes = ['honda' , "Hero" , "tvs" , "honda" , "ktm" ,"mahindra" , "jfkfl;klsdj" , "honda","Hero" , "tvs"];
        // console.log(bikes.lastIndexOf('honda',5));
        
  // Array.prototype.includes()    
        // const bikes = ['honda' , "Hero" , "tvs" , "honda" , "ktm" , "honda","mahindra"  , "ola"];
        // console.log(bikes.includes("honda"));

        // const bikes = ['honda' , "Hero" , "tvs" , "honda" , "ktm" , "honda","mahindra"  , "ola"];
        // console.log(bikes.includes("honda" , 6));

  // Array.prototype.find()
    //number < 400
        // const prices = [100, 200, 300, 350, 400, 600, 500];
        // let findPrice = prices.find((element) => {
        //                 return element < 400 ;
        // });
        // console.log(findPrice);

        // const number = [50, 100 , 30 , 300 , 400 , 200 , 600];
        // console.log(number.find(element =>  element < 400));

    //number > 400
        // const number = [50, 100 , 30 , 300 , 400 , 200 , 600, 800];
        // console.log(number.findIndex(element =>  element > 400));

        // const prizes = [50, 100 , 30 , 300 , 400 , 200 , 600];
        // const newPrizes = prizes.filter(function(element) {
        //         return element < 400;
        // })
        //  console.log(newPrizes);

        // const prizes = [50, 100 , 30 , 300 , 400 , 200 , 600];
        // const newPrizes = prizes.filter((element , index , array) => {
        //         //console.log(`${element} index of ${index} and array is ${array}`)
        //        return element > 600;
        // })
        // console.log(newPrizes);

// Array Sorting
    // let months = ["dec" , "apr" , "jan" , "mar" , "nov"];
    // console.log(months.sort());

    // let number = [5 , 1 , 1000 , 10 , 90];
    // console.log(number.sort());

    // let number = [5 , 1 , 1000 , 10 , 90];
    // console.log(number.reverse());

// compare
//     var a1 = [1,2,3];
//     var a2 = [1,2,3];
//   // console.log(a1==a2);    // Returns false
//     console.log(JSON.stringify(a1)==JSON.stringify(a2));

    // let numbers = [4, 2, 5, 1, 3];
    // numbers.sort((a, b) => a - b);
    // console.log(numbers);    

// --------------------INSERT ADD REPLACE AND DELETE Element IN Array (CRUD)--------------------

// Array.Push() //''it returns length of that array'';
    // const animals = ["goat" , "hen" , "birds" , "peacock"];
    // animals.push("dog" , "cow", "buffelo");
    // console.log(animals);

    // const count = animals.push(dog" "cow", "buffalo);
    // console.log(count)

// Array.unshift() //''it returns length of that array'';
    // const animals = ["goat" , "hen" , "birds" , "peacock"];
    // animals.unshift("dog" , "cow", "buffalo");
    // console.log(animals);

    // const myNumber = [1,2,3,5];
    // // console.log(myNumber.unshift(4,6));
    // myNumber.unshift(4,6);
    // console.log(myNumber);

// Array.pop() // it returns popped item''; // remove from last 
//     const city = ["jaipur" , "nagpur" , "jodhpur" , "jaipur"]
//    // console.log(city)
//     console.log(city.pop("nagpur"));
//     console.log(city);

// Array.shift() //''it returns popped item''; // remove from first 
    // const city = ["jaipur" , "nagpur" , "jodhpur" , "nagpur"]
    // // console.log(city)
    // console.log(city.shift());
    // console.log(city);
 
// q 1. add december at the end of an array ?
// q 2. what is the return value of splice method ?
// q 3. update March to march (update) ?
// q 4. delete june from an array ?

// splice(); it returns poped items;
//sol 1 .
    //  const months = ["jan" , "march" , "may" , "june", "august"];
    //  const newMonths = months.splice(months.length,5,"dec");
    // console.log(months);

    // const newMonths = months.splice(5,0,"dec");
    // console.log(months) ;

//sol 2 .
    //  console.log(newMonths);

//sol 3 .
    // const months = ["jan" , "march" , "may" , "june", "august"];
    // 1st method .
        // const months = ["jan" , "March" , "may" , "june", "august"];
        // // var check = months.includes("march");
        //     // console.log(check);
        // const indexNumberOfMarch = months.indexOf("March");
        //     // console.log(indexNumberOfMarch);
        // const changeMonths = months.splice(indexNumberOfMarch,2,"march");
        // console.log(months)

    // 2nd method . 
        // const months = ["jan" , "March" , "may" , "june", "august"];
        // const indexNumberOfMarch = months.indexOf("March");
        //     // console.log(indexNumberOfMarch);

        // if (indexNumberOfMarch != -1) {
        //     const updateMonth = months.splice(indexNumberOfMarch,1,"March");
        //         console.log(months); 
        // }else{
        //     "No search data found" ;
        // }

//sol 3 .
    // const months = ["jan" , "march" , "may" , "june", "august"];
    // const newMonths = months.indexOf("june");
    //         //console.log(newMonths);

    //     if (newMonths != -1) {
    //         const updateMonth = months.splice(newMonths,1);
    //         console.log(months);
    //        // console.log(updateMonth);
    //     }else{
    //         "No search data found" ;
    //     }

    // const months = ["jan" , "march" , "may" , "june", "august"];
    // const newMonths = months.indexOf("march");
    //         //console.log(newMonths);
    
    //     if (newMonths != -1) {
    //         const updateMonth = months.splice(newMonths,Infinity,'March');
    //         console.log(months);
    //        //console.log(updateMonth);
    //     }else{
    //         "No search data found" ;
    //     }

// Map() 
// it returns new array ;
// map() does not edit original array like forEach();
    // const number = [1, 2, 3, 5, 9, 19, 78];
    //     let newNum = number.map((element, index, array) => {
    //         return element > 9;
    // })
    // console.log(number);
    //console.log(newNum);

    // const number = [1, 2, 3, 5, 9, 19, 78];
    //     let newNum = number.map((element, index, array) => {
    //         return `Index of ${index} and the value of ${element} belongs to ${array}`;
    // })
    // console.log(newNum);

// q 6. find the square root of each element in an array ?
// q 7. multiply each element by 2 and return only those which are 
//      greater than 10 ?

// sol 1.
    // let number = [25, 36 ,49, 64, 81];
    // let rootSquare = number.map((element) => {
    //     return Math.sqrt(element)
    // })
    // console.log(rootSquare);

// sol 2.
    // let arr1 = [2, 3 ,4, 6, 8];
    // let arr2 = arr1.map((element) => {
    //         return element * 2;
    //      }).filter((element) => {
    //         return element > 10
    //       })
    // console.log(arr2);

// short form of sol 2.
    // let arr2 = arr1.map((element) => element * 2 ).filter((element) => element > 10)
    // console.log(arr2);

// Reduce()  
// (a,e,i,pArr)  'it returns single value';
    // let arr = [5, 6, 7]
    // let sum = arr.reduce((accumulator, curValue, index, array) => {
    //     return accumulator += curValue
    // },7)
    // console.log(sum);

// short form of Reduce() 
    // let arr1 = [2, 3 ,4, 6, 8];
    // let arr2 = arr1.map((element) => element * 2 ).filter((element) => element > 10).reduce((accumulator, curElem, ) => accumulator += curElem)
    // console.log(arr2);

// 1. flatten array from reduce () [flatten 2d or 3d array ] concat();
// 2. nested array and sub array
// sol1 .
    // const arr = [
    //     ["zone_1", "zone_2"],
    //     ["zone_3", "zone_4"],
    //     ["zone_5", "zone_6"],
    //     ["zone_7", "zone_8"]
    // ];
    // let flattenArray = arr.reduce((accumulator, curElem) => {
    //             return accumulator.concat(curElem)
    // })
    // console.log(flattenArray)

//-----------------------------------------------------------//------------------------------------------------------------//

    //extract string 
        // |-------------|  
        // |slice ()     |
        // |subString()  |
        // |subStr()     |
        // |-------------|

        // slice ()
            // let fruit = "apple, banana, kiwi, mango" 
            // let spl = fruit.slice(0,4);
            // console.log(spl) ; // last element ka count nhi deta h 
            //  let spl = fruit.slice(0,-4);
            //  console.log(spl);

    //q 8. display only 280 characters of a string like in comment box ?
        //sol 8.
            // let myComment = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            
            // let mySol = myComment.slice(0,280)
            // console.log(mySol)
            // console.log(mySol.length)
        
        // subString() // is similar slice() but this is not accept negetive index 
        // if we give negative index then this count from 0 index .

            // let fruit = "apple, banana, kiwi, mango"; 
            // let res = fruit.substring(0, 4);
            // console.log(res);

            // fruit = "apple, banana, kiwi, mango"; 
            // let res = fruit.substring(0, -4);
            // console.log(res);
        
        // substr() not accept negative value

            //fruit = "apple, banana, kiwi, mango"; 
            //let res = fruit.substring(0, -4);
                //let res = fruit.substr(-4);
            //console.log(res);
        
        // replacing string content()
        // string.portotype.replace(searchfor,replacewith)

            // var myName = "jahangir khan deshwali"
            // let res = myName.replace("deshwali", "parihar")
            // console.log(res);

    // extracting string charactors
        // 1. charAt(position)
        // 2. charCodeAt(position)
        // 3. property access []

        // charAt(position)
            // var character = "hello world";
            // console.log(character.charAt(9));

        // charCodeAt(position)
            // the charCodeAt() always return unicode of the character at a specified index in a string :
            // the method return a UTF-16 code (a integer between 0 - 65535)

            // var character = "HELLO world";
            // console.log(character.charCodeAt(0));

        // property access []
            // var character = "HELLO world";
            // console.log(character[0]);

            // var character = "HELLO world";
            // console.log(character.toUpperCase())
            // console.log(character.toLowerCase())

        //concat() , // joins two and more str
        // let fName = "jahangir";
        // let lName = "khan";
        // console.log(fName.concat(" ",lName))

        // String trim() // remove spaces from both side like - "   hrllo   "
        // var str = "      hello world     ";
        // console.log(str.trim())

    // convert  array from string  
        // var str = "a,b,c,d,e,f,g,h" ;
        // console.log(str.split(",")) ; // splite on comas 
        // console.log(str.split(" ")) ; // splite on sapaces
        // console.log(str.split(" | ")) ; // splite on pipe

//-----------------------------------------------------------//------------------------------------------------------------//

// Date & Time in JavaScript
    // JavaScript Date objects represent a singal moment in time in a plateform-indepemdent
    //  format . Date object contain a number that represents milliseconds since 1 january 1970 UTC .

    // creating date objects .
    // there are 4 ways to creating date objects :

    // 1.new Date();
    // 2.new Date(year, months, day, hours, minutes, seconds, milliseconds); // 7 parameters
    // 3.new Date(milliseconds);
    // // we connot avoid months section
    // 4.new Date(date string )

// ans1. new Date();
// Date objects are created with the new Date() constructor .

    // let curTime = new Date();
    // console.log(curTime);
    // console.log(new Date().toLocaleString());
    // console.log(new Date().toString());

    // let curTime =  Date.now() // this return milliseconds since 1 jan 1970
    // console.log(curTime);

// ans2. new Date(year, months, day, hours, minutes, seconds, milliseconds); in that order 
    // javascript count monts from 0 to 11 . like january 0 and december is 11 .

    // let dateTime = new Date(2022, 0, 1, 20, 30, 0, 0);
    // console.log(dateTime.toLocaleString());

//ans4 . new Date(date string ) 
    // var date = new Date("october 12, 2021 11:30:24");
    // console.log(date.toLocaleString()

//ans3. new Date(millisecond)
    // var d = new Date(0);
    // console.log(d.toLocaleString())

//how to get indivisual date ----- 
    // const curDate = new Date();
        //console.log(curDate.toLocaleString());
        //console.log(curDate.getFullYear()); //0-11  jan to dec
        //console.log(curDate.getMonth());
        //console.log(curDate.getDate());
        //console.log(curDate.getDay());

//how to get individual time ----- 
    // const curDate = new Date();
        // console.log(curDate.getTime());
        // console.log(curDate.getHours()); // 0-23 
        // console.log(curDate.getMinutes());
        // console.log(curDate.getSeconds());
        // console.log(curDate.getMilliseconds());

    // const curDate = new Date();
        // console.log(curDate.setTime());
        // console.log(curDate.setHours(2));
        // console.log(curDate.setMinutes());
        // console.log(curDate.setSeconds());
        // console.log(curDate.setMilliseconds());  

//only time, date, dateTime
        // console.log(new Date().toLocaleTimeString());
        // console.log(new Date().toLocaleDateString());
        // console.log(new Date().toLocaleString());

//-----------------------------------------------------------//------------------------------------------------------------//

// Math Object in JavaScript

// Math.PI() , it returns pi value .
    //console.log(Math.PI);

// Math.round() , return the value of x rounded to its nearest integer 
// [if >5 return same , else <=5 return next number 
    // var num = 9.4999;
    // var num = 9.5000;
    // console.log(Math.round(num))

// Math.pow() return the value of x to the power of y .
    // console.log(Math.pow(2 ,3));
    // console.log(2**3);

// Math.sqrt() , return the square root of x ;
    // console.log(Math.sqrt(81));
    // console.log(Math.sqrt(25));
    // console.log(Math.sqrt(97));

// Math.abs() , return absolute (positive) value , negative convert into positive
    // console.log(Math.abs(-7.9800));
    // console.log(Math.abs(-955));
    // console.log(4-6) // console.log(Math.abs(4-6));

// Math.ceil(), return the value of x rounded up to its nearest integer 
// point lagte hi 1 value increase kar provide  h .
    // console.log(Math.ceil(4.1)); 
    //  console.log(Math.round(4.5));
    // console.log(Math.ceil(5.1));
    //  console.log(Math.round(5.1));

// Math.round() , return the value of x rounded down to its nearest integer 
// point lage ya na lage point ke pahle ki value return hoti h .
// agar negative lage to aage ki value return hogi
    // console.log(Math.floor(5.9));
    // console.log(Math.floor(6.1));
    // console.log(Math.floor(-6.1));

// Math.min() , return minimum value .
    // console.log(Math.min(100, 0, -12, -200, 5));

// Math.max() , return maximum value .
    // console.log(Math.max(100, 0, -12, -200, 5, 200));

// Math.random() return a random number from 0 to 1 ;
    // console.log(Math.random());
    // console.log(Math.random()*10);
    // console.log(Math.floor(Math.random()*10));

// Math.trunc() , return a integer (+, -) part of value;
    // console.log(Math.trunc(-10.9));
    // console.log(Math.trunc(10.9));
    
//  if the value is positive number  Mth.truc() is equivalent to math.floor()
//  if the value is nege=ative number  Mth.truc() is equivalent to math.ceil()

//-----------------------------------------------------------//------------------------------------------------------------//

// difference between window and document ---

//                       Window                            |                       Document
//1. window is the main container or we say the GLOBAL     | 1.    whereas the DOM is the child of window object .  
//   object and any opreations related to entire browser   |
//   window can be a part of window object .               |
//2. all the members like object, methods, properties      | 2.   where the DOM we need refer to document if we want to   
//   if the are part of window we don't refer window.      |       use object, methods, propertis.
//3. window has methods, properties, and object like       | 3.   where the DOM needs to refer document. and this only  
//  setTimeout(), setInterval(). where the document is     |      return html and releated elements .
//  object of the window and it also has screen object     |
//  with properties describing the physical display .      |

//q. what is the root element of your document ?
//ans.  HTML .

//-----------------------------------------------------------/------------------------------------------------------------//
// types of array in javascript
    //1. homogeneous Array 
    // this array stores a single datatype (string,number,boolean)
        // let homogeneous = ["jahangir","islam","aarif","saddam"];
        // console.log(homogeneous.includes("jahangir"));
    
    //2. heterogeneous array
    // this array in opposite of homogeneous array mean this array stores mixed datatype (str,int or boolean)
        // let heterogeneous = ["string", 1, true];
        // console.log(heterogeneous[2]);

    //3. multidimensional array 
    // this array is allows that array in array 
        // let multidimensional = [["array", "12"], ["secArray", "10"], ["jahangir", 20]];
        // console.log(multidimensional[0][1]);
        //  multidimensional[1][2] = "another";
        //  console.log(multidimensional); 
        //  let add = multidimensional.splice(multidimensional.length,["another", "elem"]);
        //  console.log(multidimensional); 
    
    //4. jagged array
    // this is similar multidimensional array this array does not require uniform set of data.
    // let jagged = [
    //     ["array", "12"], 
    //     ["secArray", "10"], 
    //     ["jahangir", 20]
    // ];

// objects 
    // let person = {
    //     name : "jahangir",
    //     age : 21,
    //     address : "jaipur"
    // }
    // console.log(person);

    // adding new property in obj
        // person.location = "merta city";
        // console.log(person);

    // delete property in obj
        // delete person.address;
        // delete person["address"];
        // console.log(person);

    // nested object
        // var cars =  {
        //     "volvo" : 10,
        //     "bmw" : 12,
        //     "tata" : 10,
        //     bikes : {
        //         "yamaha" : 10,
        //         "hero" : 20,
        //         "honda" : 12
        //     }
        // }
        // console.log(cars.bikes)
        // console.log(cars.bikes["yamaha"])
        // console.log(cars.bikes.yamaha);
        
    // nested array and object
        // const myObj = {
        //     name: "John",
        //     age: 30,
        //     cars: [
        //       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        //       {name:"BMW", models:["320", "X3", "X5"]},
        //       {name:"Fiat", models:["500", "Panda"]}
        //     ]
        //   }
        //   console.log(myObj)
        //   console.log(myObj.cars)

    // function in object
        // let family = {
        //    fname : "john",
        //    lname : "doe",
        //    age : 30,
        //    address : function() {
        //     //  return this.fname + " " + this.lname + " " + this.age
        //       return `age of ${this.fname} ${this.lname} is ${this.age} `
        //    }
        // }
        //  console.log(family.address()) ;

    // object convert in array
        // let family = {
        //    fname : "john",
        //    lname : "doe",
        //    age : 30
        // }
        // let familyArray = Object.values(family);
        // console.log(familyArray);

    // get element via methods using getter
        //  let family = {
        //  fname : "john",
        //  lname : "doe",
        //  age : 30,
        //  language : "hindi",
        //  get lang(){
        //        return this.language;
        //    }
        // };
        // console.log(family.lang);

    // set property's value via methods using setter
        //  let family = {
        //  fname : "john",
        //  lname : "doe",
        //  age : 30,
        //  language : "hindi",
            
        //  set lang(value){
        //     return this.language = value;
        //     }
        // }
        //   family.lang = "english";
        //   console.log(family.language);

// sychronouse 
    // const fun2 = () => {
    //     console.log("fun2 is starting here");
    //     // consol
    // }
    // const fun1 = () => {
    //     console.log("fun1 is starting here");
    //     fun2();
    //     console.log("fun1 is ending here")
    // };
    // fun1();

// asychronouse
    // const fun2 = () => {
    //     console.log("fun2 is starting here");
        
    //     setTimeout( () => {
    //         console.log("timeout is here ")
    //     }, 5000);
            // const fun2 = () => {
    //     console.log("fun2 is starting here");
        
    //     setTimeout( () => {
    //         console.log("timeout is here ")
    //     }, 5000);
        
    // }
    // const fun1 = () => {
    //     console.log("fun1 is starting here");
    //     fun2();
    //     console.log("fun1 is ending here");
    // }
    // fun1();
    // // consol
    // }
    // const fun1 = () => {
    //     console.log("fun1 is starting here");
    //     fun2();
    //     console.log("fun1 is ending here");
    // }
    // fun1();
    // // consol

// callback function
    // let fun1 = () => {

    //     setTimeout(()=>{
    //         console.log("functiion 1 call here");
    //         fun2();
    //     },1000) 
    // }

    // let fun2 = () =>{
    //     console.log("functiion 2 call here")
    // }

    // fun1();

    // const per1 = (name,secname) => {
    //     console.log(`i m taking ${name} i call back you`);
    //     secname();
    // }
    
    // const per2 = () => {
    //     console.log("i call you here")
    // }
    // per1("aarif", per2); 
    
// callback hell function
    // const getRollNo = () => {

    //     setTimeout( () => {
    //         console.log("getRollNo api");
    //         let roll_no = [1, 2, 3, 4, 5];
    //         console.log(roll_no); 
            
    //         setTimeout( (rollno) => {
    //             const bio = {
    //                 name : "jahangir",
    //                 age : 20
    //             }
    //             console.log(`my roll no is ${rollno}, my name is ${bio.name} and my age is ${bio.age}`)

    //             setTimeout( () => {
    //                 bio.gender = "male";
    //                 console.log(`my roll no is ${rollno}, my name is ${bio.name} and my age is ${bio.age} and i m alpha ${bio.gender}`)
    //             }, 2000)

    //         }, 2000, roll_no[1])

    //     }, 2000)
    // }
    // getRollNo();

// promises ko karne k do method hote h.  
//1. promises as an object 
//2. promises construtor

// method1. jab bhi hum promis ka object create karte h to useme executor name ka function pass karte h aurus function m do params pass karna hota h resolve aur reject
// agar hamara promis comlete hota h to resolve aur agar complete nhi hota h to reject use karna h 

//let promisObj1 = new Promise( (resolve, reject) => {

//})
// resolveFun(value) call on fullfilled
// rejectFun(Response) call on reject

// note :- harek task ko as a promis manna hi padega.     
// task1 - 2 second k baad roll no. chahiye.
// task2 - theek 2 second baad kisi ek roll no ka name and age chahiye
// promis produce 
    // let promisObj1 = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         let roll_no = [1, 2, 3, 4, 5];
    //         resolve(roll_no);
    //         reject('error while fetch data')
    //     }, 2000)
    
    // });
    // let getBioData = (indexdata) => {
    //     return new Promise ( (resolve, reject) => {
    //         setTimeout( (indexdata) => {
    //             let bioData = {
    //                 name : "jahangir",
    //                 age : 20
    //             }
    //             resolve(`my roll no is ${indexdata}, my name is ${bioData.name}, and my age is ${bioData.age}`)
    //         }, 2000, indexdata)
    //     }) 
    // } 

// promis consume   
    // promisObj1.then( (rollno) => {
    //     console.log(rollno);
    //     return getBioData(rollno[1]);
    // }).then( (khuchbhi) => {
    //     console.log(khuchbhi);
    // }).catch((error) => { 
    //     console.log(error)
    // })

// async await
// jab bhi kisi func ke aage async add karte h to means is func m hame promise return kro naki value.
// jab bhi koi promise data return hota h yanai usme data mil rha h ya nhi nil rha hai
// await mean aap thoda wait karo jaise hi kaam complete hum aapko aapka output dete h.

    // let promisObj1 = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         let roll_no = [1, 2, 3, 4, 5];
    //         resolve(roll_no);
    //         reject('error while fetch data')
    //     }, 2000)
    
    // });

    //     let getBioData = (indexdata) => {
    //         return new Promise ( (resolve, reject) => {
    //             setTimeout( (indexdata) => {
    //                 let bioData = {
    //                     name : "jahangir",
    //                     age : 20
    //                 }
    //                 resolve(`my roll no is ${indexdata}, my name is ${bioData.name}, and my age is ${bioData.age}`)
    //             }, 2000, indexdata)
    //         }) 
    //     } 

    //     async function getData(){
    //         const rollnumberdata = await promisObj1;
    //         console.log(rollnumberdata);

    //         let biodatas = await getBioData(rollnumberdata[1]);
    //         console.log(biodatas);

            // return biodatas;
        //}
        //getData();

        // const getname = getData();
        // console.log(getname);

// indexing (multidimensional array )
// object in multidimensional array

    // var cities = {
    //     "raj" : [
    //         {"cityname" :" merta" , },
    //     ]
    // }
    // console.log(cities.raj.length)

    // var mainArray = [
    //     {
    //         propertyId: 1,
    //         categoryId: 2
    //     }, 
    //     {
    //         propertyId: 3,
    //         categoryId: 4
    //     }, 
    //     {
    //         propertyId: 5,
    //         categoryId: 6
    //     }, 
    //     {
    //         propertyId: 7,
    //         categoryId: 6
    //     }
    // ];
    // console.log(mainArray[0])
    //  var result = mainArray.filter(element => {
    //     return element.categoryId == 6
    //   })
    //    console.log(result);
   

    // var products = [
    //    {
    //         "propertyId" :  1,
    //         "categoryId" : 1
    //     },
    //    {
    //         "propertyId" :  9,
    //         "categoryId" : 2
    //     },
    // ]
    // console.log(products.length)
    
    // if(products.length <= 0){
    //     console.log("not found")
    // }
    // products.forEach(element => {
    //     if (element.categoryId == 2) {
    //         console.log(element)
    //     }
        //  var result =  element.categoryId == 2 ? element : "else";
        //  console.log(result)
    //  });
   
    // var result = products.filter((element) => {
    //     return element.categoryId == 2
    // });
    // console.log(result);
