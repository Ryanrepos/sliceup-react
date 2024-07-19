import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
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

export default function OrdersPage() {
// useState("1") => bu 1 degani page ochilganda ko'rinadigan Tab index
  const [value, setValue] = useState("1");

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
                      <div className={"order-user-img"}>
                        <img src={"/icons/default-user.svg"} className={"order-user-avatar"} />
                        <div className={"order-user-icon-box"}>
                          <img src={"/icons/user-badge.svg"} className={"order-user-prof-img"} />
                        </div>
                      </div>
                      <span className={"order-user-name"}>Ryan</span>
                      <span className={"order-user-prof"}>USER</span>
                  </Box>
                  <Box className={"liner"}>
                    <Divider height="2" width="300" bg="#E3C08D" />
                  </Box>
                  <Box className={"order-user-address"}>
                    <div style={{display: "flex"}}>
                      <LocationOnIcon/>
                    </div>
                    <span>Busan, South Korea</span>
                  </Box>
                </Box>
                <Box className={"order-price"}>
                  Checkout
                </Box>
            </Stack>
        </Container>
      </div>
    );

  }