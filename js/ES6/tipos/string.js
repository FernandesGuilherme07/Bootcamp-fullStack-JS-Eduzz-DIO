//Retorna o tamanho de uma string
const textSize = 'Texto';
console.log(`Quantidade de letras: ${textSize.length}`);

//Retorna um array quebrando a String por um Delimitador 
const splitText = 'texto';
console.log(`\narray com as posições separadas pelo delimitador : ${splitText.split('x')}`);

// Busca por um valor e substitui por outro
const replaceText =  'texto'.replace('texto','txeT');
console.log(`\nSubstituição de valor: ${replaceText}`);

//retorna a 'fatia' de um valor 
const lastChar = 'Texto'.slice( -1);
console.log('\nUltima letra da estring', lastChar)

const fristChar = 'Texto'.slice(0, -4);
console.log('\nPrimeira letra da estring', fristChar)

