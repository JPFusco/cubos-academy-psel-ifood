function solucao(precos) {
    let soma = 0;
    let premium = 0;
    for (const item of precos){
        soma += item;
        if (item > 200){
            premium = 1;
        }
    }
    if (soma >= 1000){
        if (premium == 1){
            console.log("PREMIUM");
        } else {
            console.log("VIP");
        }
    } else {
        console.log("NORMAL");
    }

}