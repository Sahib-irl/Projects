// var sum = 0
// let n =prompt("Enter the number of n: ")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//     sum += (i + 1)  
//     console.log("Sum of first" + n + "natural numbers is " + sum)


// } 

// arr = [1, 2, 4 ,]

// function avg(a, b, c) {
//     return a + b + c / 3
// }

// let a = avg(...arr)
// console.log(a)



// function add(a,b) {
//     a = prompt("Enter the value of a: ", a );
//     b = prompt("Enter the value of b: ", b );
//     sum = (a + b);
//    console.log("The sum of ", a, "and", b, "is: " , sum)
//    return sum
// }
// add();


// function add(a,b) {
//     a = prompt("Enter the value of a: ", a );
//     b = prompt("Enter the value of b: ", b );
//     sum = a + b;
//    console.log("The sum of ",a, "and",b, "is: " + sum)
//    return sum
// }
// add();

// console.log("Hellooooo")
// let a=window;
// window.alert("Warning, Zombie apocolypse!!!")
// a=prompt("We mean no harm to your machine. ")
// console.log("welcome");

// let a = document;
// a = document.all;
// a = document.body;




// class Employee {
//     constructor(givenName, givenExperience, givenSalary) {
//         this.name = givenName;
//         this.experience = givenExperience;
//         this.salary = givenSalary;
//     }

//     slogan() {
//         return `I am ${this.name} and I have been working for this company for ${this.experience} years and it is awesome`;
//     }
//     joiningYear() {
//         return 2022 - this.experience;
//     }

// }
// class Programmer extends Employee() {

//     constructor(givenName, givenExperience, givenSalary, Language) {
//         super(givenName, givenExperience, givenSalary);
//         this.Language = givenLanguage;

//     }

//     favLang() {
//         if (this.Language == 'Python') {
//             return 'Python';
//         }
//         else {
//             return 'Javascript';
//         }
//     }
// }



/*

// Using a JS Library
Create a class Library and implement the following:


1. Constructor must take the bookList as an arguement.
2. Get the bookList()
3.issueBook(bookname,user)
4.returnBook(bookname)


*/

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        }
        else {
            console.log("This book is already issued!");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
        console.log("This book is now available");
    }
}

// sahibLib= new Library(["TWD","TLOU","RICH DAD POOR DAD","POWER"])