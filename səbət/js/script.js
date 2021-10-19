let icon = document.getElementById("icon");
let cartco = document.getElementById("cartco");

icon.addEventListener("click", () => {
    cartco.classList.toggle("plus");
})