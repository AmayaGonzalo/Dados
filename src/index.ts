rotulo.innerHTML = "Ingrese la cantidad de dados";
let probabilidad: number;
let btnCalcular = document.getElementById("btnCalcular");
let numDado: number;
let contador: number;
let aux: number = 1;

btnCalcular.addEventListener("click", () => {
  numDado = Number(dato.value);
  for (contador = 1; contador <= numDado; contador++) {
    aux = aux * 6;
  }
  probabilidad = 1 / aux;

  if (numDado === 1) {
    console.log(
      "La probabilidad de sacar un 6 con " +
        numDado +
        " dado, es de: " +
        probabilidad
    ); //dados en singular
  } else
    console.log(
      "La probabilidad de sacar un 6 con " +
        numDado +
        " dados, es de: " +
        probabilidad
    ); //dados en plural
});
