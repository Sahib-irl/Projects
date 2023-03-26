



// Using Prototypes

// adding the info to local Storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("onclick", setStorage);

function setStorage() {

    let bookName = document.getElementById("bookName");
    let authorName = document.getElementById("authorName");
    let book1 = document.getElementById("tables");

    if (book1 == null) {
        bookObj = [];
    }
    else {
        bookObj = JSON.parse(book1)
    }

    let myOBJ={
        givenName:bookName.value,
        givenName:authorName.value,
    }
    bookObj.push(myOBJ);
    localStorage.setItem("book1",JSON.stringify(bookObj));
}













// constructor
class book {
    constructor(name, author, type, Delete) {
        this.name = name;
        this.author = author;
        this.type = type;
        this.Delete = Delete;
    }
}


// display constructor 
class Display {
    constructor() {
    }
    // Adding methods to display the prototype
    add(book) {
        console.log("Book added to library");
        tableBody = document.getElementById("tableBody");
        let uiStr = `
                
                <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td> 
                        <td><button class="btn btn-primary" id="delBtn" type="submit">Delete Book</button></td>
                </tr>`;
        tableBody.innerHTML += uiStr;
    }




    //resets all the fields
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }




    // validates the form
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;

        }
        else {
            return true;
        }
    }




    show(type, displayMsg) {
        let msg = document.getElementById("msg");
        msg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${displayMsg}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
        setTimeout(() => {
            msg.innerHTML = "";
        }, 2000);
    }
}
















// // Adding the submit event listner to library for so that info displays in the console

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted the form");
    let name = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let type;
    let Delete = document.getElementById("delBtn")
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let apocolyptic = document.getElementById("apocolyptic");

    if (programming.checked) {
        type = programming.value;
    }
    else if (fiction.checked) {
        type = fiction.value;
    }
    else if (apocolyptic.checked) {
        type = apocolyptic.value;
    }

    let book = new Book(name, authorName, type, Delete);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("Success!", "Your book has been added successfully");
    }
    else {
        display.show("Danger!", "You cannot add this book");
    }
    e.preventDefault();

    // adding scroll view

    let tableBody = document.getElementById("tableName");
    tableBody.style.overflow = 'auto';
    tableBody.style.height = '400px';
}





// show books into the table

