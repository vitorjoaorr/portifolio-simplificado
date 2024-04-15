// variaveis
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// mostrar no log
console.log(projetosInativos);

// evento ao clicar no botão
botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
