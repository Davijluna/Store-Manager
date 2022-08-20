// const { json } = require('body-parser');
const { expect } = require('chai');
// const { response } = require('express');
// const Sinon = require('sinon');
const sinon = require('sinon');
// const { connect } = require('../../../app');

const productModels = require('../../../models/productModels');
const productServices = require('../../../services/productServices');

describe('Teste Service responsavel pela estrutura dos dados', () => {
  // beforeEach(sinon.restore);
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
    it('testa se getAll returna todos os valores', async () => {
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
    it('testa  se getAll returna um erro', async () => {
      const result = await productServices.getAll()
      expect(result).to.be.an('object');
      expect(result).to.have.keys('error', 'code');
      expect(result.code).to.equal(404);
      expect(result.error).to.have.key('message');
      expect(result.error.message).to.be.equal('Product not found');
    })

  });

  describe('testa função getId', () => {
    before(() => {
      const product = [
        { "id": 1, "name": "Martelo de Thor" },
      ]
      sinon.stub(productModels, 'getId').resolves(product)
    })
    after(() => {
      productModels.getId.restore()
    })
    it('testa função getId caso sucesso', async () => {
    const result = await productServices.getId('nome')
      expect(result).to.be.a('object');
      expect(result).to.have.keys('data', 'code');
      expect(result.code).to.equal(200);
      expect(result.data[0]).to.have.key('id', 'name');
      expect(result.data[0].id).to.be.equal(1)
      expect(result.data[0].name).to.be.equal('Martelo de Thor')
    })
  })
  describe('testa função NewProducts', () => {
    const name = 'name';
    const product = [
      {
        id: 4,
        "name": "ProdutoX"
      },
    ];
    before(() => {
      sinon.stub(productModels, 'NewProducts').resolves(product);
    })
    after(() => {
      productModels.NewProducts.restore()
    })
    it('testa retorno de NewProducts', async () => {
      const result = await productServices.NewProducts(name)
      expect(result).to.be.an('object');
    })
    it('testa se NewProducts possui as chaves code e data', async () => {
      const result = await productServices.NewProducts(name)  
      expect(result).to.have.keys('data', 'code');
    })
    it('testa se chave e um object', async () => {
      const result = await productServices.NewProducts(name)
      expect(result.data[0]).to.have.keys('id','name');
    })
  })

  describe('testa função ValidCadastryProducts', () => {
    const product = {
      "id": 3,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]
    }
    before(() => {
      sinon.stub(productModels, 'ValidCadastryProducts').resolves(product)
    })
    after(() => {
      productModels.ValidCadastryProducts.restore();
    })
    // it('testa retorno de função ValidCadastryProducts', async () => {
    //   const result = await productServices.ValidCadastryProducts(product)
    //   expect(result).to.be.a('object');
    // });
  });

  // describe('testa função UpdataProductos', () => {
  //   const id = 1
  //   const product = {
  //     "id": 1,
  //     "name": "Martelo do Batman"
  //   }
  //   before(() => {
  //     Sinon.stub(productModels, 'UpdataProductos').resolves(product);
  //   })
  //   after(() => {
  //     productModels.UpdataProductos.restore()
  //   })
  //   it('testa se case sucesso UpdataProductos', async () => {
  //     const result = await productServices.UpdataProductos(id);
  //     console.log(result,'OOOOO')
  //     expect(result[0]).to.be.a('object');
  //   })
    // it('testa se returna chaves code e error', async () => {
    //   const result = await productServices.UpdataProductos(product);
    //   expect(result).to.have.keys('data','code');
    // })
    // it('testa se returna chaves message', async () => {
    //   const result = await productServices.ValidCadastryProducts(product);
    //   expect(result.error).to.have.keys('message');
    // })
    // it('testa se returna chaves code status 201', async () => {
    //   const result = await productServices.UpdataProductos(product);
    //   expect(result.code).to.equal(201);
    // })
  // })
});
    // describe('testa função getId caso erro', () => {
    //   before(() => {
    //     const product = []
    //     sinon.stub(productModels, 'getId').resolves(product)
    //   })
    //   after(() => {
    //     productModels.getId.restore()
    //   })
    //   it('testa se caso erro de getId', async () => {
    //     const result = await productServices.getId()
    //     console.log(result);
    //     expect(result).to.be.a('object');
    //     expect(result).to.have.key('data','code');
    //   })

    // })
