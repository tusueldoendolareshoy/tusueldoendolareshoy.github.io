document.addEventListener("DOMContentLoaded", () => {

  async function anio() {
    const actual = document.getElementById("actual");
    const fecha = new Date().getFullYear();
    actual.textContent = fecha;
  }

  anio();
});


const apiUrl = "https://api.bluelytics.com.ar/v2/latest";
const numero1Input = document.getElementById("numero1");
const numero2Input = document.getElementById("numero2");
const dolarCompra = document.getElementById("dolarCompra");
const dolarVenta = document.getElementById("dolarVenta");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    numero2Input.value = data.blue.value_sell;
    dolarCompra.textContent = data.blue.value_buy;
    dolarVenta.textContent = data.blue.value_sell;
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });

document.getElementById("calcular").addEventListener("click", function () {
  var numero1 = parseFloat(numero1Input.value);
  var numero2 = parseFloat(numero2Input.value);

  if (numero1 < 0) {
    alert("El número no puede ser negativo");
  } else if (isNaN(numero1)) {
    alert("El casillero no puede estar vacío");
  } else {
    var producto = (numero1 / numero2).toFixed(2);
    document.getElementById("producto").value = producto;
  }
});
