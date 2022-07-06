const sinon = require('sinon');
const { expect } = require('chai');

const productsServices = require('../../../services/productsServices');
const productsControllers = require('../../../controllers/productsControllers');

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
      res.json = sinon.stub().returns(res);
      sinon.stub(productsServices, 'getAll').resolves(product);
    });

    afterEach(async () => {
      productsServices.getAll.restore();
    });

    it('The response calls the method "status" with code 200', async () => {
      await productsControllers.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('The response calls the method "json" returning an object', async () => {
      await productsControllers.getAll(req, res);
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
      sinon.stub(productsServices, 'getById').resolves(product);
    }
    );

    afterEach(async () => {
      productsServices.getById.restore();
    }
    );

    it('The response calls the method "status" with code 200', async () => {
      await productsControllers.getById(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    }
    );

    it('The response calls the method "json" returning an object', async () => {
      await productsControllers.getById(req, res);
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
      sinon.stub(productsServices, 'postProduct').resolves(true);
    });

    afterEach(() => { 
      productsServices.postProduct.restore();
    });

    it('The response calls the method "status" with code 201', async () => {
      await productsControllers.postProduct(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    });
      
    it('The response calls the method "json" with an object', async () => {
      await productsControllers.postProduct(req, res);
      expect(res).to.be.an('object');
    });
  });
})