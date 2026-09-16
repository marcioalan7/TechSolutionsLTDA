export default class FolhaPagamento {
    funcionarios;
    constructor() {
        this.funcionarios = [];
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    removerFuncionario(id) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.getId() !== id);
    }
    calcularTotal() {
        let total = 0;
        for (const funcionario of this.funcionarios) {
            total += funcionario.calcularSalario();
        }
        return total;
    }
    formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    exibirFolha() {
        console.log('Folha de Pagamento');
        for (const funcionario of this.funcionarios) {
            console.log(`Nome: ${funcionario.getNomeCompleto()}`);
            console.log(`ID: ${funcionario.getId()}`);
            console.log(`Tipo: ${funcionario.constructor.name}`);
            console.log(`Salário Calculado: ${this.formatarMoeda(funcionario.calcularSalario())}`);
            funcionario.imprimeInfo();
        }
        console.log(`Total da Folha: ${this.formatarMoeda(this.calcularTotal())}`);
    }
}
