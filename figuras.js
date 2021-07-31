//Codigo del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mdien: "+ ladoCuadrado +" cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm" );

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2")

console.groupEnd();


//Codigo del triángulo 
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del tringulo miden: "
    + ladoTriangulo1 +"cm, "
    + ladoTriangulo2 +"cm, "
    + baseTriangulo +"cm"
    );

console.log("La altura del triangulo es: "+ alturaTriangulo +" cm")

const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triángulo es: "+ perimetroTriangulo + " cm" );

const areaTriangulo= (baseTriangulo*alturaTriangulo)/2
console.log("El área del triángulo es: "+ areaTriangulo + " cm^2" );

console.groupEnd();


//Codigo del círculo 
console.group("Círculo");
const radio = 4;
const diametro = radio*2;
const PI = Math.PI;

const perimetroCirculo= diametro*PI;
console.log("El perimetro del circulo es: "+ perimetroCirculo + " cm" );

const areaCirculo= (radio*radio)*PI;
console.log("El área del circulo es: "+ areaCirculo + " cm" );

console.groupEnd();
