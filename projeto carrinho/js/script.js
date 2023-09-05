let valorTotal = [0,0]
const valorProduto = [50.00,30.00]
let qtd = [0,0]
let produto = [0,0]

function adicionarItem(item){

    let quantidade = document.getElementById("quantidade" + item)
    let total = document.getElementById("total" + item) 
    qtd[item] += 1
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
    quantidade.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2)
    valorTotalCompra()
}


function removerItem(item){
    if(qtd[item] > 0){
    let quantidade = document.getElementById("quantidade" + item)
    let total = document.getElementById("total" + item) 
    qtd[item] -= 1
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
    quantidade.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2)
    valorTotalCompra()
    }
}

function valorTotalCompra(){
    let valorTotalCompra = document.getElementById('valorTotalCompra')
    let valor = 0
    for(i = 0; i <valorTotal.length; i++){
        valor += valorTotal[i]
    }
    valorTotalCompra.innerHTML = valor.toFixed(2)
}
