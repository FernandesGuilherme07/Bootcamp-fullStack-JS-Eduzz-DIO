const myNumber = 12.0446;
const myNumberString = '12.458'

// Transformar  o número para string
const NumberAsString = myNumber.toString();
console.log(`\nNúmero tranformado em string ${typeof(NumberAsString)}`);

//Retorna número com N numeros de casas decimais

const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais: ${fixedTwoDecimals}`);

const fixedOneDecimals = myNumber.toFixed(1);
console.log(`\nNúmero com uma casas decimais: ${fixedOneDecimals}`);

// transforma uma string em um float 
console.log(`\nString parseada para float ${parseFloat(myNumberString)}`);

// Transforma uma string em init 
console.log(`\nString parseada para int ${parseInt(myNumberString)}`);