const { describe } = require('mocha');
const { expect } = require('chai');
const Sinon = require('sinon')
const sinon = require('sinon')
const connection = require('../../../models/connection')

const productModels = require('../../../models/productModels');
// const { object } = require('joi');
describe('Teste model responsavel pela estrutura dos dados', () => {
  describe('testando a função getAll', () => {
    const product = [
      { id: 1, "name": "Martelo de Thor" },
      { id: 2, "name": "Traje de encolhimento" },
      { id: 3, "name": "Escudo do Capitão América" },
    ];
    before(() => {
      Sinon.stub(connection, 'execute').resolves([product])
    })
    after(()=> {
      connection.execute.restore()
    })
    it('Se returna todos os produtos', async () => {
      const resultado = await productModels.getAll()
      // expect(resultado).resolves(product)
      expect(resultado).to.be.a('array');
      expect(resultado[0]).to.have.all.keys('id', 'name');
      expect(resultado[0].id).to.be.eq(1);
      expect(resultado[0].name).to.be.eq('Martelo de Thor');
    });
  })

  describe('testa funcção getId', () => {
    const product = [
      { id: 1, "name": "Martelo de Thor" },
    ];
    before(() => {
      Sinon.stub(connection, 'execute').resolves([product])
    })
    after(() => {
      connection.execute.restore()
    })
    it('testando se getId returna um id', async () => {
      const resultado = await productModels.getId(1)
      expect(resultado).to.be.a('object');
      expect(resultado).to.have.all.keys('id', 'name');
      expect(resultado.id).to.be.eq(1);
      expect(resultado.name).to.be.eq('Martelo de Thor');
    })
  });

  describe('testa função NewProducts', () => {
    const product = [
      {
        id: 4,
        "name": "ProdutoX"
      },
    ];
    before(() => {
      Sinon.stub(connection, 'execute').resolves(product)
    })
    after(() => {
      connection.execute.restore()
    })
    it('testando se NewProducts cadastra um novo produto', async () => {
      const resultado = await productModels.NewProducts('nome')
      expect(resultado).to.be.a('object');
      expect(resultado).to.have.keys('id', 'name');
      // expect(resultado.id).to.be.eq(undefined);
      expect(resultado.name).to.be.eq('nome');
    })
  })
});
    // describe('testando a função getId', () => {
    //   before(() => {
    //   const product = [
    //     { "id": 1, "name": "Martelo de Thor" },
    //     { "id": 2, "name": "Traje de encolhimento" },
    //     { "id": 3, "name": "Escudo do Capitão América" },
    //   ]
    //   Sinon.stub(connection, 'execute').resolves([product])
    // })
    // after(() => {
    //   connection.execute.restore()
    // })
    //   it('testa se getId returna id', () => {
    //     const resultado = await productModels.getId()
    //     expect(resultado).to.be.an('id')
    //   })
    // })
  // describe('testtando função getId', () => {
  //   
  //   // const result = [];
  //   it('retorna array vazio', async () => {
  //     const resultado = await productModels.getId()
  //     // console.log(resultado)
  //     expect(resultado).to.be.an(product);
  //   });
  // });