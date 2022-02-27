import React from 'react';
import { Link } from 'react-dom';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>Shopazza</div>
        <div>
          <Link to="#">Home</Link>
          <Link to="#">Shop</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </div>
        <div>
          <AiOutlineUser />
          <AiOutlineShoppingCart />
          <AiOutlineSearch />
        </div>
        <div>
          <AiOutlineMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
