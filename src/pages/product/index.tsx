import { Navbar } from "@/components";
import { ProductPageProps } from "@/types";
import React from "react";
import { useProduct } from "./useProduct";

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const product = useProduct(props);

  return <Navbar />;
};

export default ProductPage;
