const criarTarefa = (evento) =>{
    evento.preventDefault()
    const lista = document.querySelector('[data-list]')

    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const tarefa = document.createElement('li')

    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = " "

    tarefa.appendChild(botao())
    tarefa.appendChild(remover())
}
const botao = () =>{
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerHTML = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) =>{

    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

const remover = () =>{
    const botaoDelete = document.createElement('button')
    botaoDelete.classList.add('delete-button')
    botaoDelete.innerHTML = 'deletar'
    botaoDelete.addEventListener('click', removerTarefa)
    return botaoDelete
}
const removerTarefa = (evento) => {
    const botaoDelete = evento.target
    const tarefaCompleta = botaoDelete.parentElement
    tarefaCompleta.remove()
    return botaoDelete
}
const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click',(criarTarefa))
