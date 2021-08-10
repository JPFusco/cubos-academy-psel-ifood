function solucao(obras) {
	let maiorValor = 0;
    let nomeMaiorValor;
    for (const obra of obras){
        if (obra.valor > maiorValor){
            maiorValor = obra.valor;
            nomeMaiorValor = obra.nome;
        }
    }
    console.log(nomeMaiorValor);
    
}