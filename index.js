//1. For que sume 1 unidad a los numeros pares del 1 al 100
/*
for (var inicial=1;inicial<=100;inicial++){
    if (inicial%2==0){
        console.log(inicial+1);
    }
}
*/

//2. ciclo que a todos los numeros divisibles por 5 los imprima en la consola

// for (var inicial=0;inicial<=100;inicial++){

//     if (inicial%5==0){
//         console.log (inicial);
//     }

// }

//3. Console.log aquellos numeros que son divisibles por 6
/*
for (var inicial=0;inicial<=100;inicial++){
    
    if (inicial%6==0){
        console.log (inicial)
    }
}
*/

//4. El profe nacio en el año 1998, mientras el año no sea 1998, decir, aun no ha nacido el profe
/*
var year = 1900;

function fecha (year) {

    while (year != 1998){
        console.log('aun no ha nacido el profe')
    
    

    if (year == 2022){
        console.log ('vamos a detener el counter')
        break;
    }
    year+=1;
    }
    
}

fecha (year)
*/


//5. counter 1 al 100 y una variable que se llame bandera iniciará como false. en el momento que el numero 60 aparezca, 
//bandera se vuelve true
/*
var bandera=false;

for (var counter=0; counter<=100;counter++){
    console.log('el counter es: '+counter)
    if (counter == 60){
        bandera=true;
    }
    if (bandera==true){
        console.log('rompiendo el ciclo')
        break;
    }
}
*/

//string-->'texto' o "texto"

//tipo de dato arreglo

/*
var tren = [135,'felipe',['sem','isaac','laura']];

console.log (tren[2][2])
*/
//1. arreglo que se llame tren, que solo tenga vagones llenos de un tipo de fruta

/*
var tren = ['sandias','papaya','fresas']

console.log(tren[1])
*/

//2 un arreglo que se llame tren, que tenga 5 numeros
//primero -->0
/*
var tren = [520,5,98,64,2004]

for (var i=0; i<tren.length; i++){
    
    console.log(tren[i])

}

*/

//3. un tren que tenga frutas y numeros, y un length de 6

var tren = [5,15,35,'papaya','naranja','pinas']

for (var i=0;i<tren.length;i++){

    if (typeof(tren[i])=='number'){
        console.log (tren[i]+' es un numero')
    }
    if (typeof(tren[i])=='string'){
        console.log (tren[i]+' es un texto')
    }

}







