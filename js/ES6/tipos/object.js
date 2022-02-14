const user = {
    name: 'Guilherme',
    lastName: 'Fernandes Santana de Souza'
};

// Recupera as chaves do OBJ 
console.log(Object.keys(user));

//Recupera os valores das chaves do OBJ
console.log(Object.values(user));

// Recupera um array de arrays contendo [nome_prop, valor_porp]
console.log(Object.entries(user));

// Mergear propriedades de obj
console.log((user, {fullName: `Guilherme Fernandes Sanatana de Souza`}));
console.log((Object.assign({}, user, {fullName: `Guilherme Fernandes Sanatana de Souza`})));
console.log(Object.assign(user, {age: 20}));

// Previne todas as alterações em um objeto
const newOBJ = {foo: 'bar'};
Object.freeze(newOBJ);

newOBJ.foo = 'changes';
delete newOBJ.foo;
newOBJ.bar = 'foo';

console.log(`\nVariável newOBJ após as alterações ${newOBJ}` )