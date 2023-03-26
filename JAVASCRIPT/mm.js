// Three states of promises are
// -resolve
// -reject
// -pending

// const { resume } = require("prompt");

// const { ModalBody } = require("react-bootstrap");


// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 console.log("Function says your promise has been resolved");
//                 resolve();
//             }
//             else {
//                 console.log("Function says your promise has not been resolved")
//                 reject('sorry');
//             }
//         }, 3000);
//     })
// }

// func1().then(function () {

//     console.log("Sahib:thanks for resolving");

// }).catch(function (error) {
//     console.log("Sahib:   :( " + error);

// })


//   oddEven
// function oddEven() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let n = window.prompt("Enter the value of n: ")
//             if (n % 2 == 0) {
//                 console.log("n is even");
//                 resolve();
//             }
//             else {
//                 console.log("n is odd");
//                 reject();
//             }

//         }, 2000);
//     })

// }
// oddEven().then(function () {
//     console.log("Task resolved ");
// }).catch(function () {
//     console.log("Task failed");
// })

// console.log("Hello xD");

// let myBtn = document.getElementById("myBtn");
// let content = document.getElementById("content");

// function postData() {
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"testvejhbfjbgu","salary":"123","age":"23"}'
//     params = {
//         method: "post",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response => response.json()).then(data => console.log(data)
//     )
// }
// postData()







// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }
// postData();


// // console.log("Before running getData")
// // getData() 
// // console.log("After 


console.log("lol xD main kaise man lu");


// async function sahib() {
//     console.log("I am inside this function");
//     const respo = await fetch("https://api.github.com/users");
//     console.log(respo);
// } 

// const myJson = `{
//     "word": "example",
//     "results": [
//       {
//         "definition": "a representative form or pattern",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "model"
//         ],
//         "typeOf": [
//           "representation",
//           "internal representation",
//           "mental representation"
//         ],
//         "hasTypes": [
//           "prefiguration",
//           "archetype",
//           "epitome",
//           "guide",
//           "holotype",
//           "image",
//           "loadstar",
//           "lodestar",
//           "microcosm",
//           "original",
//           "paradigm",
//           "pilot",
//           "prototype",
//           "template",
//           "templet",
//           "type specimen"
//         ],
//         "derivation": [
//           "exemplify"
//         ],
//         "examples": [
//           "I profited from his example"
//         ]
//       },
//       {
//         "definition": "something to be imitated",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "exemplar",
//           "good example",
//           "model"
//         ],
//         "typeOf": [
//           "ideal"
//         ],
//         "hasTypes": [
//           "pacemaker",
//           "pattern",
//           "beauty",
//           "prodigy",
//           "beaut",
//           "pacesetter"
//         ],
//         "derivation": [
//           "exemplify",
//           "exemplary"
//         ]
//       },
//       {
//         "definition": "an occurrence of something",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "case",
//           "instance"
//         ],
//         "typeOf": [
//           "happening",
//           "natural event",
//           "occurrence",
//           "occurrent"
//         ],
//         "hasTypes": [
//           "clip",
//           "mortification",
//           "piece",
//           "time",
//           "humiliation",
//           "bit"
//         ],
//         "derivation": [
//           "exemplify"
//         ],
//         "examples": [
//           "but there is always the famous example of the Smiths"
//         ]
//       },
//       {
//         "definition": "an item of information that is typical of a class or group",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "illustration",
//           "instance",
//           "representative"
//         ],
//         "typeOf": [
//           "information"
//         ],
//         "hasTypes": [
//           "excuse",
//           "apology",
//           "specimen",
//           "case in point",
//           "sample",
//           "exception",
//           "quintessence",
//           "precedent"
//         ],
//         "derivation": [
//           "exemplify",
//           "exemplary"
//         ],
//         "examples": [
//           "this patient provides a typical example of the syndrome",
//           "there is an example on page 10"
//         ]
//       },
//       {
//         "definition": "punishment intended as a warning to others",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "deterrent example",
//           "lesson",
//           "object lesson"
//         ],
//         "typeOf": [
//           "monition",
//           "admonition",
//           "word of advice",
//           "warning"
//         ],
//         "derivation": [
//           "exemplary"
//         ],
//         "examples": [
//           "they decided to make an example of him"
//         ]
//       },
//       {
//         "definition": "a task performed or problem solved in order to develop skill or understanding",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "exercise"
//         ],
//         "typeOf": [
//           "lesson"
//         ],
//         "examples": [
//           "you must work the examples at the end of each chapter in the textbook"
//         ]
//       }
//     ],
//     "syllables": {
//       "count": 3,
//       "list": [
//         "ex",
//         "am",
//         "ple"
//       ]
//     },
//     "pronunciation": {
//       "all": "ɪɡ'zæmpəl"
//     },
//     "frequency": 4.67
//   }`


// const myObj = JSON.parse(myJson);
// console.log('The Object is: ', myObj);
// console.log('The results in the object is: ', myObj['results']);



// let meanings = document.getElementById("meaning");
// meanings.addEventListener("click", () => {
//     console.log('Some clicked the meanings button');
//     populate();

// })

// function populate() {
//     let results = myObj["results"];
//     let myStr = "";
//     results.forEach(element => {
//         myStr += `<li class="list-group-item"> One of the definitons of example is ${element.definition} </li>`
//     });
//     let defs = document.getElementById("definitions");
//     defs.innerHTML = myStr;
// }
let reg=/sahib/;
console.log(reg);
console.log(reg.source);
