//accordion

let acc = document.getElementsByClassName("accordion");
let panel;

for (let i=0; i<acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    panel = this.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight? 
    	null: (panel.scrollHeight + "px");
  });
}

//window onload
window.onload = function() {
  demo();
  twitter();
  siteVisitor();
};

//search engine 

function demo() {
    document.getElementById("gsc-i-id1").setAttribute("placeholder", "Penelusuran");
}

//visitor counter(old)

// function siteVisitor() {
//   var counterData = document.getElementById("visitorCounter");
//   counterData.innerHTML = '<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/744451/t/5"><\/script>' + '<p>Anda pengunjung ke-</p>' + '<a href="https://www.freevisitorcounters.com/en/home/stats/id/744451" target="_blank"><img src="https://www.freevisitorcounters.com/en/counter/render/744451/t/5" border="0" class="counterimg"></a>';
// }

//visitor counter(new)
function siteVisitor() {
  let counterData = document.getElementById("visitorCounter");
  counterData.innerHTML = '<p>Anda pengunjung ke-</p>'+'<a href="https://www.hitwebcounter.com" target="_blank">' + '<img src="https://hitwebcounter.com/counter/counter.php?page=7817684&style=0006&nbdigits=5&type=ip&initCount=0" title="Free Counter" Alt="web counter" border="0" /></a>';
}

//twitter feed expansion

function twitter(){
  document.querySelectorAll("fieldset div.rowElem")[1].style.height = "80%";
}