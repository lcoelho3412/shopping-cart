const saveCartItems = (itemSavedInCart) => localStorage.setItem('cartItems', itemSavedInCart);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
