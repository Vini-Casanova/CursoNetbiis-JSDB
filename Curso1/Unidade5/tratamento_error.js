let numero = null
try {
    // Type Error
    console.log(numero.toUpperCase());

    // Reference Error
    console.log(teste)

    //Syntax error
    //console.log("teste);
} catch (error) {
    console.log("Error: " + error.getMessage());
}finally{
    console.log("Finally block executed");
}