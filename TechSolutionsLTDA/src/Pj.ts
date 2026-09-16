import Usuario from './Usuario.js';

export default class Pj extends Usuario{
    private valorHora: number;
    private horasTrabalhadas: number;

    constructor(
        nomeCompleto: string,
        cpf: string,
        salarioBase: number,
        valorHora: number,
        horasTrabalhadas: number
    ){
        super(nomeCompleto, cpf, salarioBase)
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    getValorHora():number{
        return this.valorHora
    }

    setValorHora(valorHora:number):void{
        if(valorHora > 0){
            this.valorHora = valorHora
        } else {
            console.log('Valor da hora não pode ser negativo!')
        }
    }

    getHorasTrabalhadas():number{
        return this.horasTrabalhadas
    }

    setHorasTrabalhadas(horasTrabalhadas:number):void{
        if(horasTrabalhadas <= 220 ){
            this.horasTrabalhadas = horasTrabalhadas
        } else {
            console.log('Horas trabalhadas não podem execeder 220 horas.')
        }
    }

    calcularSalario():number{
        return this.valorHora * this.horasTrabalhadas
    }

    imprimeInfo():void{
        console.log(`Id: ${this.getId()} - Nome Completo: ${this.getNomeCompleto()} - CPF: ${this.getCpf()} - Salário Base: ${this.getSalarioBase()}`)

        console.log(`Valor da Hora: ${this.getValorHora()} - Horas Trabalhadas: ${this.getHorasTrabalhadas()}`)
    }
}