require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts === 'function').toEqual(true);
  })

  it('Testa se "fetch" é chamado quando fetchProducts recebe um argumento', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se ENDPOINT está correto', async () =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('Testa se ao chamar a função fetchProducts sem argumento retorna mensagem de erro', async () =>{
    /* await expect(fetchProducts()).rejects.toMatch('You must provide an url') */
    try {
      const qualquer = await fetchProducts()
      
    } catch (error) {
      expect(error).toBe('You must provide an url')
      
    }
  })
});

/* Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'. */