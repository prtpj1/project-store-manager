const sinon = require('sinon');
const { expect } = require('chai');

const productsM = require('../../../models/productsM');
const productsS = require('../../../services/productsS');

describe('Testing products in layer Services', () => {
  describe('Testing getAll response from DB', () => {
    const products = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América"
      }
    ];

    beforeEach(async () => {
      sinon.stub(productsM, 'getAll').resolves(products);
    });

    afterEach(async () => {
      productsM.getAll.restore();
    });

    it('products.getAll returns an array', async () => {
      const response = await productsS.getAll();
      expect(response).to.be.an('array');
    });
  });
});