import Diretor from "../../abstracoes/diretor";
import Processo from "../../abstracoes/processo";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import MenuTipoCadastroAcomodacao from "../../menus/menuTipoCadastroAcomodacao";
import Acomodacao from "../../modelos/acomodacao";

export default class TipoCadastroAcomodacao extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroAcomodacao()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        
        let diretor: Diretor<Acomodacao>

        switch (this.opcao) {
            case 1:
                diretor = new DiretorSolteiroSimples()
                this.cadastrar(diretor)
                break
            case 2:
                diretor = new DiretorSolteiroMais()
                this.cadastrar(diretor)
                break
            case 3:
                diretor = new DiretorCasalSimples()
                this.cadastrar(diretor)
                break
            case 4:
                diretor = new DiretorFamiliaSimples()
                this.cadastrar(diretor)
                break
            case 5:
                diretor = new DiretorFamiliaMais()
                this.cadastrar(diretor)
                break
            case 6:
                diretor = new DiretorFamiliaSuper()
                this.cadastrar(diretor)
                break
            case 0:
                console.log('Voltando...')
                break
            default:
                console.log('Opção inválida!')
        }
    }

    private cadastrar(diretor: Diretor<Acomodacao>) {
        let acomodacao = diretor.construir()
        Armazem.InstanciaUnica.Acomodacoes.push(acomodacao)
        console.log('Acomodação cadastrada com sucesso!')
    }
}