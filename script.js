const form = document.getElementById('form')
const imgContainer = document.getElementById('imgContainer')
const body = document.querySelector('body')
const announcer = document.getElementById('announcer')
let randBtn = document.getElementById('randBtn')

let images = []
let imgIndex = 0

// GETS INPUT VALUE AND SENDS IT TO SEARCH FUNCTION

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event)
    let query = event.target.input.value
    console.log(query)
    search(query)
})

// FETCHES THE IMAGES FROM THE INPUTS AND APPENDS TO DIV IN BODY
async function search(queryParam) {
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=6rfnZF6E-D2i5eNGx326prxPJT2P1JP71C-YrJvYpMM`)
    let data = await response.json()
    images = data.results
    // console.log(data.results[0].urls.raw)
    loadImages(images[imgIndex])


    // let img = document.createElement('img')
    // img.src = data.results[0].urls.raw

    // imgContainer.appendChild(img)
}

function loadImages(arrayImgs) {
    imgContainer.innerHTML = ''
    console.log(arrayImgs)

    let imgTag = document.createElement('img')

    //ADD SOURCE AND ALT TEXT FROM UNSPLASH API CALL
    imgTag.src = arrayImgs.urls.raw
    imgTag.alt = arrayImgs.alt_description

    console.log(imgTag)

    imgContainer.appendChild(imgTag)
    announcerAlt(arrayImgs.alt_description)


    // LOADS EVERY IMAGE FROM ARRAY
    // arrayImgs.forEach(img => {
    //     let imgs = document.createElement('img')
    //     imgs.src = img.urls.raw

    //     imgContainer.appendChild(imgs)
    // })
}

//DISPLAYS ALT DESCRIPTION ONTO HTML

function announcerAlt(altTxt) {
    announcer.textContent = `Image Description: ${altTxt}`
}

//RANDOMALY CHOOSES ANOTHER IMAGE FROM API CALL

randBtn.addEventListener('click', function() {
    if (images.length > 0) {
        imgIndex = Math.floor(Math.random() * images.length)
        loadImages(images[imgIndex])
    }
})


// WEEK 3 WORKSHOP

async function getMyStuffFromOverThere() {
    const response = await fetch("https://api.github.com/repos/MauroT11/BOTW-W1");
    // console.log("HTTP Response:", response);
    const json = await response.json();
    let stargazers = document.createElement('p')
    stargazers.textContent = json.stargazers_count;
    // console.log(stargazers)

    body.appendChild(stargazers)
  }
  
  getMyStuffFromOverThere();