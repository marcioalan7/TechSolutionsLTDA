import Clt from './Clt.js';
import Pj from './Pj.js';
import Terceirizado from './Terceirizado.js';
import FolhaPagamento from './FolhaPagamento.js';

const folha = new FolhaPagamento();

const clt = new Clt(
    'João Silva',
    '529.982.247-25',
    3000,
    500
);

const pj = new Pj(
    'Maria Souza',
    '123.456.789-09',
    0,
    50,
    160
);

const terceirizado = new Terceirizado(
    'Carlos Santos',
    '111.444.777-35',
    3000,
    20
);

folha.adicionarFuncionario(clt);
folha.adicionarFuncionario(pj);
folha.adicionarFuncionario(terceirizado);

folha.exibirFolha();
