import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../imgs/logo10.png';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feed' className='nav-links' onClick={closeMobileMenu}>
                Feed
              </Link>
            </li>
            <li>
              <Link
                to='/cadastro'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <i class="far fa-user"></i>
                CADASTRAR
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CADASTRO</Button> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;