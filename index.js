

/* Entrega 1
 alert ("bienvenidos al bar clandestino");
 alert ("Clave: tenista frances");
 let clave= prompt("ingrese la clave");

 if((clave === "René Lacoste")|| (clave==="rené lacoste"))
 {alert ("ingresaste una clave valida");
 alert ("su reserva es aceptada");
 let nombre= prompt("ingrese su nombre y apellido")
 alert ("l@ esperam@s a partir de las 21 hs" +" " +  nombre)
} 
  else {alert("ingresaste una clave incorrecto. Hasta la proxima semana");}*/

  // Primera entrega del desafio




const destino_nacional = [

  {destino: "Salta",   cantidad: "4 noches", precio: 25000},
  {destino: "Mendoza", cantidad: "5 noches", precio: 30000},
  {destino: "Calafate", cantidad: "3 noches", precio: 90000},
  {destino: "Bariloche", cantidad: "3 noches", precio: 75000}];


const destino_internacional = [
  {destino: "Miami",   cantidad: "7 noches", precio: 250000},
  {destino: "Machu Pichu", cantidad: "4 noches", precio: 180000},
  {destino: "Europa", cantidad: "18 noches", precio: 100000},
  {destino: "Alaska", cantidad: "7 noches", precio: 700000}];


alert("HOLA!!! Bienvenidos a OLBEPO, le ofreceremos la mejor experiencia en viajes" );

let opcionesViajes = prompt ("Eliga el tipo de viaje que desee y le ofreceremos los valore actuales y promociones. Nacional o Internacional")

if (opcionesViajes=== "Nacional"){

  for (const viajes of destino_nacional){
    alert(viajes.destino)
    alert(viajes.precio)
  }
  
  
  //alert("le ofrecemos los siguientes destinos nacionales: \n Salta 4 noches por $25000 \n Mendoza 5 noches por $30000 \n Calafate 3 noches por $90000 \n Bariloche 3 noches por $70000 \n Presione enter para continuar")

}
else if(opcionesViajes==="Internacional"){
  alert("le ofrecemos los siguientes destinos Internacionales: \n Miami 7 noches por $250000 \n Machu Pichu 4 noches por $180000 \n Europa 18 noches por $1000000 \n Alaska 7 noches por $700000 \n Presione enter para continuar" )
  
}




for (const viaje of destino_internacional){
  console.log(viaje.destino)
}


