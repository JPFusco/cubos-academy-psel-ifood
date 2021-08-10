function solucao(primeiraLetra, segundaLetra, palavras) {
	let i = 0;
    for (const palavra of palavras){
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
            console.log(palavra);
            i++;
        }
    }
    if (i == 0){
        console.log("NENHUMA");
    }

}