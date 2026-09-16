export default class Usuario {
    static proximoId = 1;
    id;
    nomeCompleto;
    cpf;
    salarioBase;
    constructor(nomeCompleto, cpf, salarioBase) {
        this.id = Usuario.proximoId++;
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
    }
    getId() {
        return this.id;
    }
    getNomeCompleto() {
        return this.nomeCompleto;
    }
    getCpf() {
        return this.cpf;
    }
    getSalarioBase() {
        return this.salarioBase;
    }
    setNomeCompleto(nomeCompleto) {
        if (nomeCompleto != '') {
            this.nomeCompleto = nomeCompleto;
        }
        else {
            console.log('Nome inválido!');
        }
    }
    setCpf(cpf) {
        if (this.validarCpf(cpf)) {
            this.cpf = cpf;
        }
        else {
            console.log('Cpf inválido. Verifique o número digitado.');
        }
    }
    validarCpf(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) {
            return false;
        }
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += Number(cpf[i]) * (10 - i);
        }
        let resto = soma % 11;
        let digito1 = resto < 2 ? 0 : 11 - resto;
        if (digito1 !== Number(cpf[9])) {
            return false;
        }
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += Number(cpf[i]) * (11 - i);
        }
        resto = soma % 11;
        let digito2 = resto < 2 ? 0 : 11 - resto;
        if (digito2 !== Number(cpf[10])) {
            return false;
        }
        return true;
    }
    setSalarioBase(salarioBase) {
        if (salarioBase > 0) {
            this.salarioBase = salarioBase;
        }
        else {
            console.log('Salário não pode ser negativo.');
        }
    }
}
