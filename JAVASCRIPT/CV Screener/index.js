console.log('hello there we meet again');


const data = [
    {
        name: 'Sahib Singh',
        age: 18,
        city: 'Chandigarh',
        language: 'Javascript',
        frameworks: 'React & Node js',
        image: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
        name: 'Vasu',
        age: 18,
        city: 'Chandigarh',
        language: 'Full Stack',
        frameworks: 'React & Node js',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
        name: 'Harry',
        age: 28,
        city: 'UP',
        language: 'Python',
        frameworks: 'Django & Flask',
        image: 'https://randomuser.me/api/portraits/men/73.jpg',
    },
    {
        name: 'Harnoor',
        age: 38,
        city: 'Chandigarh',
        language: 'Java',
        frameworks: 'Apache',
        image: 'https://randomuser.me/api/portraits/men/74.jpg',
    },
    {
        name: 'Neha',
        age: 18,
        city: 'Chandigarh',
        language: 'Javascript',
        frameworks: 'React & Node js',
        image: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
        name: 'Divjot',
        age: 18,
        city: 'Chandigarh',
        language: 'Python',
        frameworks: 'no',
        image: 'https://randomuser.me/api/portraits/men/60.jpg',
    },

]



function cvIterator(profile) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profile.length ?
                { value: profile[nextIndex++], done: false } :
                { done: true }

        }
    };
}
const candidates = cvIterator(data);
nextCV();
//button listener for (next) button

const next = document.getElementById("next");
next.addEventListener("click", nextCV);



function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById("image")
    let profile = document.getElementById("profile")
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}">`;

        profile.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">${currentCandidate.name}</li>
            <li class="list-group-item">${currentCandidate.age} years old</li>
            <li class="list-group-item"> lives in ${currentCandidate.city}</li>
            <li class="list-group-item"> primarily works on ${currentCandidate.language} language</li>
            <li class="list-group-item"> uses ${currentCandidate.frameworks} framework</li>
        
        </ul>`;
    }
    else {
        alert("End of candidate applications");
        window.location.reload();
    }
}