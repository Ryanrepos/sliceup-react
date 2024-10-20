
import React from "react";

import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
export default function Statistics() {
    return(
        <div className={"static-frame"}>
            <Container>
                <Stack className="info">
                    <Stack className="static-box">
                        <Box className="static-num">50</Box>
                        <Box className="static-text">Branches</Box>
                    </Stack>

                    <Divider height="64" width="2" bg="#FFFFFF"/>

                    <Stack className="static-box">
                        <Box className="static-num">10</Box>
                        <Box className="static-text">Experience</Box>
                    </Stack>

                    <Divider height="64" width="2" bg="#FFFFFF"/>

                    <Stack className="static-box">
                        <Box className="static-num">50+</Box>
                        <Box className="static-text">Menu</Box>
                    </Stack>

                    <Divider height="64" width="2" bg="#FFFFFF"/>

                    <Stack className="static-box">
                        <Box className="static-num">10000+</Box>
                        <Box className="static-text">Clients Daily</Box>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}