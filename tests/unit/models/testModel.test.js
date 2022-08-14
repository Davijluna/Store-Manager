const { describe } = require('mocha');
const { expect } = require('chai');

const productModels = require('../../../models/productModels');

describe('Teste model responsavel pela estrutura dos dados', () => {
  describe('Caso OK', () => {
    const product = [
        {"id": 1, "name": "Martelo de Thor" },
        {"id": 2, "name": "Traje de encolhimento" },
        {"id": 3, "name": "Escudo do Capitão América" }
      ]
    it('retorna array vazio', async () => {
      const resultado = await productModels.getAll()
      expect(resultado).to.be.an(product);
    });
  });
});