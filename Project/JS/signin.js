  // Lấy thông tin từ hệ thống 
  let signUsers=JSON.parse(localStorage.getItem("signUsers"))||[]
  console.log("sign-in",signUsers);
  //Lấy thông tin người dùng nhập vào 
  let form=document.getElementById("form")
  const emailRegex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  const errorEmail=document.getElementById("error-email")
  const errorPassword=document.getElementById("error-password")
  form.addEventListener("submit",function(e){
    e.preventDefault()
    let email=document.getElementById("email").value.trim()
    let password=document.getElementById("password").value.trim()
    console.log("signin",email,password);
    //Kiểm tra email
  let isValid= true;
  if(!email){errorEmail.innerText="Không được để trống email";
    isValid=false
  }
  else if(!emailRegex.test(email)){errorEmail.innerText="Email không đúng định dạng ";
    isValid=false
  }
  else{errorEmail.innerText="";
    errorEmail.innerText=""
  }
  //Kiểm tra password
  if(!password){errorPassword.innerText="Không được để trống password";
    isValid=false
  }
  else if(!passwordRegex.test(password)){errorPassword.innerText="Password không đúng định dạng ";
    isValid=false
  }
  else{errorPassword.innerText="";
    errorPassword.innerText=""
  }
  if(!isValid)return
    //so sánh thông tin người dùng với hệ thống 
    let result = signUsers.find((element)=>(element.email===email&&element.password===password));
    if(result){
      //lưu vào localstorage với key mới để sau signout 
      localStorage.setItem("currentUser",JSON.stringify(result))
      alert("Đăng nhập thành công ");
      window.location.href="http://127.0.0.1:5500/Pages/DashBoard.html"
    }
    else{alert("Email hoặc Password không tồn tại ")}
  }
  )
