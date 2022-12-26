import abobora from '../../assets/frutas/Abóbora.png';
import batata from '../../assets/frutas/Batata.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import pepino from '../../assets/frutas/Pepino.png';
import tomate from '../../assets/frutas/Tomate.png';
import logo from '../../assets/logo.png';

const cesta = {
    topo: {
        titulo: 'Detalhe da cesta'
    },
    detalhes: {
        nome: 'Cesta de Verduras',
        logoFazenda: logo,
        nomeFazenda: 'Jenny Jack Farm',
        descricao: 'Uma cesta com produtos selecionados cuidadosamente da fazenda, direto para sua cozinha',
        preco: 'R$ 30,00',
        botao: 'Comprar'
    },
    itens: {
      titulo: "Itens da cesta",
      lista: [
        {
          id: 1,
          nome: "Tomate",
          imagem: tomate,
        },
        {
          id: 2,
          nome: "Brócolis",
          imagem: brocolis,
        },
        {
          id: 3,
          nome: "Batata",
          imagem: batata,
        },
        {
          id: 4,
          nome: "Pepino",
          imagem: pepino,
        },
        {
          id: 5,
          nome: "Abóbora",
          imagem: abobora,
        }
      ]
    }
}

export default cesta;