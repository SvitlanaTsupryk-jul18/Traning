(function() {
  // invocation

  burger();

  ///burger-menu

  function burger() {
    if (window.innerWidth > 576) return;

    let header = document.querySelector(".nav-left");
    let openbtn = document.createElement("button");
    openbtn.classList.add("open-btn");
    openbtn.innerHTML = "MENU";
    header.append(openbtn);

    let menu = document.querySelector(".nav-menu");
    let closebtn = document.createElement("button");
    closebtn.classList.add("close-btn");
    closebtn.innerHTML = "&times";
    menu.prepend(closebtn);

    openbtn.addEventListener("click", show);
    closebtn.addEventListener("click", hide);

    function show() {
      this.classList.add("hide");
      menu.style.transform = "translate(0)";
    }

    function hide() {
      openbtn.classList.remove("hide");
      menu.style.transform = "translate(500%)";
    }
  }
})();
