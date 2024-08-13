import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../lib/types/product";
import { serverApi } from '../../lib/config';
import { Order, OrderItem } from "../../lib/types/order";

/** REDUX SLICE & SELECTOR **/
  
  const pausedOrdersRetriever = createSelector (
    retrievePausedOrders, 
    (pausedOrders) => ({pausedOrders})
  );

export default function PausedOrders() {
    const { pausedOrders } = useSelector(pausedOrdersRetriever);

    return(
        <TabPanel value={"1"}>
            <Stack>
                {/* Bu array box soni */}
                {pausedOrders?.map((order: Order) => {
                    return (
                        <Box key={order._id} className={"order-main-box"}>
                            <Box className={"order-box-scroll"}>
                                {/* Bu array box ichidagi product soni */}
                                {order?.orderItems?.map((item: OrderItem) => {
                                    const product: Product = order.productData.filter((ele: Product) => 
                                        item.productId === ele._id
                                    )[0];
                                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                
                                    return (
                                        <Box key={item._id} className={"orders-name-price"}>
                                            <div className={"order-img-box"}>
                                            <img src={imagePath} className={"order-dish-img"} />
                                            <p className={"title-dish"}>{product.productName}</p>
                                            </div>
                                            <Box className={"price-box"}>
                                                <p>${item.itemPrice}</p>
                                                <img src="/icons/close.svg" />
                                                <p>{item.itemQuantity}</p>
                                                <img src="/icons/pause.svg" alt="" />
                                                <p style={{marginLeft: "15px"}}>${item.itemQuantity + item.itemPrice}</p>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Box className={"total-price-box"}>
                                <Box className={"box-total"}>
                                    <p>Product price</p>
                                    <p style={{marginLeft: "15px"}}>${order.orderTotal - order.orderDelivery}</p>
                                    <img src={"/icons/plus.svg"} style={{marginLeft: "20px"}} />
                                    <p style={{marginLeft: "15px"}}>Deliver cost</p>
                                    <p style={{marginLeft: "15px"}}>${order.orderDelivery}</p>
                                    <img src={"/icons/pause.svg"} style={{marginLeft: "20px"}} />
                                    <p style={{marginLeft: "15px"}}>Total</p>
                                    <p style={{marginLeft: "15px"}}>${order.orderTotal}</p>
                                </Box>
                                <Box className={"action-buttons"}>
                                    <Button variant="contained" color={"secondary"}>CANCEL</Button>
                                    <Button variant="contained" color="success">
                                     PAYMENT
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
                {!pausedOrders || 
                    (pausedOrders.length === 0 && (
                    <Box display={"flex"} 
                        flexDirection={"row"} 
                        justifyContent={"center"}
                        >
                        <img src="/icons/noimage-list.svg" style={{width: "300", height: "300"}} />
                    </Box>
                ))}
            </Stack>
        </TabPanel> 
    );
}