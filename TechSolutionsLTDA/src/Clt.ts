import Usuario from './Usuario.js';

export default class Clt extends Usuario{
    private bonusMes: number;
    
    constructor(
        nomeCompleto: string,
        cpf: string,
        salarioBase: number,
        bonusMes: number
    ){
        super(nomeCompleto, cpf, salarioBase)
        this.bonusMes = bonusMes
    }

    getBonusMes():number{
        return this.bonusMes
    }

    setBonusMes(bonusMes:number):void{
        this.bonusMes = bonusMes
    }

    calcularSalario():number{
        return this.getSalarioBase() + this.bonusMes
    }

    imprimeInfo():void{
        console.log(`Id: ${this.getId()} - Nome Completo: ${this.getNomeCompleto()} - CPF: ${this.getCpf()} - Salário Base: ${this.getSalarioBase()}`)

        console.log(`Bônus Mensal: ${this.getBonusMes()}`)
    }
}