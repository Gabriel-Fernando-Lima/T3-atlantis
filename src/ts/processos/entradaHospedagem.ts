import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Hospedagem from "../modelos/hospedagem";

export default class EntradaHospedagem extends Processo {
    processar(): void {
        console.clear()
        console.log('Iniciando entrada de hospedagem (Check-in)...')
        let armazem = Armazem.InstanciaUnica
        

        if (armazem.Clientes.length == 0) {
            console.log('Erro: Nenhum cliente cadastrado.')
            return
        }
        
        console.log('--- Selecione o Cliente ---')
        armazem.Clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`)
        })
        let indexCliente = this.entrada.receberNumero('Digite o índice do cliente: ')
        
        if (indexCliente < 0 || indexCliente >= armazem.Clientes.length) {
            console.log('Cliente inválido.')
            return
        }
        let cliente = armazem.Clientes[indexCliente]


        let acomodacoesDisponiveis = armazem.Acomodacoes.filter(acom => {
            let estaOcupada = armazem.Hospedagens.some(aloj => aloj.Acomodacao === acom)
            return !estaOcupada
        })

        if (acomodacoesDisponiveis.length == 0) {
            console.log('Erro: Não há acomodações livres no momento.')
            return
        }


        console.log('--- Selecione a Acomodação ---')
        acomodacoesDisponiveis.forEach((acom, index) => {
            console.log(`${index} - ${acom.NomeAcomadacao} (Suítes: ${acom.Suite})`)
        })
        
        let indexAcom = this.entrada.receberNumero('Digite o índice da acomodação: ')
        if (indexAcom < 0 || indexAcom >= acomodacoesDisponiveis.length) {
            console.log('Acomodação inválida.')
            return
        }
        let acomodacao = acomodacoesDisponiveis[indexAcom]


        let hospedagem = new Hospedagem(cliente, acomodacao)
        armazem.Hospedagens.push(hospedagem)
        
        console.log(`Hospedagem registrada com sucesso para ${cliente.Nome}!`)
    }
}