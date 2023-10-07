let tarefas = [];
let posicao = '';
let exibicao_tabela = document.getElementById("exibicao_tabela");
let btnSalvar = document.querySelector("#salvar");
btnSalvar.addEventListener('click', Cadastrar);
function listar(lista) {
    var auxHtml = '';
    lista.forEach((t, i) => {
        auxHtml += `
        <tr>
        <td> ${t} </td>
        <td> <a href="#" rel="${i}" class="btn btn-warning btnAlterar"> Alterar </a> </td>
        <td> <a href="#" rel="${i}" class="btn btn-danger btnExcluir"> Excluir </a> </td>
        </tr>
        `
    })
    return auxHtml;
}
function Cadastrar() {
    var tarefa = document.getElementById("tarefa").value;
    if (posicao == '') {
        tarefas.push(tarefa);

    }
    else {
        tarefas[posicao] = tarefa;
        posicao = '';
    }
    document.getElementById("tarefa").value = ''
    exibicao_tabela.innerHTML = listar(tarefas);


}

exibicao_tabela.addEventListener('click', Acoes);
function Acoes(event) {
    posicao = event.target.rel;
    if (event.target.classList.contains("btnAlterar")) {
        tarefa.value = tarefas[posicao];
    }
    else if (event.target.classList.contains("btnExcluir")) {
        let confirmar = confirm("Deseja mesmo exlcluir?");
        if (confirmar == true) {
            tarefas.splice(posicao, 1);
            exibicao_tabela.innerHTML = listar(tarefas);
        }
    }
}