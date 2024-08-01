import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

export function HomePage() {

  // Selector: Store => Data --- Selector ning vazifasi storedagi datani 
  // qabul qlib olishdan iborat

  useEffect(() => {
    // Backend server data request => Data



    // Slice: Data => Store(Redux) --- buyerda redux storega backend dan 
    // kelgan malumotlarni saqlaymiz
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