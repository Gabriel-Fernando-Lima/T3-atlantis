import Processo from "../../abstracoes/processo";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import Diretor from "../../abstracoes/diretor";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.log('--- Cadastro de Acomodações ---')
        console.log('1 - Solteiro Simples')
        console.log('2 - Solteiro Mais')
        console.log('3 - Casal Simples')
        console.log('4 - Família Simples')
        console.log('5 - Família Mais')
        console.log('6 - Família Super')
        
        let opcao = this.entrada.receberNumero('Qual acomodação deseja criar?')
        let diretor: Diretor<Acomodacao>

        switch (opcao) {
            case 1: diretor = new DiretorSolteiroSimples(); break;
            case 2: diretor = new DiretorSolteiroMais(); break;
            case 3: diretor = new DiretorCasalSimples(); break;
            case 4: diretor = new DiretorFamiliaSimples(); break;
            case 5: diretor = new DiretorFamiliaMais(); break;
            case 6: diretor = new DiretorFamiliaSuper(); break;
            default: console.log('Opção inválida'); return;
        }

        this.acomodacoes.push(diretor.construir())
        console.log('Acomodação cadastrada com sucesso!')
    }
}