function solucao(cor1, cor2) {
	if (cor1 === 'azul'){
        if (cor2 === 'amarelo'){
            console.log("verde");
        } else if (cor2 === 'vermelho'){
            console.log("roxo");
        } else{
            console.log("azul");
        }
    }
    if (cor1 === 'amarelo'){
        if (cor2 === 'azul'){
            console.log("verde");
        } else if (cor2 === 'vermelho'){
            console.log("laranja");
        } else{
            console.log("amarelo");
        }
    }
    if (cor1 === 'vermelho'){
        if (cor2 === 'amarelo'){
            console.log("laranja");
        } else if (cor2 === 'azul'){
            console.log("roxo");
        } else{
            console.log("vermelho");
        }
    }

}