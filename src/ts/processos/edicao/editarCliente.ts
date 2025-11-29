import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import TipoEdicaoCliente from "../edicao/tipoEditarCliente";

export default class EditarCliente extends Processo {
    processar(): void {
        console.clear()
        console.log('Iniciando a edição de clientes...')
        
        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes

        if (clientes.length === 0) {
            console.log('Não há clientes cadastrados para editar.')
            return
        }

        console.log('Selecione o cliente para editar:')
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`)
        })

        let index = this.entrada.receberNumero('Digite o índice do cliente: ')

        if (index >= 0 && index < clientes.length) {
            let clienteSelecionado = clientes[index]

            this.processo = new TipoEdicaoCliente(clienteSelecionado)
            this.processo.processar()
        } else {
            console.log('Cliente não encontrado!')
        }
    }
}