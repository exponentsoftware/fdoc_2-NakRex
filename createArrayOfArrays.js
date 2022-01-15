function createArrayOfArrays(countries) {
    let newArr = [];
    for (let i = 0; i < countries.length; i++) {
        newArr.push([countries[i].charAt(0).toUpperCase()+countries[i].slice(1).toLowerCase(), countries[i].slice(0, 3).toUpperCase(), countries[i].length]);
    }
    return newArr;
}



const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]
console.log(createArrayOfArrays(countries));

  
