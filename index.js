const url = "https://www.boredapi.com/api/activity";

const idea = document.getElementById('display');
const button = document.getElementById('go-button');
const title = document.getElementById("title");
const body = document.body;

function getData(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            idea.textContent=data.activity
            idea.style.color = "white"
            title.textContent = "BORED🙈APE"
            body.style.background = "linear-gradient( yellow, lime)"
            button.textContent = "Again!"
            button.style.fontSize = "24px"
            // body.classList.add("activated")
        });
};

button.addEventListener('click', getData);