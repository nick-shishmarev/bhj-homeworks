const cart = document.querySelector('.cart');
const decreasBtns = document.querySelectorAll('.product__quantity-control_dec');
const increasBtns = document.querySelectorAll('.product__quantity-control_inc');
const btnsAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const cartItems = [];

if ('cart' in localStorage) {
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    cartItems.forEach(item => {
        createCartItem(item);
    })
} else {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

increasBtns.forEach(item => {
    const prod = item.closest('.product');
    const quantity = prod.querySelector('.product__quantity-value');
    item.addEventListener('click', (e) => {
        quantity.textContent = Number(quantity.textContent) + 1;
    })
})

decreasBtns.forEach(item => {
    const prod = item.closest('.product');
    const quantaty = prod.querySelector('.product__quantity-value');
    
    item.addEventListener('click', (e) => {
        if (Number(quantaty.textContent) > 1) {
            quantaty.textContent = Number(quantaty.textContent) - 1;
        }
    })
})

btnsAdd.forEach(item => {
    const product = item.closest('.product');

    item.addEventListener('click', (e) => {
        const cartItem = {
            id: product.dataset.id,
            img: product.querySelector('.product__image').src,
            qty: Number(product.querySelector('.product__quantity-value').textContent),
        }

        addProductToCart(cartItem);
    })
})

function addProductToCart(obj) {
    const productsInCart = [...document.querySelectorAll('.cart__product')];

    const index = productsInCart.findIndex(product => product.dataset.id === obj.id);

    if (index > -1) {
        let count = Number(productsInCart[index].querySelector('.cart__product-count').textContent);
        obj.qty += count;
        productsInCart[index].querySelector('.cart__product-count').textContent = obj.qty;
        cartItems[index].qty = obj.qty;
        localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
        createCartItem(obj);
    }
}

function createCartItem(obj) {
    const productItem = document.createElement('div');
    productItem.classList.add('cart__product');
    productItem.dataset.id = obj.id;

    const productImg = document.createElement('img');
    productImg.classList.add('cart__product-image');
    productImg.src = obj.img;

    const productQty = document.createElement('div');
    productQty.classList.add('cart__product-count');
    productQty.textContent = obj.qty;

    const productRemove = document.createElement('a');
    productRemove.classList.add('cart__product-remove');
    productRemove.innerHTML = '&times';

    cartProducts.append(productItem);
    productItem.append(productImg);
    productItem.append(productQty);
    productItem.append(productRemove);
    
    cartItems.push(obj);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    cart.classList.add('cart_visible');

    productRemove.addEventListener('click', (e) => {
        e.preventDefault();
        let id = productItem.dataset.id;
        let index = cartItems.findIndex(item => item.id === id);
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        productItem.remove();
        
        if (cartItems.length === 0) {
            cart.classList.remove('cart_visible');
        }
    }, {once: true})
}