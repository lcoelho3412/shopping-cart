 const fetchProducts = async (productSearch) => {
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${productSearch}`;
  
    const response = await fetch(ENDPOINT);
    const results = await response.json();
    return results;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}