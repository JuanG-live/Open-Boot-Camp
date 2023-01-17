const botonInfo = document.querySelector("button")

botonInfo.addEventListener("click", () => alert("click en el botón"))

$("button").click(function() {
    console.log("hola, estoy utilizando jQuery")
})