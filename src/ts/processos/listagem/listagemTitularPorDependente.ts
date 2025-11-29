import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
    processar(): void {
        console.clear()
        console.log('--- Listagem de Titular por Dependente ---')
        
        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes


        let dependentes = clientes.filter(cliente => cliente.Titular !== undefined)

        if (dependentes.length === 0) {
            console.log('Não há dependentes cadastrados no sistema.')
            return
        }

        console.log('Selecione o Dependente para ver seu Titular:')
        dependentes.forEach((dependente, index) => {
            console.log(`${index} - ${dependente.Nome}`)
        })

        let index = this.entrada.receberNumero('Digite o índice do dependente: ')
        
        if (index >= 0 && index < dependentes.length) {
            let dependenteSelecionado = dependentes[index]
            let titular = dependenteSelecionado.Titular

            console.log(`\nO dependente ${dependenteSelecionado.Nome} está vinculado ao titular:`)
            console.log(`- Nome: ${titular.Nome}`)
            console.log(`- CPF/Identificação: ${titular.Documentos.length > 0 ? titular.Documentos[0].Numero : 'Não informado'}`)
            console.log(`- Endereço: ${titular.Endereco.Rua}, ${titular.Endereco.Estado} - ${titular.Endereco.Cidade}`)
        } else {
            console.log('Índice inválido.')
        }
    }
}