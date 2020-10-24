var modal = document.getElementById('MH');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validate(){
    var username= $(".form-row").val();
    
    if ( username === "" && password === ""){
    
        alert("Enter your inputs please!")   
    }
     else if ( password.length < 8){
         alert("Your Password is too short!")
     }
     
       else { (alert("welcome !" ))
    }
    document.getElementById("form-row").value = '' 
}

function myFunction() {
    document.getElementById("username").value !== document.getElementById("psw").value;
    document.getElementById("psw").value = '' 
}