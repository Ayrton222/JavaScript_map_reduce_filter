//vai filtra apenas os numeros pares
function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 == 0;
    //para retorna impar % 2 !== 0;
}

const meuArray = [1,23,55,67,30,2,4];

console.log(filtraPares(meuArray));

