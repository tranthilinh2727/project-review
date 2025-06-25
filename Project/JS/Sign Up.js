let signUsers = JSON.parse(localStorage.getItem("signUsers")) || [];
//lấy để thêm , local chỉ ghi đè , không thêm 
// Truy xuất form và các thẻ hiển thị lỗi
let form = document.getElementById("form");
let errorEmail = document.querySelector("#error-email");
let errorPassword = document.querySelector("#error-password");
let errorUserName = document.querySelector("#error-username");
// kiểm dạng email
function validEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
//kiểm tra mật khẩu 
function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
// Gắn sự kiện form
form.onsubmit = function (e) {
  e.preventDefault();
  if (validateData(form)) {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      email: form.email.value,
      password: form.password.value,
      username: form.username.value
    };
    signUsers.push(newUser);
    localStorage.setItem("signUsers", JSON.stringify(signUsers));
    alert("Bạn đã đăng ký thành công!\n Xin mời đăng nhập ");
    window.location.href = "http://127.0.0.1:5500/Pages/Signin.html";
  }
};

function validateData(form) {
  let check = true;
  // Kiểm tra Email
  if (form.email.value === "") {
    errorEmail.innerText = "Không được để trống email";
    check = false;
  } else if (!validEmail(form.email.value)) {
    errorEmail.innerText = "Email không hợp lệ";
    check = false;
  } else {
    errorEmail.innerText = "";
  }
  // Kiểm tra Password
  if (form.password.value === "") {
    errorPassword.innerText = "Không được để trống password";
    check = false;
  } else if (!validPassword(form.password.value)) {
    errorPassword.innerText = "Password không hợp lệ";
    check = false;
  } else {
    errorPassword.innerText = "";
  }
  // Kiểm tra Username
  if (form.username.value === "") {
    errorUserName.innerText = "Không được để trống user name";
    check = false;
  } else {
    errorUserName.innerText = "";
  }
  return check;
}
