const btnProd = document.querySelector('#button_product');
const menu = document.querySelector("#myDropdown")
var togle = true;
btnProd.addEventListener('click', function(){
    if(togle){
        menu.classList.remove("fade")
    }  else{
        menu.classList.add("fade")
    }
    togle = !togle;        
})
// for contact page sublime //
// $(document).ready(function(){
//     $('.Submit').on('click',function(e){
//         e.preventDefault()
//         alert("we received your message")
//     })
// })

const model=document.querySelector('#model');
const btn=document.querySelector('.btn');

btn.onclick = function() {
    model.style.display="block";
}


var myString = `<form  id="login"class="modal-content animate" action="test.html" method="post">
<div class="imgcontainer">
  <span onclick="document.getElementById('login').style.display='none';window.location.reload()" class="close" title="Close Modal">&times;</span>
  <img src="gam.png" alt="Avatar" class="avatar">
</div>

<div class="container">
  <label for="uname"><b>Username</b></label>
  <input id="username" type="text" placeholder="Enter Username" name="uname" required>

  <label for="psw"><b>Password</b></label>
  <input id="psw" type="password" placeholder="Enter Password" name="psw" required>
    
  <button type="submit">Login</button>
  <label>
    <input type="checkbox" checked="checked" name="remember"> Remember me
  </label>
</div>

<div class="container" style="background-color:#f1f1f1">
  <button type="button" onclick=" document.getElementById('login').style.display='none' ;window.location.reload()" class="cancelbtn">Cancel</button>
  <span class="psw">Register <a href="file:///C:/Users/RBK/Desktop/MASTERPROJECT-/sign%20in.html">Here</a></span>
</div>
</form>`
$("#model").append(myString)

var modal = document.getElementById('close');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

