import Processo from "../../abstracoes/processo";
import MenuTipoExclusaoCliente from "../../menus/menuTipoExclusaoCliente";
import Cliente from "../../modelos/cliente";
import Armazem from "../../dominio/armazem";

export default class TipoExclusaoCliente extends Processo {
    private cliente: Cliente
    private armazem: Armazem

    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuTipoExclusaoCliente()
        this.cliente = cliente
        this.armazem = Armazem.InstanciaUnica
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a sua opção?')

        switch (this.opcao) {
            case 1:
                if (this.cliente.Titular) {
                    this.cliente.Titular.removerDependente(this.cliente)
                    console.log(`Cliente desvinculado do titular: ${this.cliente.Titular.Nome}`)
                }

                let index = this.armazem.Clientes.indexOf(this.cliente)
                if (index > -1) {
                    this.armazem.Clientes.splice(index, 1)
                    console.log('Cliente excluído com sucesso!')
                } else {
                    console.log('Erro ao localizar cliente no armazém.')
                }
                break
                
            case 2:
                console.log('Exclusão cancelada.')
                break
                
            default:
                console.log('Opção inválida!')
        }
    }
}