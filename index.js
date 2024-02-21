

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "admin" && password == "admin") {
        
      
        alert("Success: Successfully logged in. Welcome back, Sir!");
        window.location.href = "student.html";
        const alertElement = document.querySelector("#alert");
    } 
    else {
        alert("Error: Invalid username or password");
        document.querySelector("#form").reset();
        const alertElement = document.querySelector("#alert");
    }

}



