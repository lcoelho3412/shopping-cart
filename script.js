const sectionIAmYourFather = document.querySelector('.items');
const sectionOl = document.querySelector('.cart__items');
const trashCollector = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const addProducts = async (product) => {
  const resultFromFetchFunc = await fetchProducts(product);
  return resultFromFetchFunc.results.forEach((key) => {
    const objectFromData = {
      sku: key.id,
      name: key.title,
      image: key.thumbnail,
    };
    const sectionCreationism = createProductItemElement(objectFromData);
    sectionIAmYourFather.appendChild(sectionCreationism);
  });
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProduct = async () => {
  const addBttn = document.querySelectorAll('.item__add');
  addBttn.forEach((key) => {
    key.addEventListener('click', async () => {
      const skuGet = key.parentElement.firstElementChild.innerHTML;
      const { id, title, price } = await fetchItem(skuGet);
      const product = createCartItemElement({
        sku: id,
        name: title,
        salePrice: price,
      });
      const productFather = document.querySelector('.cart__items');
      productFather.appendChild(product);
    });
  });
};

const emptyCart = () => {
  trashCollector.addEventListener('click', () => {
    sectionOl.innerHTML = '';
    localStorage.clear();
  });
};

window.onload = async () => {
  await addProducts('computador');
  addProduct();
  emptyCart();
};
