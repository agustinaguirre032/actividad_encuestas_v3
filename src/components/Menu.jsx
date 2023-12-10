import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <h1 className="menu-title">Encuestas</h1>
      <ul className='menu'>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/encuesta/crear">Crear Encuesta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
