console.log('Hello');
// import XMLHttpRequest from 'xhr2';


//Initializing the news api parameters
let source = "bbc-news";
let apiKey = "b81ef4893e7e404c8d0e0690b797a830"

//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");




//Creating a AJAX GET request

// const xhr = new XMLhttpRequest();
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = "";
        articles.forEach(function (element, index) {

            let news =
                `
        <div class="accordion-item newsCard ">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              <b>Breaking News ${index + 1}: </b> ${element["title"]}
                </button>
            </h2>
           
           
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body contentDes">${element["description"]}  <a href=${element["url"]} target="_blank">Read more here</a>
                </div>
            </div>
        </div>`;
            newsHTML += news;

        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Some error has occured");
    }
}
xhr.send()



//Search bar filtering

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value;


    let newsCard = document.getElementsByClassName("newsCard");
    Array.from(newsCard).forEach(function (element) {
        let contentDes = element.getElementsByClassName("contentDes")[0].innerText;
        console.log(contentDes);
        if (contentDes.includes(inputVal)) {

            element.style.display = "block";
        }

        else {
        
            element.style.display = "none"
            console.log("Nothing Found");
        }
    });
})

