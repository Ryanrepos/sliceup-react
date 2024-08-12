import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box, Badge, Avatar, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import Divider from "../../components/divider";
import "../../../css/order.css"
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import { Height } from "@mui/icons-material";
import { CssVarsProvider } from '@mui/joy/styles';
import { Input } from "@mui/joy";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders  } from "./slice";
import { Order } from "../../lib/types/order";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)), 
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)), 
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)), 

});

export default function OrdersPage() {
// useState("1") => bu 1 degani page ochilganda ko'rinadigan Tab index

  const {setPausedOrders, setProcessOrders, setFinishedOrders} = actionDispatch(useDispatch());

  const [value, setValue] = useState("1");

  /** HANDLERS **/
  

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

    return (
      <div className={"order-page"}>
        <Container className={"order-container"}>
            <Stack className={"order-left"}>
              <TabContext value={value}>
                <Box className={"order-nav-frame"}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="PAUSED ORDERS" value={"1"} />
                      <Tab label="PROCESS ORDERS" value={"2"} />
                      <Tab label="FINISHED ORDERS" value={"3"} />
                    </Tabs>
                  </Box>
                </Box>
                <Stack className={"order-main-content"}>
                <TabPanel value="1"><PausedOrders /></TabPanel>
                <TabPanel value="2"><ProcessOrders /></TabPanel>
                <TabPanel value="3"><FinishedOrders /></TabPanel>
                </Stack>
              </TabContext>
            </Stack>

            {/* Order right */}

            <Stack className={"order-right"}>
                <Box className={"order-info-box"}>
                  <Box className={"member-box"}>
                      <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                              <Avatar
                                alt="Remy Sharp"
                                src="/icons/user-badge.svg"
                                style={{ width: 30, height: 30 }} // Inline styles for the badge
                              />
                            }
                          >
                            <Avatar
                              alt="Travis Howard"
                              src="/img/user-pic.jpg"
                              style={{ width: 100, height: 100, borderRadius: "37px" }} // Inline styles for the profile image
                            />
                          </Badge>

                      <span className={"order-user-name"}>Ryan</span>
                      <span className={"order-user-prof"}>USER</span>
                  </Box>
                  <Box className={"liner"} style={{ width: 100, height: 2 }} >
                    <Divider height="2" width="320" bg="#E3C08D" />
                  </Box>
                  <Box className={"order-user-address"}>
                    <div style={{display: "flex"}}>
                      <LocationOnIcon/>
                    </div>
                    <span>Busan, South Korea</span>
                  </Box>
                </Box>
                <Box className={"order-price"}>
                  <CssVarsProvider>
                     <div className={"order-card-number"}>
                     <Input 
                        size="md" 
                        placeholder="1234 5679 9999 0000" 
                        sx={{ width: '100%', height: '100%' }}
                      />
                      </div>
                  </CssVarsProvider>
                  <Box className={"card-validity"}>
                  <CssVarsProvider>
                  <div className={"expire-day"}>
                      <Input 
                        size="md" 
                        placeholder="07/24" 
                        sx={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </CssVarsProvider>
                   <CssVarsProvider>
                   <div className={"cv-number"}>
                      <Input 
                        size="md" 
                        placeholder="CV: 010" 
                        sx={{ width: '100%', height: '100%' }}
                      />
                    </div>
                   </CssVarsProvider>
                  </Box>
                  <CssVarsProvider>
                  <div className={"order-person-name"}>
                  <Input 
                        size="md" 
                        placeholder="Name on your card" 
                        sx={{ width: '100%', height: '100%' }}
                      />
                  </div>
                  </CssVarsProvider>
                  <div className={"visa-button-image"}>
                    <Button>
                      <img src="/img/western-union.svg" alt="" />
                    </Button>
                    <Button>
                      <img src="/img/master-card.svg" alt="" />
                    </Button>
                    <Button>
                      <img src="/img/paypal.svg" alt="" />
                    </Button>
                    <Button>
                      <img src="/img/visa.svg" alt="" />
                    </Button>
                  </div>
                </Box>
            </Stack>
        </Container>
      </div>
    );

  }