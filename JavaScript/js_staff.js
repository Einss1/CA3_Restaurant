/* Customer Generator */

const url = ' https://randomuser.me/api/?nat=ie ';

let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let street = document.getElementById('street');
let cell = document.getElementById('cell');
let btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
});

function handleErrors(res) {
    if (!res.ok) {
        throw error(res.status);
    }
    console.log(res);
    return res;
}

function parseJSON(res) {
    return res.json();
}

function updateProfile(profile) {
    avatar.src = profile.results[0].picture.medium;
    fullname.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
    email.innerHTML = profile.results[0].email;
    street.innerHTML = profile.results[0].location.street.name + ", " + profile.results[0].location.street.number;;
    cell.innerHTML = profile.results[0].cell; 
    return 1;
}

function printError(error) {
    console.log(error);
}

/* Food Cost */

function calculate() {

price1 = document.getElementById("nachos").value*5;
price2 = document.getElementById("tacos").value*7;
price3 = document.getElementById("churros").value*5;
price4 = document.getElementById("steak").value*18;
price5 = document.getElementById("salad").value*13;
price6 = document.getElementById("ribeye").value*22;
price7 = document.getElementById("coke").value*3;
price8 = document.getElementById("milkshake").value*5;
price9 = document.getElementById("water").value*1.50;
price10 = document.getElementById("gateau").value*7;
price11 = document.getElementById("cake").value*3;
price12 = document.getElementById("cream").value*3;

document.getElementById("totalbill").innerHTML = price1 + price2 + price3 + price4
+ price5 + price6 + price7 + price8 + price9 + price10 + price11 + price12 + ' €';

document.getElementById("starters").innerHTML = price1 + price2 + price3 + ' €';

document.getElementById("main").innerHTML = price4 + price5 + price6 + ' €';

document.getElementById("dessert").innerHTML = price10 + price11 + price12 + ' €';

document.getElementById("drinks").innerHTML = price7 + price8 + price9 + ' €';

document.getElementById("vegetarian").innerHTML = price1 + price3 + price5 + ' €';

document.getElementById("nonvegetarian").innerHTML = price2 + price4 + price6 + ' €';
}


