import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';



const NavBar = () => {
  return (
    <AppBar position="static" className='header-primary'>
    <Toolbar>
        <div className='container-logo'>
            <h1>NFTxHype</h1>
        </div>
        <ul className='navbar'>
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/products/:id'}>Item Details</Link>
            </li>
            <li>
                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Rare NFT</Button>
            </li>
            <li>
                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Contacto</Button>
            </li>
        </ul>
        <CartWidget />
    </Toolbar>
  </AppBar>
  )
} 


export default NavBar;