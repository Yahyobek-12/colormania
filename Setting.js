document.getElementById("menu").addEventListener("click", () => {
   document.getElementById("new-window").classList.toggle("new-window-active");
});

document.getElementById("remove").addEventListener("click", () => {
   document.getElementById("new-window").classList.toggle("new-window-active");
});

document.getElementById("setting").addEventListener("click", () => {
   document.getElementById("all-color").classList.toggle("all-color-active");

   setTimeout(() => {
      document.getElementById("all-color").classList.toggle("all-color-active-2");
   }, 500);

});