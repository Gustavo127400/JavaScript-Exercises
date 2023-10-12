//      Leia três valores e verifique se formam um triângulo
/* Condições para formar um triângulo.
a < b + c
b < a + c
c < b + a

T. equilátero: T. equilátero possui todos os lados congruentes.
T. isósceles: T. isósceles possui pelo menos dois lados congruentes.
T. escaleno; T. escaleno possui todos os seus lados diferentes
*/
let l1 = Number(prompt("Qual é o valor do lado 1? "));
let l2 = Number(prompt("Qual é o valor do lado 2? "));
let l3 = Number(prompt("Qual é o valor do lado 3? "));

if(l3<l1+l2 && l1+l3>l2 )
{
    if(l1 === l2 && l1 === l3)
    {
        console.log("Triângulo equilátero")
    }
      else if(l1 === l2 || l1 === l3 || l3 === l2)
        {
            console.log("Triângulo isósceles")
        }
        else{
            console.log("Triângulo escaleno")
        }
    }
    

else{
    console.log("Infelizmente não forma um triângulo")
}