function deleteCookie(key) {
    document.cookie = `${key}= ; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
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

const username = getCookie("username");
const age = getCookie("age");
const gender = getCookie("gender");
const color = getCookie("color");
const visitCount = getCookie("visitCount");

if (!username || !age || !gender || !color || !visitCount) {
    alert("No profile data found. Redirecting to the registration page.");
    location.href = "4-cookies.html";
}

if (username && age && gender && color && visitCount) {
    document.body.innerHTML = `
    <div>
        <h1 style="color:${color};">Welcome, ${username}!</h1>
        <p style="color:${color};">You are ${age} years old.</p>
        <p style="color:${color};">You have visited this site ${visitCount} times.</p>
        <img src="${gender === "male" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&s" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPRQ6LprnPzvvP-_vVO_nhSokwda8CMsnwQ&s"}" alt="Profile Picture" style="width:150px; height:150px;" />
    </div>
    <button id="delete">LogOut</button>
    `;
}

function deleteAcc() {
    deleteCookie("username");
    deleteCookie("age");
    deleteCookie("gender");
    deleteCookie("color");
    deleteCookie("visitCount");
    location.href = "4-cookies.html";
}

let logOut = document.querySelector("#delete");

logOut.addEventListener("click", deleteAcc);
