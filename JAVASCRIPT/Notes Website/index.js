console.log("Hello there :)"); 
showNotes()

// If the user adds a note, the Info should be stored in the localStorage.

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");

    let notes = localStorage.getItem("notes");
    if (addTxt.value == 0) {
        alert("Please fill the box first!")
    }

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = [...JSON.parse(notes)]?.filter(value => value);
    }


    let myObj = {
        title: addTitle.value,
        text: addTxt.value,
    }

    console.log(JSON.stringify(notesObj))

    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes()

});

// showNotes() function reads all the info from the localStorage and displays it in the form of a note

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let blankNote = "";
    console.log(notesObj)

    notesObj.forEach(function (element, index) {
        if (!element) return;

        blankNote += `
        <div class=" text-center noteCard my-3 mx-2 card" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title text-center">${element.title}</h5>
                <p class="card-text text-center"> ${element.text}</p>
                <button onclick="deleteNote(this.id)" id="${index}" class=" btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = blankNote;
    } else {
        notesElem.innerHTML = `Nothing to show. Please add a note!`;
    }
}

// Function to delete the note

function deleteNote(index) {
    // console.log("Deleting.....", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj)); // To Update
    showNotes();


}


// Search bar Filtering

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputValue = searchTxt.value;
    // console.log("I THINK IT FIRED", inputValue);


    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if (cardTxt.includes(inputValue)) {

            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    });



})