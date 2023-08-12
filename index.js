
const userListEl = document.querySelector(".user-list");

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json()
  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

function showUserPosts(id) {
    localStorage.setItem("id",id)
    window.location.href=`${window.location.origin}/user.html`
    console.log(id)
}

function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
   <div class="user-card__container">
     <h3>${user.name}</h3>
       <p><b>Email:</b> ${user.email}</p>
       <p><b>Phone:</b> ${user.phone}</p>
       <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
   </div>
   </div>`;
}

main()
