//Codigo del cuadrado 
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mdien: "+ ladoCuadrado +" cm")

function perimetroCuadrado (lado) { 
    return lado * 4;
};

//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm" );

function areaCuadrado(lado){
    return lado*lado
};
//console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2")

console.groupEnd();


//Codigo del triángulo 
console.group("Triangulo");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; 

console.log(
    "Los lados del tringulo miden: "
    + ladoTriangulo1 +"cm, "
    + ladoTriangulo2 +"cm, "
    + baseTriangulo +"cm"
    );
*/
// console.log("La altura del triangulo es: "+ alturaTriangulo +" cm")

function perimetroTriangulo(l1,l2, base){
    return l1+l2+base;
};

//console.log("El perimetro del triángulo es: "+ perimetroTriangulo + " cm" );

function areaTriangulo(base, altura){
    return (base*altura)/2
};

//console.log("El área del triángulo es: "+ areaTriangulo + " cm^2" );

console.groupEnd();


//Codigo del círculo 
console.group("Círculo");
// const radio = 4;
function diametro(r){ 
    return radio*2;
};
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro  = diametro(radio);
    return diametro* PI; 
}

//console.log("El perimetro del circulo es: "+ perimetroCirculo + " cm" );

function areaCirculo(radio){
    return (radio*radio)*PI;
}

//console.log("El área del circulo es: "+ areaCirculo + " cm" );

console.groupEnd();


//Conectando HTML con JS
function calcularPerimetroCuadrado(){
    const input =  document.getElementById("InputCuadrado"); 
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
};

function calcularAreaCuadrado(){
    const input =  document.getElementById("InputCuadrado"); 
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area)

};
