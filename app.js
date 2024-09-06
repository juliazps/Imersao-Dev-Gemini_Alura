// console.log(dados);

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos.
    // O elemento com o ID "resultados-pesquisa" será o contêiner para os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // Essa string será preenchida com o HTML gerado para cada resultado e, no final, inserida no DOM.
    let resultados = "";

    // Itera sobre cada dado da lista de dados (assumindo que 'dados' é um array de objetos). Para cada objeto (cada dado), criamos um novo elemento HTML e o adicionamos à string 'resultados'.
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado. A estrutura HTML criada representa um item de resultado com título, descrição e link.
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML. Substitui todo o conteúdo HTML dentro da seção pelos resultados da pesquisa.
    section.innerHTML = resultados;
}