const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connections');
const productsModels = require('../../../models/productsModels');

describe('Testing products in layer Models', () => {
  describe('Testing getAll response from DB', () => {
    
    before(async () => {
      const execute = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    it('products.getAll returns an object', async () => {
      const response = await productsModels.getAll();
      expect(response).to.be.an('object');
    });
    
    it('products.getById returns an object', async () => {
      const response = await productsModels.getById();
      expect(response).to.be.an('object');
    });
  });

  describe('Add a new product to DB', () => {
    const mockPayLoadProduct = {
      name: 'Example product',
    };

    beforeEach(async () => {
      const execute = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(execute);
    })

    afterEach(async () => { 
      connection.execute.restore();
    });

    it('The response returns an object', async () => {
      const response = await productsModels.postProduct(mockPayLoadProduct);
      expect(response).to.be.an('object');
    });

    it('the object with the new product has a "id"', async () => {
      const response = await productsModels.postProduct(mockPayLoadProduct);
      expect(response).to.have.property('id');
    })
  });
});