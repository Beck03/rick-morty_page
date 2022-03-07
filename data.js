



function ordenarAZ ( resultados){

return  resultados.sort(function(a , b){

 if(a > b){
    return 1;
 }
 if(a < b){
   return -1;
}
return 0;
 }
 );
}


function filtro ( datos , valorInput){

return    datos.filter(  dato =>{ 
   return  dato.name.toLowerCase().includes(valorInput) ; }

)}


export{ ordenarAZ , filtro };









