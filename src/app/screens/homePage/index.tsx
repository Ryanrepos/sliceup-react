import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), 

});

const popularDishesRetriever = createSelector (
  retrievePopularDishes, 
  (popularDishes) => ({popularDishes})
);

export default function HomePage() {
  
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);

  console.log(

  // Selector: Store => Data --- Selector ning vazifasi storedagi datani 
  // qabul qlib olishdan iborat

  useEffect(() => {
    // Backend server data request => Data

    const result = [
      {
          "_id": "6683f970d759181e2b9771aa",
          "productStatus": "PROCESS",
          "productCollection": "DISH",
          "productName": "shashlik",
          "productPrice": 12,
          "productLeftCount": 23,
          "productSize": "NORMAL",
          "productVolume": 1,
          "productDesc": "eng zori!",
          "productImages": [
              "uploads/products/006f37a1-46c4-4264-9858-20e1959ac023.png"
          ],
          "productViews": 0,
          "createdAt": "2024-07-02T12:58:24.892Z",
          "updatedAt": "2024-07-04T09:47:28.339Z",
          "__v": 0
      },
      {
          "_id": "668396dc30591accd73a64b4",
          "productStatus": "PROCESS",
          "productCollection": "DISH",
          "productName": "plov",
          "productPrice": 13,
          "productLeftCount": 100,
          "productSize": "LARGE",
          "productVolume": 1,
          "productDesc": "",
          "productImages": [
              "uploads/products/6fe2662d-0ef8-416d-bbfc-6c19d006bbe3.jpeg"
          ],
          "productViews": 1,
          "createdAt": "2024-07-02T05:57:48.019Z",
          "updatedAt": "2024-07-25T11:09:39.228Z",
          "__v": 0
      },
      
  ]

    // Slice: Data => Store(Redux) --- buyerda redux storega backend dan 
    // kelgan malumotlarni saqlaymiz
    
    // @ts-ignore
    setPopularDishes(result);
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