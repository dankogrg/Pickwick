const floater = document.getElementById("ati");
floater.addEventListener("click", scrollToTop)
floater.style.backgroundColor = "green";
function scrollToTop(e){
    ​if (document.body.scrollTop > 20 ​|| document.documentElement.scrollTop > 20) {
        e.target.style.display = "block";
      } else {
        e.target.style.display = "none";
      }
}

