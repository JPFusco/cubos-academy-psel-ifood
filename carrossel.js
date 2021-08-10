function solucao(sequencia) {
	let tamanho = sequencia.length;
    let indiceCarrossel = 0;
    for (let i = 0; i <= tamanho; i++){
        if (sequencia[i] == ">"){
            indiceCarrossel++;
            if (indiceCarrossel > 6){
                indiceCarrossel = 0;
            }
        } else if (sequencia[i] == "<"){
            indiceCarrossel--;
            if (indiceCarrossel < 0){
                indiceCarrossel = 6;
            }
        }
    }
    
    console.log(indiceCarrossel);

}