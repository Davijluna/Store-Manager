const { expect } = require('chai');
const sinon = require('sinon');

const productModels = require('../../../models/productModels');
const productServices = require('../../../services/productServices');

// const MoviService = {
//   create: () => {},
// };

describe('Teste Service responsavel pela estrutura dos dados', () => {
  
  describe('testa função getAll', () => {
    before(() => {
      const product = [
        { "id": 1, "name": "Martelo de Thor" },
      ]

      sinon.stub(productModels, 'getAll').resolves(product)

  
    })

    after(() => {
      productModels.getAll.restore()
    })
    it('se getAll returna todos os valores', async () => {
      const result = await productServices.getAll()
      expect(result).to.be.an('object');
      expect(result).to.have.keys('data', 'code');
      expect(result.code).to.equal(200);
      expect(result.data[0]).to.have.keys('id', 'name');
      expect(result.data[0].id).to.be.equal(1)
      expect(result.data[0].name).to.be.equal('Martelo de Thor');
    })

  });

  describe('testa função getAll- CASO DE FALHA', () => {
    before(() => {
      const product = []
      sinon.stub(productModels, 'getAll').resolves(product)
    })
    after(() => {
      productModels.getAll.restore()
    })
    it('se getAll returna um erro', async () => {
      const result = await productServices.getAll()
      console.log(result, 'AQUI');
      expect(result).to.be.an('object');
      expect(result).to.have.keys('error', 'code');
      expect(result.code).to.equal(404);
      expect(result.error).to.have.key('message');
      expect(result.error.message).to.be.equal('Product not found');
    })

  });

  describe('testa função getId', () => {

  })
});
