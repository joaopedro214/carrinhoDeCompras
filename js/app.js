function adicionar () {
    let produto = document.getElementById('produto').value; // Obtém o valor selecionado no elemento <select> com ID 'produto'.
    let listaProdutos = document.querySelector('#lista-produtos'); // Seleciona o elemento <section> onde os produtos serão listados.
    let quantidade = document.getElementById('quantidade').value; // Obtém o valor inserido no elemento <input> com ID 'quantidade'.

    if (produto && quantidade > 0) {
        let novoItem = document.createElement('section');
        novoItem.innerHTML = `<span class="texto-azul">${quantidade}</span> ${produto}`;
        // Adiciona o novo elemento à lista de produtos no carrinho.
        listaProdutos.appendChild(novoItem);

        atualizaTotal();
    }
}