import Acomodacao from "../modelos/acomodacao";
import Hospedagem from "../modelos/hospedagem";
import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private hospedagens: Hospedagem[] = []
    
    private constructor() { }
    
    public static get InstanciaUnica() { return this.instanciaUnica }
    public get Clientes() { return this.clientes }
    public get Acomodacoes() { return this.acomodacoes }
    public get Hospedagens() { return this.hospedagens } 
}