// Lấy dữ liệu từ localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

//Render
function renderTable(userList) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  userList.forEach((user, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-index", index); // Gắn index để xử lý sau
    tr.innerHTML = `
      <td>${user.code}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.birthday}</td>
      <td>
        <span class="${user.status === "Active" ? "stt-active" : "stt-deactivate"}">
          ● ${user.status}

        </span>
      </td>
      <td>
      <button><img src="/image/delete icon.png" class="delete" alt=""></button>
      <button><img src="/image/edit icon.png" class="edit" alt=""></button>
       </td>
    `;

    tbody.appendChild(tr);
  });
}

// 3. Tìm kiếm theo username (không phân trang)
document.querySelector("#search-box button").addEventListener("click", function () {
  const keyword = document.querySelector("#search-box input").value.trim().toLowerCase();
  const result = users.filter(u => u.username.toLowerCase().includes(keyword));
  renderTable(result);
});

// 4. Xử lý xóa và chỉnh sửa user
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const row = e.target.closest("tr");
    const index = Number(row.getAttribute("data-index"));

    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderTable(users);
  }

  if (e.target.classList.contains("edit")) {
    const row = e.target.closest("tr");
    const index = Number(row.getAttribute("data-index"));

    localStorage.setItem("editEmail", users[index].email);
    window.location.href = "http://127.0.0.1:5500/Pages/Edit%20User.html";
  }
});
//signOut
let signOutBtn=document.getElementById("signout-btn")
signOutBtn.addEventListener("click",function(){
  localStorage.removeItem("currentUser");
  window.location.href = "http://127.0.0.1:5500/Pages/Signin.html";
})

renderTable(users);
