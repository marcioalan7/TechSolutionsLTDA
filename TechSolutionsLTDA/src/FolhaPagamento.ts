import Usuario from './Usuario.js';

export default class FolhaPagamento {
    private funcionarios: Usuario[];

    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario: Usuario): void {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(id: number): void {
        this.funcionarios = this.funcionarios.filter(
            funcionario => funcionario.getId() !== id
        );
    }

    calcularTotal(): number {
        let total = 0;

        for (const funcionario of this.funcionarios) {
            total += funcionario.calcularSalario();
        }

        return total;
    }

    private formatarMoeda(valor: number): string {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    exibirFolha(): void {
        console.log('Folha de Pagamento');

        for (const funcionario of this.funcionarios){
            console.log(`Nome: ${funcionario.getNomeCompleto()}`);
            console.log(`ID: ${funcionario.getId()}`);
            console.log(`Tipo: ${funcionario.constructor.name}`);

            console.log(
                `Salário Calculado: ${this.formatarMoeda(
                    funcionario.calcularSalario()
                )}`
            );

            funcionario.imprimeInfo();
        }

        console.log(
            `Total da Folha: ${this.formatarMoeda(this.calcularTotal())}`
        );
    }
}
