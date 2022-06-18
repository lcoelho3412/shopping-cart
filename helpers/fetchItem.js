const fetchItem = async (barcode) => {
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${barcode}`;
  try {
    const response = await fetch(ENDPOINT);
    const results = await response.json();
    return results;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
