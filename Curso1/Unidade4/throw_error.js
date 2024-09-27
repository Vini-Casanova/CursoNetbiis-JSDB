function somarValorer(val1, val2){
    if (typeof val1 !== 'number' || typeof val2 !== 'number'){
        throw new Error('Valores devem ser numéricos.');
    }
    return val1 + val2;
}

function dividirValores(val1, val2) {
    if (typeof val1 !== 'number' || typeof val2 !== 'number'){
        throw new Error('Valores devem ser numéricos.');
    }
    if (val2 === 0) {
        throw new Error('Não é possível dividir por zero.');
    }
    return val1 / val2;
}

try {
    console.log(somarValorer(5, "8")); // 8
} catch (error) {
    console.error(error.message);
    console.log(error.stack);
    console.log(error.name);
}