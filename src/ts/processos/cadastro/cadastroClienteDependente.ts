import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um dependente...')
        

        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes

        if (clientes.length == 0) {
            console.log('Não há titulares cadastrados para vincular um dependente.')
            return
        }

        console.log('Selecione o Titular')
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`)
        })

        let indexTitular = this.entrada.receberNumero('Digite o número do titular: ')
        

        if (indexTitular < 0 || indexTitular >= clientes.length) {
            console.log('Opção inválida!')
            return
        }

        let titular = clientes[indexTitular]

        let nome = this.entrada.receberTexto('Qual o nome do dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)

        dependente.Titular = titular
        titular.adicionarDependente(dependente)

        dependente.Endereco = titular.Endereco.clonar() as Endereco

        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        armazem.Clientes.push(dependente)

        console.log('Finalizando o cadastro do dependente...')
    }
}