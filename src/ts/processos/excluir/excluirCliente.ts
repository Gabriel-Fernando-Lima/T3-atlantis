import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import TipoExclusaoCliente from "./tipoExclusaoCliente";

export default class ExcluirCliente extends Processo {
    processar(): void {
        console.clear()
        console.log('Iniciando a exclusão de clientes...')
        
        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes

        if (clientes.length === 0) {
            console.log('Não há clientes para excluir.')
            return
        }

        console.log('Selecione o cliente para excluir:')
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`)
        })

        let index = this.entrada.receberNumero('Digite o índice do cliente: ')

        if (index >= 0 && index < clientes.length) {
            let clienteSelecionado = clientes[index]
            
            // Passa o cliente selecionado para o controlador de exclusão
            this.processo = new TipoExclusaoCliente(clienteSelecionado)
            this.processo.processar()
        } else {
            console.log('Cliente não encontrado.')
        }
    }
}