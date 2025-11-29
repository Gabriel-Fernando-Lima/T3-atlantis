import Processo from "../../abstracoes/processo";
import MenuTipoEdicaoCliente from "../../menus/menuTipoEdicaoCliente";
import Cliente from "../../modelos/cliente";
import CadastroEnderecoTitular from "../cadastro/cadastroEnderecoTitular";

export default class TipoEdicaoCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.menu = new MenuTipoEdicaoCliente()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual a opção desejada?')

            switch (this.opcao) {
                case 1:
                    let nome = this.entrada.receberTexto('Qual o novo nome?')
                    this.cliente.Nome = nome
                    break
                case 2:
                    let nomeSocial = this.entrada.receberTexto('Qual o novo nome social?')
                    this.cliente.NomeSocial = nomeSocial
                    break
                case 3:
                    let data = this.entrada.receberData('Qual a nova data de nascimento?')
                    this.cliente.DataNascimento = data
                    break
                case 4:
                    this.processo = new CadastroEnderecoTitular(this.cliente)
                    this.processo.processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção inválida!')
            }
            
            if(this.execucao) {
                console.log('Dado atualizado com sucesso!')
            }
        }
    }
}