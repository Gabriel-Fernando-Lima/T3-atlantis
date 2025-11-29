import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import ListagemAcomodacoes from "./listagem/listagemAcomodacoes"
import TipoCadastroCliente from "./cadastro/tipoCadastroCliente"
import TipoListagemClientes from "./listagem/tipoListagemClientes"
import TipoCadastroAcomodacao from "./cadastro/tipoCadastroAcomodacao"
import EntradaHospedagem from "./entradaHospedagem"
import EditarCliente from "./edicao/editarCliente"
import ExcluirCliente from "./excluir/excluirCliente"
import ListagemHospedagem from "./listagem/listagemHospedagens"


export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new ExcluirCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new TipoCadastroAcomodacao()
                this.processo.processar()
                break
            case 7:
                this.processo = new EntradaHospedagem()
                this.processo.processar()
                break
            case 8:
                this.processo = new ListagemHospedagem()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}