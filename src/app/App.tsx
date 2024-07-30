import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { HomePage } from './screens/homePage';
import ProductsPage from './screens/productsPage';
import OrdersPage from './screens/ordersPage';
import UserPage from './screens/userPage';
import { log } from 'console';
import HomeNavbar from './components/headers/HomeNavbar';
import OtherNavbar from './components/headers/OtherNavbar';
import Footer from './components/footer';
import HelpPage from './screens/helpPage';
import '../css/app.css';
import '../css/navbar.css';
import '../css/footer.css';
import Test from './screens/Test';

function App() {

  const location = useLocation();
  console.log("location:", location);

  return (
    <>
     
    {/* Just checking homeNavbar or otherNavbar */}

    {
      location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>
    }

    {/* This is switch condition */}
        <Switch>
          <Route path="/products">
            <ProductsPage/>
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
            {/* <HomePage /> */}
            <Test/>
          </Route>
        </Switch>
        <Footer/>
      </>
  );
}

export default App;
