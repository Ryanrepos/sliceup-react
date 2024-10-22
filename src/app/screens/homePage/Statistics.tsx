
import React from "react";

import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
export default function Statistics() {
    return(
        <div className={"static-frame"}>
            <Container>
              <Stack className="static-main">
                <Box className="static-main-title">Why you should choose us</Box>
                <Stack className="info">
                    <Stack className="static-box">
                        <Box className="static-num">50</Box>
                        <Box className="static-text">Branches</Box>
                    </Stack>

                    <Stack className="static-box">
                        <Box className="static-num">10</Box>
                        <Box className="static-text">Experience</Box>
                    </Stack>

                    <Stack className="static-box">
                        <Box className="static-num">50+</Box>
                        <Box className="static-text">Menu</Box>
                    </Stack>

                    <Stack className="static-box">
                        <Box className="static-num">10000+</Box>
                        <Box className="static-text">Clients Daily</Box>
                    </Stack>
                </Stack>
              </Stack>
            </Container>
        </div>
    );
}