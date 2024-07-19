import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
    return(
        <TabPanel value={"2"}>
            <Stack>
                {/* Bu array box soni */}
                {[1, 2, 3].map((ele, index) => {
                    return (
                        <Box key={index} className={"order-main-box"}>
                            <Box className={"order-box-scroll"}>
                                {/* Bu array box ichidagi product soni */}
                                {[1, 2].map((ele2, index2) => {
                                    return (
                                        <Box key={index2} className={"orders-name-price"}>
                                            <div className={"order-img-box"}>
                                            <img src="/img/lavash.webp" className={"order-dish-img"} />
                                            <p className={"title-dish"}>Lavash</p>
                                            </div>
                                            <Box className={"price-box"}>
                                                <p>$9</p>
                                                <img src="/icons/close.svg" />
                                                <p>2</p>
                                                <img src="/icons/pause.svg" alt="" />
                                                <p style={{marginLeft: "15px"}}>$24</p>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Box className={"total-price-box"}>
                                <Box className={"process-box-total"}>
                                    <p>Product price</p>
                                    <p style={{marginLeft: "15px"}}>$22</p>
                                    <img src={"/icons/plus.svg"} style={{marginLeft: "20px"}} />
                                    <p style={{marginLeft: "15px"}}>Deliver cost</p>
                                    <p style={{marginLeft: "15px"}}>$2</p>
                                    <img src={"/icons/pause.svg"} style={{marginLeft: "20px"}} />
                                    <p style={{marginLeft: "15px"}}>Total</p>
                                    <p style={{marginLeft: "15px"}}>$24</p>
                                </Box>
                                <Box className={"process-action-buttons"}>
                                    <p className={"data-compl"}>
                                        {moment().format("YY-MM-DD HH:mm")}
                                    </p>
                                    <Button variant="contained" className={"process-verify-button"}>
                                     VERIFY
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
                { false && (
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                        <img src="/icons/noimage-list.svg" style={{width: "300", height: "300"}} />
                    </Box>
                )}
            </Stack>
        </TabPanel> 
    );
}