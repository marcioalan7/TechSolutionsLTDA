import Usuario from './Usuario.js';

export default class Terceirizado extends Usuario{
    private taxaMes: number;

    constructor(
        nomeCompleto: string,
        cpf: string,
        salarioBase: number,
        taxaMes: number
    ){
        super(nomeCompleto, cpf, salarioBase)
        this.taxaMes = taxaMes;
    }

    getTaxaMes():number{
        return this.taxaMes
    }

    setTaxaMes(taxaMes:number):void{
        if(taxaMes > 0 && taxaMes < 100){
            this.taxaMes = taxaMes
        } else {
            console.log('Taxa inválida!')
        }
    }

    calcularSalario():number{
        return this.getSalarioBase() + (this.getSalarioBase() * this.taxaMes/100)
    }

    imprimeInfo():void{
        console.log(`Id: ${this.getId()} - Nome Completo: ${this.getNomeCompleto()} - CPF: ${this.getCpf()} - Salário Base: ${this.getSalarioBase()}`)

        console.log(`Taxa do Mês: ${this.getTaxaMes()}%`)
    }
}