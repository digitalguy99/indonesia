//accordion

var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }  
    });
  }

//window onload
window.onload = function() {
  demo();
  siteVisitor();
  twitter();
};

//search engine 

function demo() {
    document.getElementById("gsc-i-id1").setAttribute("placeholder", "Penelusuran");
}

//visitor counter

function siteVisitor() {
  var counterData = document.getElementById("visitorCounter");
  counterData.innerHTML = '<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/744451/t/5"><\/script>' + '<p>Anda pengunjung ke-</p>' + '<a href="https://www.freevisitorcounters.com/en/home/stats/id/744451" target="_blank"><img src="https://www.freevisitorcounters.com/en/counter/render/744451/t/5" border="0" class="counterimg"></a>';
}

function twitter(){
  document.querySelectorAll("fieldset div.rowElem")[1].style.height = "80%";
}
