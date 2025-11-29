import Menu from "../interfaces/menu";

export default class MenuTipoExclusaoCliente implements Menu {
    mostrar(): void {
        console.log(`\n****************************`)
        console.log(`| ATENÇÃO: Esta ação não pode ser desfeita!`)
        console.log(`----------------------`)
        console.log(`| Confirma a exclusão deste cliente?`)
        console.log(`| 1 - Sim, excluir permanentemente`)
        console.log(`| 2 - Não, cancelar e voltar`)
        console.log(`----------------------`)
    }
}