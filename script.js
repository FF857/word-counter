function calcular() {
  var text = document.getElementById("text-area").value;
  var calculo = text.split(" ").length;

  document.getElementById("resultado").innerHTML =
    "{ Você tem: " + calculo + " palavras escritas }";
}
