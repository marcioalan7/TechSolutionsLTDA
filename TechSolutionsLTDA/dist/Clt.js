import Usuario from './Usuario.js';
export default class Clt extends Usuario {
    bonusMes;
    constructor(nomeCompleto, cpf, salarioBase, bonusMes) {
        super(nomeCompleto, cpf, salarioBase);
        this.bonusMes = bonusMes;
    }
    getBonusMes() {
        return this.bonusMes;
    }
    setBonusMes(bonusMes) {
        this.bonusMes = bonusMes;
    }
    calcularSalario() {
        return this.getSalarioBase() + this.bonusMes;
    }
    imprimeInfo() {
        console.log(`Id: ${this.getId()} - Nome Completo: ${this.getNomeCompleto()} - CPF: ${this.getCpf()} - Salário Base: ${this.getSalarioBase()}`);
        console.log(`Bônus Mensal: ${this.getBonusMes()}`);
    }
}
