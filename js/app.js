let precoTotal;
limpar();

function adicionar () {
    let produto = document.getElementById('produto').value; // Obtém o valor selecionado no elemento <select> com ID 'produto'.
    let nomeProduto = produto.split('-')[0]; // Quebra a string em array e pega somente o valor da posição 0.
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let precoSubtotal = quantidade * valorUnitario;  // Calcula o preço subtotal.
    let carrinho = document.getElementById('lista-produtos');

    // Adiciona ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoSubtotal}</span></section>`;

    // Atualiza valor geral
    precoTotal = precoTotal + precoSubtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${precoTotal}`;
    document.getElementById('quantidade').value = '';

}

function limpar () {
    precoTotal = 0;
    document.getElementById('quantidade').value = "";
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}