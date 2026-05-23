
/*
CALCULO DE NOTAS 
 */

const nota1 = 5.3;
const nota2 = 4.1;
const nota3 = 4.5;

const media = (nota1 + nota2 + nota3 ) /3;

console.log('------------------------------');
console.log(`Média: ${media.toFixed(2)}`)
console.log('------------------------------');


if(media > 7) {
    console.log('Passou de Semestre');
}else if(media >= 5){
    console.log('Ficou de Recuperação');
}else {
    console.log('Reprovado!');
}

