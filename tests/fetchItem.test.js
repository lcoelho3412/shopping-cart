require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function')
  });

  it('Testa se "fetch" é chamado quando fetchItem recebe um argumento', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se ENDPOINT está correto', async () =>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=MLB1615760527')
  })

 /*  it('Testa se o retorno da função fetchItem é uma estrutura de dados igual ao objeto item', async () =>{
    await fetchItem('MLB1615760527');
    expect(fetch).toEqual(item);
  }) */

  it('Testa se ao chamar a função fetchItem sem argumento retorna mensagem de erro', async () =>{
    try {
      await fetchItem()
      
    } catch (error) {
      expect(error).toBe('You must provide an url')
      
    }
  })
});

