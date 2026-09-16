export default abstract class Usuario{
    private static proximoId: number = 1;

    private id: number;
    private nomeCompleto: string;
    private cpf: string;
    private salarioBase: number;

    constructor(
        nomeCompleto: string,
        cpf: string,
        salarioBase: number
    ){
        this.id = Usuario.proximoId++;
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
    }

    getId():number{
        return this.id
    }

    getNomeCompleto():string{
        return this.nomeCompleto
    }

    getCpf():string{
        return this.cpf
    }

    getSalarioBase():number{
        return this.salarioBase
    }

    setNomeCompleto(nomeCompleto:string):void{
        if(nomeCompleto != '' ){
            this.nomeCompleto = nomeCompleto
        } else {
            console.log('Nome inválido!')
        }
    }

    setCpf(cpf:string):void{
        if(this.validarCpf(cpf)){
            this.cpf = cpf
        } else {
            console.log('Cpf inválido. Verifique o número digitado.')
        }
    }

    private validarCpf(cpf: string): boolean {
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

    setSalarioBase(salarioBase:number):void{
        if(salarioBase > 0 ){
            this.salarioBase = salarioBase
        } else {
            console.log('Salário não pode ser negativo.')
        }
    }

    abstract imprimeInfo():void
    abstract calcularSalario():number
}