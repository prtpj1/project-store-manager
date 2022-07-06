const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/productsModels');
const productsServices = require('../../../services/productsServices');

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
      sinon.stub(productsModels, 'getAll').resolves(products);
    });

    afterEach(async () => {
      productsModels.getAll.restore();
    });

    it('products.getAll returns an array', async () => {
      const response = await productsServices.getAll();
      expect(response).to.be.an('array');
    });
  });

    describe('Add a new product to DB', () => {
      const mockPayLoadProduct = {
      name: 'Example product',
      };
      const productID = 1;
      
      beforeEach(() => {
        sinon.stub(productsModels, 'postProduct').resolves({id: productID});
      });

      afterEach(() => { 
        productsModels.postProduct.restore();
    });

    it('The response returns an object', async () => {
      const response = await productsServices.postProduct(mockPayLoadProduct);
      expect(response).to.be.an('object');
    });

      it('the object with the new product has a "id"', async () => {
        const response = await productsServices.postProduct(mockPayLoadProduct);
        expect(response).to.have.property('id');
      });
  });
});