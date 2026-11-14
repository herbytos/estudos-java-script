const visualizacoes = [450, 500, 12000, 25000, 100, 40000]

const maioresvisu = getMaior(visualizacoes)



console.log(maioresvisu)


function getMaior(values) {
    maior = 10000;

    listamaior = [];

    for (value of values){
        if (value >= maior){
            listamaior.push(value);
        }



    }

    return 'Os videos com maiores visualizações foram esses: ' +listamaior.join(' ')

}