import React from 'react';

import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from '@mui/joy';

const activeUsers = [
    {memberNick: "Martin", memberImage: "/img/martin.webp" },
    {memberNick: "Justin", memberImage: "/img/justin.webp" },
    {memberNick: "Rose", memberImage: "/img/rose.webp" },
    {memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
    return (
    <div className={"active-users-frame"}>
        <Container>
            <Stack className={"main"}>
                <Box className={"category-title"}>Active Users</Box>
                <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                        {activeUsers.length !== 0 ? (
                            activeUsers.map((ele, index) => {
                                return (
                                    <Stack className={"card"}>
                                        <img src={ele.memberImage} />
                                        <div className={"card-name"}>{ele.memberNick}</div>
                                    </Stack>
                                );
                            }) ) : (<Box className={"no-data"}> No Active Users!</Box>)}
                    </CssVarsProvider>
                </Stack>
            </Stack>
        </Container>
    </div>
    );
}