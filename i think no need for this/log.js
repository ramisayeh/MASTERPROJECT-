//ya rami page hedhi lil login ou sign in moch ken login ken fhemtich ay code khali commnt
var modal = document.getElementById('MH');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validate(){
    var username= $("#username").val();
    
    var password = $("#psw").val();
    if ( username === "" && password === ""){
    
        alert("Enter your inputs please!")   
    }
     else if ( password.length < 8){
         alert("Your Password is too short!")
     }
     else if (username === "melek houidi" && password !== "melekmelek123"){
        alert("Wrong password!")
     }
     else if ( username !== "melek houidi" || password !== "melekmelek123"){
     alert("Wrong Inputs!")
     }

    else {window.location.replace("file:///C:/Users/RBK/Desktop/RBK-project/index.html");
     
        (alert("welcome melek!" ))
    }
    document.getElementById("psw").value = '' 
    document.getElementById("username").value = '' 
}

function myFunction() {
    document.getElementById("username").value !== document.getElementById("psw").value;
    document.getElementById("psw").value = '' 
}

//code for sign try dont touch it rami hata nzid nfixih 

$(document).ready(function(){
    $('.Sub').on('click',function(e){
        e.preventDefault()
        alert("we received your message")
    })
})

function check(){
    var username= $("#fname").val();
    
    var password = $("#lname").val();
    if ( username === "" && password === ""){
    
        alert("Enter your inputs please!")   
    }


    else { alert("Thanks for your participation!" )}
}

$(document).ready(function(){
    $('.Post').on('click',function(){
        alert("we received your message")
    })
})