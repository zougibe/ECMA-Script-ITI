let nav = document.querySelector(".users");
let postsD = document.querySelector(".posts");
let loading = document.createElement("div");
loading.textContent = "Loading...";
loading.style.display = "none";
document.body.appendChild(loading);

function getUsers() {
    showLoading();
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            hideLoading();
            displayUsers(users);
        })
        .catch(error => {
            hideLoading();
            console.error("Failed to fetch users:", error);
            showError("Failed to fetch users.");
        });
}

getUsers();

function displayUsers(users) {
    users.forEach((user) => {
        let btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.setAttribute("id", user.id);
        nav.append(btn);
        btn.textContent = user.name;
        btn.addEventListener("click", function () {
            getUserPosts(user.id);
        });
    });
}

async function getUserPosts(userId) {
    try {
        showLoading();
        let p = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        let posts = await p.json();
        hideLoading();
        displayPosts(posts);
    } catch (error) {
        hideLoading();
        console.error("Failed to fetch posts:", error);
        showError("Failed to fetch posts.");
    }
}

function displayPosts(posts) {
    postsD.innerHTML = "";

    posts.forEach(function (post) {
        var title = document.createElement("h2");
        title.textContent = post.title;
        var body = document.createElement("p");
        body.textContent = post.body;
        postsD.append(title);
        postsD.append(body);
    });
}

function showLoading() {
    loading.style.display = "block";
}

function hideLoading() {
    loading.style.display = "none";
}

function showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = message;
    errorDiv.style.color = "red";
    document.body.appendChild(errorDiv);
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}