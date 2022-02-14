// Variavel de escopo global
if(true){

    // n1 está visivel globalmente e pode ter seu valor alterado
    var n1 = 10;
    n1 = 20;
}
console.log(n1)

// Vrariavel de escopo de bloco 
if(true){

    // n2 so está visivel dentro do bloco e pode ter seu valor alterado
    let n2 = 10;
    n2 = 20;
    console.log(n2)
}

// constante
if(true){

    // n3 so está visivel dentro do bloco e não pode ter seu valor alterado por ser uma constante
    const n3 = 10;
    //n3 = 20;
    console.log(n3)
}


