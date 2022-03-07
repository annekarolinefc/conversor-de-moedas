

var dolar = prompt("Insira o valor em dólar que você deseja converter: ")
var taxaDolar = 5.05;

var dolarHoje = parseFloat(dolar)*taxaDolar;
var valorDolarHoje = dolarHoje.toFixed(2);
alert("O valor em reais correspondente a "+ dolar + " dólares é " + valorDolarHoje + " reais.")