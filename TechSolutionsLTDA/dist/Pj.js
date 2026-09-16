import Usuario from './Usuario.js';
export default class Pj extends Usuario {
    valorHora;
    horasTrabalhadas;
    constructor(nomeCompleto, cpf, salarioBase, valorHora, horasTrabalhadas) {
        super(nomeCompleto, cpf, salarioBase);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    getValorHora() {
        return this.valorHora;
    }
    setValorHora(valorHora) {
        if (valorHora > 0) {
            this.valorHora = valorHora;
        }
        else {
            console.log('Valor da hora não pode ser negativo!');
        }
    }
    getHorasTrabalhadas() {
        return this.horasTrabalhadas;
    }
    setHorasTrabalhadas(horasTrabalhadas) {
        if (horasTrabalhadas <= 220) {
            this.horasTrabalhadas = horasTrabalhadas;
        }
        else {
            console.log('Horas trabalhadas não podem execeder 220 horas.');
        }
    }
    calcularSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
    imprimeInfo() {
        console.log(`Id: ${this.getId()} - Nome Completo: ${this.getNomeCompleto()} - CPF: ${this.getCpf()} - Salário Base: ${this.getSalarioBase()}`);
        console.log(`Valor da Hora: ${this.getValorHora()} - Horas Trabalhadas: ${this.getHorasTrabalhadas()}`);
    }
}
