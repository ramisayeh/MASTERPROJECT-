const btnProd = document.querySelector('#button_product');
const menu = document.querySelector("#myDropdown")
var togle = true;
btnProd.addEventListener('click', function(){
    if(togle){
        menu.classList.remove("fade");
    }  else{
        menu.classList.add("fade");
    }
    togle = !togle;        
})