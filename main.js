var icon = document.getElementById('icon');
var logo = document.getElementById('site-logo');
icon.onclick = function(){
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    icon.className = "fa-solid fa-sun";
    logo.src = "img/logo-light.png";
  }
  else{
    icon.className = "fa-solid fa-moon";
    logo.src = "img/logo-dark.png";
  }
}
