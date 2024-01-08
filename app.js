import React from 'react';

const CartWidget = () => {
  const notificationNumber = 5; // Número fijo (hardcoded)

  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i> {/* Se asume el uso de FontAwesome */}
      <span className="notification">{notificationNumber}</span>
    </div>
  );
};

export default CartWidget;

import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
      {/* Aquí podrías incluir el contenido de la lista de elementos */}
    </div>
  );
};

export default ItemListContainer;

import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const Navbar = () => {
  const greeting = '¡Bienvenido a nuestra tienda!'; // Mensaje de saludo

  return (
    <nav className="navbar">
      {/* ... Otros elementos del Navbar ... */}
      <CartWidget />
      <ItemListContainer greeting={greeting} />
    </nav>
  );
};

export default Navbar;

