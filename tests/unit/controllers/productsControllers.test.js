const sinon = require('sinon');
const { expect } = require('chai');

const productsS = require('../../../services/productsS');
const productsC = require('../../../controllers/productsC');

describe('Testing products in layer Controllers', () => {
  describe('Testing getAll response from DB', () => {
    const req = {};
    const res = {};
    const product = {
      "id": 1,
      "name": "Martelo de Thor"
    };

    beforeEach(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsS, 'getAll').resolves(product);
    });

    afterEach(async () => {
      productsS.getAll.restore();
    });

    it('The response calls the method "status" with code 200', async () => {
      await productsC.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('The response calls the method "json" returning an object', async () => {
      await productsC.getAll(req, res);
      expect(res.json.calledWith(sinon.match.object)).to.be.true;
    });
  });

  describe('Testing getById response from DB', () => {
    const req = { params: { id: 1 } };
    const res = {};
    const product = {
      "id": 1,
      "name": "Martelo de Thor"
    };

    beforeEach(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsS, 'getById').resolves(product);
    }
    );

    afterEach(async () => {
      productsS.getById.restore();
    }
    );

    it('The response calls the method "status" with code 200', async () => {
      await productsC.getById(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    }
    );

    it('The response calls the method "json" returning an object', async () => {
      await productsC.getById(req, res);
      expect(res.json.calledWith(sinon.match.object)).to.be.true;
    }
    );

  });


    describe('Add a new product to DB', () => {
    const req = {};
    const res = {};
      req.body = {
      name: 'Example product',
    };

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsS, 'postProduct').resolves(true);
    });

    afterEach(() => { 
      productsS.postProduct.restore();
    });

    it('The response calls the method "status" with code 201', async () => {
      await productsC.postProduct(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    });
      
    it('The response calls the method "json" with an object', async () => {
      await productsC.postProduct(req, res);
      expect(res).to.be.an('object');
    });
  });
})