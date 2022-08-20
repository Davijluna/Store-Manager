const { expect } = require('chai');
const sinon = require('sinon');

const productServices = require('../../../services/productServices');
const productController = require('../../../controllers/productController');

describe('teste de productServices', () => {
  describe('teste de productServices de função getAll', () => {
    const result = {
      data: [
        { "id": 1, "name": "Martelo de Thor" },
      ],
      code: 200,
    }
    const req = {};
    const res = {};
    before(async () => {
      sinon.stub(productServices, 'getAll').resolves(result)
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      // const next = sinon.stub().returns();
    })
    after(async () => {
      productServices.getAll.restore()
    })
    it('retorna status 200 e todos os produtos', async () => {
      await productController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(result.data)).to.be.true;
    });
    
    
  });//
  describe('teste de productServices de função getAll caso falha', () => {
    const result = {
      data: [],
      code: 404,
    }
    const req = {};
    const res = {};
    before(async () => {
      sinon.stub(productServices, 'getAll').resolves(result)
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      // const next = sinon.stub().returns();
    })
    after(async () => {
      productServices.getAll.restore()
    })
    it('testa o que retorna em caso de falha', async () => {
      await productController.getAll(req, res);
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith(result.data)).to.be.true;
    });
  })

  describe('testa função geId', () => {
    const product = {
      data: [{
        "id": 1,
        "name": "Martelo de Thor"
      }],
      code:200
    
    }
    const req = {};
    const res = {};
    before(async () => {
      sinon.stub(productServices, 'getId').resolves(product);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });
    after(async () => {
      productServices.getId.restore()
    });
    it('testa o que restorna em caso de sucesso', async () => {
      await productController.getId(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(product.data)).to.be.true;
    });
  });

  // describe('teste de productServices de função getId', () => {
  //   const result = {
  //     data: { id: 1, name: "Martelo de Thor" },
  //     code: 200,
  //   }

  //   const res = {};
  //   const req = {};

  //   before(async () => {
  //     req.params = { id: 1 };
  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub().returns();
  //     sinon.stub(productServices, "getId").resolves(result);
  //   });

  //   after(async () => {
  //     productServices.getId.resolves();
  //   })

  //   it('testando status e json de geId', async () => {
  //     await productController.getId(req, res);
  //     expect(res.status.calledWith(200)).to.be.true
  //     expect(res.status.calledWith(resul
});
