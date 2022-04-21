function mapSemThis(arr){
     return arr.map(function(item){
        return item * 2
    })
}

const nums = [2,4,6,8,10];

console.log(mapSemThis(nums));

//Map sem this

console.log(nums);

//ele nao mexe no array original, ele gera outro array