import React from "react";
import { Box, Button, Container, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
  });

  const productsRetriever = createSelector (
    retrieveProducts, 
    (products) => ({products})
  );

const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

const logos = [
    { productName: "Gurme", imagePath: "/img/gurme.webp" },
    { productName: "Seafood", imagePath: "/img/seafood.webp" },
    { productName: "Sweets", imagePath: "/img/sweets.webp" },
    { productName: "Doner", imagePath: "/img/doner.webp" },
];

export default function Products(){
    return(
        <div className="products">
            <Container>
                <Stack className="products-big-box">
                    <Stack className="products-subject">
                        <Stack className="products-title-box">
                            <Box className={"products-title"}>Burak Restaurant</Box>
                            <Box className="search-container">
                                <TextField
                                    className="search-input"
                                    fullWidth
                                    placeholder="Type here"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Button
                                                    className="search-button"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Search
                                                    <SearchIcon />

                                                </Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                             </Box>
                        </Stack>
                    </Stack>
                    <Stack className="products-buttons">
                        <Stack className="products-buttons-config">
                            <Box>
                                <Button variant={"contained"} color={"primary"} className={"order"}>
                                    NEW
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={"secondary"} className={"order"}>
                                    PRICE
                                </Button>
                            </Box>
                            <Box> 
                                <Button variant={"contained"} color={"secondary"} className={"order"}>
                                    VIEWS
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                    {/* list */}
                    <Stack className={"list-category-section"}>
                        <Stack className={"product-category"}>
                            <Box>
                                <Button variant={"contained"} color={"primary"} className={"order"}>
                                    DISH
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={"secondary"} className={"order"}>
                                    SALAD
                                </Button>
                            </Box>
                            <Box> 
                                <Button variant={"contained"} color={"secondary"} className={"order"}>
                                    DRINK
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={"secondary"} className={"order"}>
                                    DESERT
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={"secondary"} className={"order"}>
                                    OTHER
                                </Button>
                            </Box>
                        </Stack>
                        <Stack className={"product-wrapper"}>
                        {products.length !== 0 ? (
                           products.map((product, index) => {
                        return (
                          <Stack key={index} className={"product-card"}>
                            <Stack className={"product-img"} sx={{backgroundImage: `url(${product.imagePath})`}}>
                                <div className="product-sale">Normal Size</div>
                                <div className="shop-btn-background">
                                <Button className={"shop-btn"}>
                                    <img src={"/icons/shopping-cart.svg"} style={{display: "flex"}} />
                                </Button>
                                </div>
                                <div className={"view-btn-background"}>
                                <Button className={"view-btn"}>
                                    <Badge badgeContent={20} color="secondary">
                                        <RemoveRedEyeIcon sx={{color: 20 ? "gray" : "white",}}/>
                                    </Badge>
                                </Button>
                                </div>
                            </Stack>
                            <Box className={"product-desc"}>
                               <span className={"product-title"}>
                                    {product.productName}
                                </span>
                                <div className={"product-desc"}>
                                    <Stack className="product-ttl">
                                        <span className="gold"> <MonetizationOnIcon/></span>
                                        <span className="gold">{12}</span>
                                    </Stack>
                                </div>
                            </Box>
                          </Stack>
                        );
                    })) : (
                        <Box className={"no-data"}>New products are not available!</Box>
                    )}
                     </Stack>
                    </Stack>
                    {/* Pagination */}
                    <Stack spacing={2} className="product-pagination">
            <Pagination 
                count={3} 
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: 'brown', // Set the color of the pagination items to brown
                        '&.Mui-selected': {
                            backgroundColor: 'brown', // Set the background color of the selected item to brown
                            color: 'white', // Set the text color of the selected item to white
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(165, 42, 42, 0.1)', // Set the background color on hover to a light brown
                        },
                    }
                }} 
            />
        </Stack>
                </Stack>
            </Container>
            
            <div className="brands-logo">
               <Stack className={"brands-container"}>
                <Box className={"brands-title"}>
                    Our Family Brands
                </Box>
                <Stack className={"brands-images"}>
                {logos.length !== 0 ? (
                logos.map((img, index) => (
                    <Stack className={"brands-burak"} sx={{backgroundImage: `url(${img.imagePath})`}}>

                    </Stack>
                ))
                ) : (
                    <Box className={"no-data"}>New products are not available!</Box>
                )}
                </Stack>
               </Stack>
            </div>

            <div className="address">
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"address-title"}>Our Address</Box>
                        <iframe style={{marginTop: "60px", marginBottom: "40px"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1320" height="500"
                        referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}