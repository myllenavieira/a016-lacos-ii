const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

  for(let i in array){
    //o i aqui é uma string
    let gols = `Jogador ${Number(i)+1}: `
    //lê os arrays completos e nomeia o número do sorteio
    for(let j of array[i]){
      //o j já vai trazer o valor 
      gols += `${[j]} `;
      //lê os números dentro do array que foi lido antes
    }
    console.log(gols);
  }
