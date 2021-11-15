// CLASSES
    //static method
        // class Student {
        //     constructor(name, age, school){
        //         this.myName = name;
        //         this.myAge = age;
        //         this.mySchool = school;
        //     }
        //     static studentBio(para){
        //             console.log(`i m ${para.myName} my age is ${para.myAge} my school is ${para.mySchool} .`);
        //         }
        // }
        // let studentObject = new Student("jahangir", 20, "SNS");
        // Student.studentBio(studentObject);

    // non-static or instance method
        // class Student {
        //     constructor(name, age, school){
        //         this.myName = name;
        //         this.myAge = age;
        //         this.mySchool = school;
        //     }
        //         studentBio(){
        //             return `i m ${this.myName} my age is ${this.myAge} my school is ${this.mySchool} .`;
        //         }
        // }
        // let studentObject = new Student("jahangir", 20, "SNS");
        // studentObject.studentBio();

        // class Players extends Student{
        //     constructor(name, age, school,game){
        //         super(name, age, school);
        //         this.myGame = game;
        //     }
        //         playersBio(){
        //             return `${super.studentBio()} i m the player of ${this.myGame}`;
        //         }
        // }
        // let playersObject = new Players("jahangir", 20, "SNS", "football");
        // console.log(playersObject.playersBio());

        // class Dancer extends Players{
        //     constructor(name, age, school,game,dance){
        //         super(name, age, school,game,dance)
        //         this.myMusic = dance;
        //     }
        //     dancerBio(){
        //         return `${super.playersBio()} i m the dancer of ${this.myMusic}`
        //     }
        // }
        // let dancerObject = new Dancer("jahangir", 20, "SNS", "football","hip hop");
        // console.log(dancerObject.dancerBio());
        // console.log(dancerObject);

// FUNCTIONS
    // function declaration 
        // function fun(a, b){
        //     return a + b
        // } console.log(fun(1, 2));

    // function expression or anonymous function
        // let  a = function() {
        //     console.log("function expression or anonymous function")
        // };a();

    //  callback function
        // let b = (function() {
        //     console.log("callback function")
        // });
        // b();

    // arrow funcion
        // let c = ((a, b) => {
        //     return a + b 
        // });
        // console.log(c(1, 2));

        // let d = (a , b) =>  a + b ;
        // console.log(d(1, 2));

    // IIFE
        // (function(){
        //     console.log("Immediately invoked function execution")
        // })();

        
