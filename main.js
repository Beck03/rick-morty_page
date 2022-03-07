import { ordenarAZ , filtro } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

/*La siguiente función va a tomar el dato input y guardarlo*/
const valorInput = document.getElementById("buscar"); //tomar el valor que ingresa el usuario en el buscador
const botonLupa = document.getElementById("lupa"); //Tomar el botón de la lupa 
const valores = data.results; //Variable que toma todos los valores de la data
const busqueda = document.getElementById("popu"); //Parrafo que aparece debajo del buscador que le muestra al usuario los resultados de lo que busco en el buscador (Ejemplo: Resultados de la busqueda de Morty)
const posicion = document.getElementById("all"); //(experimento)Nombre que esta debajo del pasaporte
const modales = document.getElementById("modales");
//const ordenar = [];




window.addEventListener("DOMContentLoaded", populares);
function populares(){
  const todosLosNombres = valores.map(function({name}){
    return name;
    })
  const todasLasImagenes = valores.map(function({image}){
    return image;
      })
  const todasLasIds = valores.map(function({id}){
    return id;
    })
  const todasLasEspecies = valores.map(function({species}){
    return species;
      })
  const todosLosGeneros = valores.map(function({gender}){
    return gender;
        })
  const todosLosOrigenes = valores.map(function({origin}){
    return origin.name;
        });
  const todosLosEpisodios = valores.map(function({episode}){
          return episode.length;
              });
posicion.innerHTML = ""; 
for(let i = 0; i<10;i++){
posicion.innerHTML += `<div class= "conte" >
                        <div class = "frente"> 
                        <a href="#${todasLasIds[i]}"><img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" > </a>
                        <p  class="nombres" >${todosLosNombres[i]}</p>
                        </div>
                        <div class= "atras">
                        <a href="#${todasLasIds[i]}"><img src="${todasLasImagenes[i]}" alt="Pasaporte" class="foto"></a>
                        <p id="nombre" class="nombres">${todosLosNombres[i]}</p>
                        </div>
                        </div>
                      `         
                      modales.innerHTML+= ` <div id="${todasLasIds[i]}" class="contmodal">
                      <div id="modal" class="modal">
                      <img src="${todasLasImagenes[i]}" alt="Pasaporte" class="fotomodal">
                      <a href="#vacio"> <img src="rickandmorty/cerrar.png" alt="Cerrar" class="cerrar" ></a>
                      <div class="datos">
                      <p class="moletras">Nombre: ${todosLosNombres[i]}.</p>
                      <p class="moletras">Especie: ${todasLasEspecies[i]}.</p>
                      <p class="moletras">Género:${todosLosGeneros[i]}. </p>
                      <p class="moletras">Origen: ${todosLosOrigenes[i]}.</p>
                      <p class="moletras">Capítulos en los que aparece:${todosLosEpisodios[i]}.</p> <br>
                      <a href = "#vacio"><button class="mobile" id = "cerrar">Cerrar</button></a>
                      </div> `  
                               
                    }
}


botonLupa.addEventListener("click", buscador);

     function buscador()// Al dar click a la lupa, 
        {                            
          posicion.innerHTML = "";  //Limpia la busqueda anterior e inicializar la variable                          //te ejecuta la siguiente funcion
          let buscar = valorInput.value.toLowerCase();
          busqueda.innerHTML= "";
          let contador = [];
         
             if(valorInput.value != ""){ 
               
            
              let resultadosBusqueda = filtro(valores , buscar)
             
              ordenarAZ(resultadosBusqueda);
             
              if(resultadosBusqueda != 0){
              
                for (let personaje of resultadosBusqueda){
                  contador.push(personaje.name);
                
                
                  
                 

                 
                      busqueda.innerHTML ="Se encontraron " + contador.length + " resultados para " + "´" + valorInput.value + "´"; 
                      posicion.innerHTML +=  `<div class= "conte" >
                        <div class = "frente"> 
                        <a href="#${personaje.id}"><img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" ></a>
                        <p class="nombres"  >${personaje.name}</p>
                        </div>
                        <div class= "atras">
                        <a href="#${personaje.id}"><img src="${personaje.image}" alt="Pasaporte" class="foto"></a>
                        <p id="nombre" class="nombres">${personaje.name}</p>
                        </div>
                        </div>

                       
                      `   
                      modales.innerHTML+= ` <div id="${personaje.id}" class="contmodal">
                      <div id="modal" class="modal">
                      <img src="${personaje.image}" alt="Pasaporte" class="fotomodal">
                      <a href="#vacio"> <img src="rickandmorty/cerrar.png" alt="Cerrar" class="cerrar" ></a>
                      <div class="datos">
                      <p class="moletras">Nombre: ${personaje.name}.</p>
                      <p class="moletras">Especie: ${personaje.species}.</p>
                      <p class="moletras">Género: ${personaje.gender}.</p>
                      <p class="moletras">Origen: ${personaje.origin.name}.</p>
                      <p class="moletras">Capítulos en los que aparece: ${personaje.episode.length}.</p>
                      <a href = "#vacio"><button class="mobile" id = "cerrar">Cerrar</button></a>
                      </div> `
                                     
               }  } else{
                 busqueda.innerHTML = "No se encontaron resultados para " + buscar}
                        }else{
                          busqueda.innerHTML = "No se encontaron resultados para tu búsqueda, intenta con Rick."}}
                                            
//-------------------MODULARIZACIÓN Y FUNCIONES PURAS-----------------//




 
