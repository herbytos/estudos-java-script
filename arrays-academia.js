const pesos = [20, 30, 40, 10];

const totalcargas = getSum(pesos);

const mediacarga = getMedia(pesos);

const maiorcarga = getMaior(pesos)



console.log(totalcargas);
console.log(mediacarga);
console.log(maiorcarga);


function getSum(values) {
    let sum = 0;
    for (const value of values){
        sum += value;
    }

    return 'O total de peso que você levantou é: '+ sum
}



function getMaior(values) {
    if ( values.length === 0) {
        return 0;
    }


    let max = values[0];


    for (const value of values){
        if (value > max){
            max = value;
        }



    }

     return 'O maior peso que você levantou foi: '+ max
}




function getMedia(values) {
    let sum = 0;
    for (const value of values){
        sum += value;
    }

    return 'A média de carga que você levantou foi: '+ sum / values.length

  
}


