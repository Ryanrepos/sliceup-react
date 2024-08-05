import axios from "axios";
import { serverApi } from "../lib/config";
import { Product, ProductInquiry } from "../lib/types/product";

class ProductService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
    console.log("Server api:", this.path);
  }

  public async getProducts(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCollection)
        url += `&productCollection=${input.productCollection}`;
      if (input.search) url += `&search=${input.search}`;

      const result = await axios.get(url);
      console.log("getProducts result:", result.data); // Log the fetched data

      return result.data;
    } catch (err) {
      console.log("Error, getProduct:", err);
      throw err;
    }
  }
}

export default ProductService;
