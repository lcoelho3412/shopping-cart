require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts === 'function').toEqual(true);
  })

  it('Testa se "fetch" é chamado quando fetchProducts receb um argumento', async () => {
    expect.assertions(1);
    await expect(fetchProducts('computador')).toBeCalled();
  })
 
});
