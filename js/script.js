

function openSideNav() {
    $(".side-nav").animate({
        left: 0
    }, 500)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 6; i++) {
        $(".list li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

function closeSideNav() {
    let navWidth = $(".side-nav .nav-tab").outerWidth()
    $(".side-nav").animate({
        left: -navWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".list li").animate({
        top: 300
    }, 500)
}

closeSideNav()
$(".side-nav i.open-close-icon").click(() => {
    if ($(".side-nav").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})





let data = [];

//StartHome
getplayingNow();


// End Home





//  Start of Movie

async function getplayingNow() {
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        console.log(data);
        displayplayingNow();

    }
    else if (response.status == 404) { alert('not found') }

    
}
function displayplayingNow() {
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                <div  class="movie position-relative overflow-hidden rounded-2 ">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                    <div class="movie-layer position-absolute  p-2">
                        <h4 class="mt-4 text-center fw-bold fs-3">${data[i].title}</h4>
                        <div class="h-50 overflow-hidden pt-3">
                        <p>${data[i].overview}</p>
                        </div>
                        <p class="mt-1">Release Date: ${data[i].release_date}</p>
                        <div>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <div class="border">
                        <p class="mt-2 ms-1">${data[i].vote_average}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>`
    }

    document.getElementById('nowPlayingMovie').innerHTML = cartoona
    document.querySelector('#nowPlayingMovie').classList.remove('d-none')
    document.querySelector('#popularMovie').classList.add('d-none')
    document.querySelector('#topRatedMovie').classList.add('d-none')
    document.querySelector('#trendingMovie').classList.add('d-none')
    document.querySelector('#upComingMovie').classList.add('d-none') 
    document.querySelector('#loder').classList.add('d-none')
  
}

// End of Movie

// Start of popular Movie

async function getPopular() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        console.log(data);
        displayPopular();


    }
    else if (response.status == 404) { alert('not found') }
}
function displayPopular() { 
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                <div  class="movie position-relative overflow-hidden rounded-2 ">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                    <div class="movie-layer position-absolute  p-2">
                        <h4 class="mt-4 text-center fw-bold fs-3">${data[i].title}</h4>
                        <div class="h-50 overflow-hidden pt-3">
                        <p>${data[i].overview}</p>
                        </div>
                        <p class="mt-1">Release Date: ${data[i].release_date}</p>
                        <div>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <div class="border">
                        <p class="mt-2 ms-1">${data[i].vote_average}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>`
    }
    document.querySelector('#popularMovie').classList.remove('d-none')
    document.querySelector('#nowPlayingMovie').classList.add('d-none')
    document.querySelector('#topRatedMovie').classList.add('d-none')
    document.querySelector('#trendingMovie').classList.add('d-none')
    document.querySelector('#upComingMovie').classList.add('d-none') 
    document.getElementById('popularMovie').innerHTML = cartoona
}

//End of Popular

// Start of top rated movie

async function gettopRatedMovie() {
    let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        console.log(data);
        displaytopRatedMovie();


    }
    else if (response.status == 404) { alert('not found') }
}
function displaytopRatedMovie() { 
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                <div  class="movie position-relative overflow-hidden rounded-2 ">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                    <div class="movie-layer position-absolute  p-2">
                        <h4 class="mt-4 text-center fw-bold fs-3">${data[i].title}</h4>
                        <div class="h-50 overflow-hidden pt-3">
                        <p>${data[i].overview}</p>
                        </div>
                        <p class="mt-1">Release Date: ${data[i].release_date}</p>
                        <div>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <div class="border">
                        <p class="mt-2 ms-1">${data[i].vote_average}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>`
    }
    document.getElementById('topRatedMovie').innerHTML = cartoona
    document.querySelector('#topRatedMovie').classList.remove('d-none')
    document.querySelector('#popularMovie').classList.add('d-none')
    document.querySelector('#nowPlayingMovie').classList.add('d-none')   
    document.querySelector('#trendingMovie').classList.add('d-none')
    document.querySelector('#upComingMovie').classList.add('d-none') 
}

// End of top rate movie


//Start of trending Movie

async function getTrendingMovie() {
    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        console.log(data);
        displayTrending();


    }
    else if (response.status == 404) { alert('not found') }
}
function displayTrending() { 
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                <div  class="movie position-relative overflow-hidden rounded-2 ">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                    <div class="movie-layer position-absolute  p-2">
                        <h4 class="mt-4 text-center fw-bold fs-3">${data[i].title}</h4>
                        <div class="h-50 overflow-hidden pt-3">
                        <p>${data[i].overview}</p>
                        </div>
                        <p class="mt-1">Release Date: ${data[i].release_date}</p>
                        <div>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <div class="border">
                        <p class="mt-2 ms-1">${data[i].vote_average}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>`
    }
    document.getElementById('trendingMovie').innerHTML = cartoona
    document.querySelector('#trendingMovie').classList.remove('d-none')
    document.querySelector('#topRatedMovie').classList.add('d-none')
    document.querySelector('#popularMovie').classList.add('d-none')
    document.querySelector('#nowPlayingMovie').classList.add('d-none')
    document.querySelector('#upComingMovie').classList.add('d-none')   
}
//End of trending movie

//Start UpComing Movie
async function getupComingMovie() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    if (response.status == 200) {
        let finalResponse = await response.json();
        data = finalResponse.results;
        console.log(data);
        displayupComingMovie();


    }
    else if (response.status == 404) { alert('not found') }
}
function displayupComingMovie() { 
    let cartoona = "";

    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="col-md-4">
                <div  class="movie position-relative overflow-hidden rounded-2 ">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}">
                    <div class="movie-layer position-absolute  p-2">
                        <h4 class="mt-4 text-center fw-bold fs-3">${data[i].title}</h4>
                        <div class="h-50 overflow-hidden pt-3">
                        <p>${data[i].overview}</p>
                        </div>
                        <p class="mt-1">Release Date: ${data[i].release_date}</p>
                        <div>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <div class="border">
                        <p class="mt-2 ms-1">${data[i].vote_average}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>`
    }
    document.getElementById('upComingMovie').innerHTML = cartoona
    document.querySelector('#upComingMovie').classList.remove('d-none')
    document.querySelector('#trendingMovie').classList.add('d-none')
    document.querySelector('#topRatedMovie').classList.add('d-none')
    document.querySelector('#popularMovie').classList.add('d-none')
    document.querySelector('#nowPlayingMovie').classList.add('d-none')   
}


//End of Up Movie








// start search
let searchContainer = document.getElementById('#searchContainer')
async function searchByName() {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    if (response.status == 200) {
        let finalResponse = await response.json()
        let data = finalResponse.result
        console.log(data)
        showSearchInputs()

    }
}

function showSearchInputs() {
    searchContainer = `
<div class="row py-4">
<div class="col-md-6 ">
           <input id="search" type="search" placeholder="Search" class="form-control w-50 mx-auto bg-black rounded-pill text-white shadow-none border-white px-3" onclick="searchByName(this.value)">
        </div>
    </div>
    `
    document.getElementById('rowData').innerHTML = searchContainer
}


//search end







// start of contatct


let contactContainer = document.getElementById('#contactUs')

function displayContacts() {
    contactContainer = ` <div class="row g-4">
    <div class="col-md-6">
        <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
        <div id="nameAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
           Invalid Name ,Only characters allowed
        </div>
    </div>
    <div class="col-md-6">
        <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
        <div id="emailAlert" class="alert alert-black  w-100 mt-2 d-none text-danger fw-bold">
            Invalid Email , try example@domain.com
        </div>
    </div>
    <div class="col-md-6">
        <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
        <div id="phoneAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
            Invalid Phone Number
        </div>
    </div>
    <div class="col-md-6">
        <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
        <div id="ageAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
            Age must be over 16+
        </div>
    </div>
    <div class="col-md-6">
        <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
        <div id="passwordAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
           Password must contain at least 8 character        
        </div>
    </div>
    <div class="col-md-6">
        <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
        <div id="repasswordAlert" class="alert alert-black w-100 mt-2 d-none text-danger fw-bold">
            Not match password 
        </div>
    </div>

<div/>
<button id="submitBtn" disabled class="btn btn-black text-white">Submit</button>

 
 `
    document.getElementById('contactData').innerHTML = contactContainer
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputEntered = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputEntered = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputEntered = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputEntered = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputEntered = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputEntered = true
    })

}


let nameInputEntered = false;
let emailInputEntered = false;
let phoneInputEntered = false;
let ageInputEntered = false;
let passwordInputEntered = false;
let repasswordInputEntered = false;




function inputsValidation() {
    if (nameInputEntered) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputEntered) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputEntered) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputEntered) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputEntered) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputEntered) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}

displayContacts();

// end of contatct