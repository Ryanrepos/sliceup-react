import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import "../../../css/home.css"


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), 
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)), 
});

export default function HomePage() {
  
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());

  useEffect(() => {
    // Backend server data request => Data

    const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productsViews",
      productCollection: ProductCollection.DISH,
    }).then((data) => {
        console.log("data passed here:", data);
        setPopularDishes(data);
    }).catch((err) => console.log(err)) ;

    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
      // productCollection: ProductCollection.DISH,
    }).then((data) => {
        setNewDishes(data);
    }).catch((err) => console.log(err)) ;


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