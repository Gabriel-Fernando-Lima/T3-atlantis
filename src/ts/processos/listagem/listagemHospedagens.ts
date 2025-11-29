import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";

export default class ListagemHospedagem extends Processo {
    processar(): void {
        console.clear()
        console.log('--- Listagem de Hospedagens Ativas ---')
        
        let armazem = Armazem.InstanciaUnica
        let hospedagens = armazem.Hospedagens

        if (hospedagens.length === 0) {
            console.log('Não há hóspedes registrados no momento.')
            return
        }

        hospedagens.forEach((hospedagem, index) => {
            console.log(`\nRegistro #${index + 1}`)
            console.log(`Cliente: ${hospedagem.Cliente.Nome}`)
            console.log(`Acomodação: ${hospedagem.Acomodacao.NomeAcomadacao}`)
            console.log(`Detalhes do quarto:`)
            console.log(`   - Suítes: ${hospedagem.Acomodacao.Suite}`)
            console.log(`   - Garagem: ${hospedagem.Acomodacao.Garagem}`)
            console.log(`   - Climatização: ${hospedagem.Acomodacao.Climatizacao ? 'Sim' : 'Não'}`)
            console.log('-------------------------------------------------')
        })
    }
}