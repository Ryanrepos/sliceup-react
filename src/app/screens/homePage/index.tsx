import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../lib/types/member";
import "../../../css/home.css"

/** REDUX SLICE **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), 
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)), 
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)), 

});

export default function HomePage() {
  
  // tepadagi actionDispatchni chaqirib oldik
  const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(useDispatch()); 
  useEffect(() => {
    // Backend server data request => Data

    const product = new ProductService();
    product.getProducts({
      page: 1,  // arguments
      limit: 4,
      order: "productsViews",
      productCollection: ProductCollection.DISH,
    }).then((data) => {
        console.log("data passed here:", data);
        setPopularDishes(data);  // buyerda redux store ga olib kelingan datani yuklayabmiz
    }).catch((err) => console.log(err)) ;

    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
      // productCollection: ProductCollection.DISH,
    }).then((data) => {
        setNewDishes(data);  // buyerda redux store ga olib kelingan datani yuklayabmiz
    }).catch((err) => console.log(err)) ;

    const member = new MemberService();
    member.getTopUsers().then(
      (data) => {
        setTopUsers(data);  // buyerda redux store ga olib kelingan datani yuklayabmiz
      }
    ).catch((err) => console.log(err)) ;

  }, [])


  return <div className="homepage">
     <Statistics/>
     <PopularDishes/>
     <NewDishes/>
     <Advertisement/>
     <ActiveUsers/>
     <Events/>
    </div>
  }