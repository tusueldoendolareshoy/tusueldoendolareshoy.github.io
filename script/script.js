document.getElementById("calcular").addEventListener("click", function() {

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var producto = (numero1 / numero2).toFixed(2);

    document.getElementById("producto").value = producto;
});