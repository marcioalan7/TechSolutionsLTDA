import Usuario from './Usuario.js';
export default class Terceirizado extends Usuario {
    taxaMes;
    constructor(nomeCompleto, cpf, salarioBase, taxaMes) {
        super(nomeCompleto, cpf, salarioBase);
        this.taxaMes = taxaMes;
    }
    getTaxaMes() {
        return this.taxaMes;
    }
    setTaxaMes(taxaMes) {
        if (taxaMes > 0 && taxaMes < 100) {
            this.taxaMes = taxaMes;
        }
        else {
            console.log('Taxa inválida!');
        }
    }
    calcularSalario() {
        return this.getSalarioBase() + (this.getSalarioBase() * this.taxaMes / 100);
    }
    imprimeInfo() {
        console.log(`Id: ${this.getId()} - Nome Completo: ${this.getNomeCompleto()} - CPF: ${this.getCpf()} - Salário Base: ${this.getSalarioBase()}`);
        console.log(`Taxa do Mês: ${this.getTaxaMes()}%`);
    }
}
