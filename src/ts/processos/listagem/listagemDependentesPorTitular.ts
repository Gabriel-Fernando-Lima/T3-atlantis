import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";

export default class ListagemDependentesPorTitular extends Processo {
    processar(): void {
        console.clear()
        console.log('--- Listagem de Dependentes por Titular ---')

        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes

        let titulares = clientes.filter(cliente => cliente.Titular == undefined)

        if (titulares.length === 0) {
            console.log('Não há titulares cadastrados.')
            return
        }

        console.log('Selecione o Titular:')
        titulares.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`)
        })

        let index = this.entrada.receberNumero('Digite o índice do titular: ')

        if (index >= 0 && index < titulares.length) {
            let titularSelecionado = titulares[index]

            if (titularSelecionado.Dependentes.length === 0) {
                console.log(`O cliente ${titularSelecionado.Nome} não possui dependentes.`)
            } else {
                console.log(`\nDependentes de ${titularSelecionado.Nome}:`)
                titularSelecionado.Dependentes.forEach(dependente => {
                    console.log(`- Nome: ${dependente.Nome} | Nasc: ${dependente.DataNascimento.toLocaleDateString()}`)
                })
            }
        } else {
            console.log('Índice inválido.')
        }
    }
}