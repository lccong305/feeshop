import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import ProductInfo from "../components/ProductInfo";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import { getDetailProduct } from "../redux/actions";
// getAllProduct
const Product = () => {
  const slug = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailProduct(slug.id));
  }, [slug.id, dispatch]);

  const product_detail = useSelector((state) => state.product.product_detail);
  const products = useSelector((state) => state.product.products);

  const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
  };
  const relatedProducts = getProducts(4);

  return (
    <Helmet title={product_detail.title}>
      <Section>
        <SectionBody>
          <ProductInfo product={product_detail} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image}
                name={item.title}
                price={Number(item.price)}
                slug={item.id}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
