
var div = document.getElementById('mySidenav');
var sideMenu = document.getElementById('btnMenu');

function showHide(e){
    e.preventDefault();
    e.stopPropagation();
    if(div.style.display == "none"){
    div.style.display = "block";
    } else if(div.style.display == "block"){
    div.style.display = "none";
    div.style.transition = "all 350ms ease";
    }
}

sideMenu.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){
    //obtiendo informacion del DOM para  
    var clic = e.target;
    console.log(clic);
    if(div.style.display == "block" && clic != div){
        div.style.display = "none";
        div.style.transition = "all 350ms ease";
    }
}, false);


