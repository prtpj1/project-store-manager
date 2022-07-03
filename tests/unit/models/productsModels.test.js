const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connections');
const productsM = require('../../../models/productsM');

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
      const response = await productsM.getAll();
      expect(response).to.be.an('object');
    });
    
    it('products.getById returns an object', async () => {
      const response = await productsM.getById();
      expect(response).to.be.an('object');
    });
  });
});