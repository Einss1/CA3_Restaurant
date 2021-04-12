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