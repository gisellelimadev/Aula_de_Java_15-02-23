function calcularIMC (){
    event.preventDefault();
    let mPeso = Number (peso.value);
    let mAltura = Number (altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1);
if(mPeso == 0){
    alert("Peso inválido");
    return;
}

if(mAltura == 0){
    alert ("Altura inválida");
    return;
}


    if(imc <= 18.5){
    alert ("Abaixo do Peso: "+ imc);
} else if (imc > 18.5 && imc <= 24.9){
    alert ("Peso médio: " +imc);
} else if (imc > 24.9 && imc < 29.9){
    alert ("Acima do peso:" + imc);
} else if (imc > 29.9 && imc <=34.9){
    alert ("Obesidade 1:" +imc);
} else if (imc > 34.9 && imc <= 39.9) {
    alert ("Obesidade 2:" +imc);
} else {
    alert ("Obesidade 3:" +imc);
}
