const maca ={
    value: 2,
}

const laranja ={
    value: 3,
}

//ira multiplicar o valor (const) pela arr

// maca (2) * arr (item)
function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this -> maçã' , mapComThis(nums,maca));

console.log('this -> laranja' , mapComThis(nums,laranja));