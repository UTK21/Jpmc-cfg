import React from 'react';
import { Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Navbar_Admin from './Navbar_Admin';

export const Layout_Admin = () => {
  return (
    <>
         <Navbar_Admin />
         <Outlet />
    </>
  )
}
