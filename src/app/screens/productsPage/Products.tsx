import React, { ChangeEvent, useEffect, useState } from "react";
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
import { Product, ProductInquiry } from "../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import { serverApi } from "../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../lib/types/search";

const logos = [
    { productName: "Gurme", imagePath: "/img/gurme.webp" },
    { productName: "Seafood", imagePath: "/img/seafood.webp" },
    { productName: "Sweets", imagePath: "/img/sweets.webp" },
    { productName: "Doner", imagePath: "/img/doner.webp" },
];
    
// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
  });
  
const productsRetriever = createSelector(retrieveProducts, (products) => ({products}))
  

interface ProductsProps {
    onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps){
    const {onAdd} = props;

    const {setProducts} = actionDispatch(useDispatch());
    const {products} = useSelector(productsRetriever);
    const [productSearch, setProductSearch ]= useState<ProductInquiry>({page: 1,
      limit: 8,
      order: "createdAt",
      productCollection: ProductCollection.DISH,
      search: "",});
  
      const [searchText, setSearchText] = useState<string>("");
      const history = useHistory();
  
    useEffect(() => {
      const product = new ProductService();
      product.getProducts(productSearch)
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  
    }, [productSearch]);
  
    useEffect(() => {
      if(searchText === "") {
        productSearch.search = "";
        setProductSearch({...productSearch});
      }
    }, []);
  
    // HANDLERS
  
    const searchCollectionHandler = (collection: ProductCollection) => {
      productSearch.page = 1;
      productSearch.productCollection = collection;
      setProductSearch({...productSearch});
    };
  
    const searchOrderHandler = (order: string) => {
      productSearch.page = 1;
      productSearch.order = order;
      setProductSearch({...productSearch});
    };
  
    const searchProductHandler = () => {
      productSearch.search = searchText;
      setProductSearch({...productSearch});
  
    };
  
    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
      productSearch.page = value;
      setProductSearch({...productSearch});
  
    };
  
    const chooseDishHandler = (id: string) => {
      history.push(`/products/${id}`)
  
    }
    return(
        <div className="products">
            <Container>
                <Stack className="products-big-box">
                    <Stack className="products-subject">
                        <Stack className="products-title-box">
                            <Box className={"products-title"}>Our Menu</Box>
                            <Box className="search-container">
                                <TextField
                                    className="search-input"
                                    fullWidth
                                    placeholder="Search menu"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                      if(e.key === "Enter") searchProductHandler();
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Button
                                                    className="search-button"
                                                    variant="contained"
                                                    color="primary" onClick={searchProductHandler}
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
                                <Button variant={"contained"}  color={productSearch.order === "createdAt" ?"primary" : "secondary"} className={"order"}
                                 onClick={() => searchOrderHandler("productPrice")}
                                >
                                    NEW
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"}  color={productSearch.order === "productViews" ?"primary" : "secondary"}
                            className={"order"}
                            onClick={() => searchOrderHandler("productViews")}>
                                    PRICE
                                </Button>
                            </Box>
                            <Box> 
                                <Button variant={"contained"} color={productSearch.order === "productViews" ?"primary" : "secondary"}
                            className={"order"}
                            onClick={() => searchOrderHandler("productViews")}>
                                    VIEWS
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                    {/* list */}
                    <Stack className={"list-category-section"}>
                        <Stack className={"product-category"}>
                            <Box>
                                <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.OTHER ? "primary" : "secondary"}
                                className={"order"}
                                onClick={() => searchCollectionHandler(ProductCollection.OTHER)}>
                                    OTHER
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.SALAD ? "primary" : "secondary"}
                                className={"order"}
                                onClick={() => searchCollectionHandler(ProductCollection.SALAD)}>
                                    SALAD
                                </Button>
                            </Box>
                            <Box> 
                                <Button variant={"contained"}  color={productSearch.productCollection === ProductCollection.DRINK ? "primary" : "secondary"}
                                 className={"order"}
                                 onClick={() => searchCollectionHandler(ProductCollection.DRINK)}>
                                    DRINK
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.DESSERT ? "primary" : "secondary"}
                                 className={"order"}
                                 onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}>
                                    DESERT
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.DISH ? "primary" : "secondary"}
                                className={"order"}
                                onClick={() => searchCollectionHandler(ProductCollection.DISH)}>
                                    DISH
                                </Button>
                            </Box>
                        </Stack>
                        <Stack className={"product-wrapper"}>
                        {products.length !== 0 ? (
                           products.map((product: Product) => {
                            const imagePath = `${serverApi}/${product.productImages[0]}`
                            const sizeVolume = 
                                product.productCollection === ProductCollection.DRINK 
                                ? product.productVolume + " litre"
                                : product.productSize + " size";
                        return (
                          <Stack key={product._id} className={"product-card"} onClick={() => chooseDishHandler(product._id)}>
                            <Stack className={"product-img"} sx={{backgroundImage: `url(${imagePath})`}}>
                                <div className="product-sale">{sizeVolume}</div>
                                <div className="shop-btn-background">
                                <Button className={"shop-btn"}
                                    onClick={(e) => {
                                        onAdd({
                                            _id: product._id,
                                            quantity: 1,
                                            name: product.productName,
                                            price: product.productPrice,
                                            image: product.productImages[0],
                                        });
                                        e.stopPropagation();
                                    }}
                                >
                                    <img src={"/icons/shopping-cart.svg"} style={{display: "flex"}} />
                                </Button>
                                </div>
                                <div className={"view-btn-background"}>
                                <Button className={"view-btn"}>
                                    <Badge badgeContent={product.productViews} color="secondary">
                                        <RemoveRedEyeIcon sx={{color: product.productViews === 0 ? "gray" : "white",}}/>
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
                                        <span className="gold">{product.productPrice}</span>
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
                count={products.length != 0
                    ? productSearch.page + 1
                    : productSearch.page
                } 
                page={productSearch.page}
                renderItem={(item) => (
                    <PaginationItem
                    components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                    }}
                    {...item}
                    color={"secondary"}
                    />
                )}
                onChange={paginationHandler}
            />
        </Stack>
                </Stack>
            </Container>
            
            <div className="brands-logo">
               <Stack className={"brands-container"}>
                <Box className={"brands-title"}>
                    Monthly Discount
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