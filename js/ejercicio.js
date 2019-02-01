'use strict'

/*En una tienda se tienen diferentes tipos de monedas en cantidades infinitas, 
el valor de cada moneda es de 100, 50, 25, 10, 5, 
1. Se requiere determinar cada una de las posibles opciones para entregar el cambio 
con las monedas que se tienen en la tienda.

Debe realizar un programa, en el lenguaje de su elección, que reciba el valor 
que se debe entregar de cambio y que retorne todas las posibles opciones de devolver 
el dinero con las monedas existentes.

Ejemplos:
1. Devuelve 1 si el cambio es 1
2. Devuelve 1, 1, 1, 1 si el cambio es 4
3. Devuelve 5, 1 si el cambio es 6
4. Devuelve 25, 10, 10, 1, 1, 1 si el cambio es 48*/

var pago=parseInt(prompt("ingrese el total del dinero con el que cliente desea pagar"));
var precio=parseInt(prompt("ingrese el valor de la cuenta"));
var cambio=pago-precio;
var monedas=new Array(100, 50, 25, 10, 5, 1);
var devolver=new Array();


calcularCambio();

function calcularCambio(){
	
	var cantidad;
	var total;
	//ciclo para recorrer las monedas disponibles
	for(var i=0;i<=monedas.length;i++){
		total=0
		cantidad=0
		//verifico si el cambio es mayor o igual a las moneda
		if(cambio>=monedas[i]){
			//obtenemos la cantidad de monedas del mismo valor
			cantidad=Math.floor(cambio/monedas[i]);
			//ciclo para recorrer la cantidad de monedas del mismo valor
			for(var j=0;j<cantidad;j++){
				//agregamos el valor de la moneda en la lista devolver
			devolver.push(monedas[i]);
			//sacamos el residuo para poder realizar de nuevo el proceso
			total=total+monedas[i]
			}
			//le restamos la cantidad ingresada a la lista
			cambio=cambio-total;
		}
	}
			
	console.log(devolver);

}

