// Make your own .js library to create, display and delete cookies, then use it in creating the required cookies to display a greeting message to your visitor with displaying an image as his profile pic referring to his gender, and inform him with his number of visits to the site. 

// Display username and number of visits with font color according to his choices. 

// Replace the registration page with the profile page using location object .

// the library should have the following functions:
// • `getCookie(cookieName)`:o Retrieves a cookie value based on a
// cookie name.
// • `setCookie(cookieName,cookieValue,expiryDate):` Sets a cookie
// based on a cookie name, cookie value, and expiration date.
// • `deleteCookie(cookieName)`: Deletes a cookie based on a cookie
// name.
// • `allCookieList():` returns a list of all stored cookies [[”name , “20”] , ]
// • `hasCookie(cookieName)`: Check whether a cookie exists or not


function setCookie(key, value, expiryDate) {
    document.cookie = `${key}=${value}; expires=${expiryDate}`;
}

function getCookie(key) {
    let allCookies = document.cookie;
    let arr = allCookies.split("; ");
    let value;
    arr.forEach((x) => {
        let [k, v] = x.split("=");
        if (k.trim() == key) {
            value = v;
        }
    });
    return value;
}

let usernameI = document.querySelector("#username");
let ageI = document.querySelector("#age");
let genderM = document.querySelector("#male");
let genderF = document.querySelector("#female");
let colorI = document.querySelector("#color");
let submit = document.querySelector("button[type='submit']");

submit.addEventListener('click', function () {
    let username = usernameI.value;
    let age = ageI.value;
    let color = colorI.value;
    let gender = genderM.checked ? "male" : "female";

    setCookie('username', username, 'Fri, 08 Jan 2027 14:41:12 GMT+0200');
    setCookie('age', age, 'Fri, 08 Jan 2027 14:41:12 GMT+0200');
    setCookie('color', color, 'Fri, 08 Jan 2027 14:41:12 GMT+0200');
    setCookie('gender', gender, 'Fri, 08 Jan 2027 14:41:12 GMT+0200');

    let visitCount = getCookie("visitCount");
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    setCookie("visitCount", visitCount, "Fri, 08 Jan 2027 14:41:12 GMT+0200");

    window.location.href = "profile.html";
});
