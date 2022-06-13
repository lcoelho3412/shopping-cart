const fetchItem = async (barcode) => {
  // seu código aqui
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${barcode}`;

    const response = await fetch(ENDPOINT);
    const results = await response.json();
    return results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
