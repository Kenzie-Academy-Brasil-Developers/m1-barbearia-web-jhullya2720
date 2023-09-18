const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id){
    const cortes = barbearia.cortes;
    for(let i = 0; i < barbearia.cortes.length; i++){
        if(cortes[i].id == id){
            return barbearia.cortes[i]
        }
    }
    return "Corte nao encontrado";
    
    }
buscaCortePorId()

function buscaBarbaPorId(id) {
    const barbas = barbearia.barbas;
    for(let i = 0; i < barbearia.barbas.length; i++){
        if(barbas[i].id == id){
            return barbearia.barbas[i]
        }
    }
    return "Barba não encontrada";
}

buscaBarbaPorId()

function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return "Estamos abertos";
    }
    return "Estamos fechados";
}
verificaStatusBarbearia()

function retornaTodosCortes() {
    for(let i = 0; i < barbearia.cortes.length; i++){
        return barbearia.cortes
    }
}
retornaTodosCortes()

function retornaTodasBarbas() {
    for(let i = 0; i < barbearia.barbas.length; i++){
        return barbearia.barbas
    }
}
retornaTodasBarbas()

function criaPedido(nomeCliente, corteId, barbaId) {
    nomeCliente = "";
    corteId = barbearia.cortes;
    barbaId = barbearia.barbas;
    const pedido = {
        nome: nomeCliente,
        pedidoCorte: barbearia.cortes,
        pedidoBarba: barbearia.barbas,
        pedidoBarbaPreco: barbearia.barbas.valor,
        pedidoCortePreco: barbearia.cortes.valor
    }
    return pedido

}
criaPedido()

function atualizarServico(lista, id, valor, tipo) {
        for(let i = 0; i < lista.length; i ++){
        if(lista[i].id == id){
            lista[i].valor = valor
            lista[i].id = id
            lista[i].tipo = tipo
        }    
    }

    return lista
}
atualizarServico()

function calculaTotal(pedido) {
    const valorTotal = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco
    return valorTotal
}

calculaTotal()
  
  
