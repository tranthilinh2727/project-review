//Truy xuất nút và input
const userCode=document.getElementById("user-code")
const userNameInput = document.getElementById("user-name")
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const roleSelect = document.getElementById("role");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const addBtn = document.getElementById("add-btn");
const backBtn = document.getElementById("back-btn");
const active=document.getElementById("active")
const deactive=document.getElementById("deactive")
//Lấy users từ local
let users=JSON.parse(localStorage.getItem("users"))||[]
// Hộp radio 
function status(){
    if (active.checked===true){return "Active"}
    if(deactive.checked===true){return "Deactive"}
    return;
}
//code duy nhất
function generateCode(){
   return "USER"+ Date.now()
}
userCode.value=generateCode()
//email regex
const emailRegex=/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//Add
addBtn.addEventListener("click",function(){
    const username=userNameInput.value.trim();
    const email=emailInput.value.trim();
    const password=passwordInput.value.trim();
    const role=roleSelect.value.trim();
    const birthday=dateInput.value;
    const userStatus= status();
    const description = descriptionInput.value.trim();
    const code = generateCode();
    let isValid=true;
    //Họ tên 
    if(!username){
        userNameInput.style.border="1px solid red"
        alert("Không được để trống thông tin ");
        isValid=false
    }
    //email
    if(!email){
        emailInput.style.border="1px solid red"
        alert("Không được để trống thông tin ");
        isValid=false
    }
    else if (!emailRegex.test(email)){
        emailInput.style.border="1px solid red"
        alert("Email không đúng định dạng  ");
        isValid=false
    } 
    //Mật khẩu trên 8 chữ số 
    if(!password||password.length<8){
        passwordInput.style.border="1px solid red"
        alert("Không được để mật khẩu trống , phải là dãy trên 8 chữ số "); 
        isValid=false
    }
    if(!isValid){alert("Vui lòng nhập thông tin hợp lệ")
        return
    }
    //Lưu vào local 
    let newUser = { code,
    username,
    email,
    password,
    role,
    birthday,
    status: userStatus,
    description,}
     users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Thêm người dùng thành công!");
  window.location.href = "DashBoard.html";

})
// 4. Nút quay lại
backBtn.addEventListener("click", function () {
  window.location.href = "DashBoard.html";
});
