

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


/*

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


*/


// Nos preparamos para la entrega del Desafio Incorporar Eventos






const contenedor = document.getElementById("viajes");
const tablaCarrito = document.getElementById("tablaCarrito");



const carrito = [];


const PRODUCTOS = [
    {
        id: 1,
        nombre: "Menoza",
        precio: 30000,
        
        imagen: "https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2020/12/Mendoza.jpg?w=700&ssl=1"
    },
    {
        id: 2,
        nombre: "Ushuaia",
        precio: 50000,
        
        imagen: "https://lavidadeviaje.com/wp-content/uploads/2019/10/lavidadeviaje-ushuaia-tierra-del-fuego-portada-3870.jpg"
    },
    {
        id: 3,
        nombre: "Salta",
        precio: 25000,
        
        imagen: "https://media.staticontent.com/media/pictures/85fc1916-3476-47c3-95b8-5172feb08ab4/1120x532?op=TRUNCATE&enlarge=false&gravity=sm&quality=80&dpr=2"
    }
];



const getCard = (item) => {
  return (`
  <div class="card" style="width: 18rem;">
  <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
  <div class="card-body">
    <h5 class="card-title">${item.nombre}</h5>
    <p class="card-text">$${item.precio}</p>
    <a href="#" onclick=agregarAlCarrito(${item.id}) class="btn btn-primary">agregar</a>
  </div>
</div>
  `);
}

const getRow = (item) =>{
  return(
    `
    <tr>
      <th scope="row">${item.id}</th>
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>${item.precio}</td>
      <td><img style="width:20px" src="${item.imagen}" alt="imagen"</td>

    </tr>
    
    `

  )
}

const cargarProductos= (datos, nodo, esTabla) =>{
  let acumulador = "";
  datos.forEach((el)=>{
    acumulador += esTabla ? getRow(el) : getCard(el);
  })
  nodo.innerHTML = acumulador;
  

}


const agregarAlCarrito = (id) =>{
  const seleccion = PRODUCTOS.find(item => item.id===id);
  const busqueda = carrito.findIndex(el => el.id === id);
  console.log(busqueda)
  if(busqueda === -1) {
    alert("agregaste un viaje a:  " + seleccion.nombre)
    carrito.push({ 
      id: seleccion.id,
      nombre: seleccion.nombre,
      precio: seleccion.precio,
      cantidad:1,
      imagen: seleccion.imagen,
    })


  } else{
    carrito[busqueda].cantidad = carrito[busqueda].cantidad+ 1
  }
 
  cargarProductos(carrito, tablaCarrito, true);
}

cargarProductos(PRODUCTOS, contenedor, false)




