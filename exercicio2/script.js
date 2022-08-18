let numero = +prompt("Insira o número que deseja ver a tabuada.");
const tabuada = [1,2,3,4,5,6,7,8,9,10];

for (let i in tabuada) {
        // console.log(Number(i)*numeros[Number(i)]);
        console.log(`${numero} * ${Number(i)+1} = ${tabuada[i]*numero}`);
}
