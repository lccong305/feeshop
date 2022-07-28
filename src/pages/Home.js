import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import { getAllProduct } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  // const loading_product = useSelector((state) => state.product.loading);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getAllProduct(dispatch);
  }, [dispatch]);

  const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
  };

  let skeleton = [{}, {}, {}, {}];

  return (
    <Helmet title="Home">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard name={item.name} description={item.description} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>San pham ban chay</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {loading && skeleton.map(() => <ProductCard.Loading />)}
            {!loading &&
              getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  name={item.title}
                  img1={item.image}
                  price={Number(item.price)}
                  slug={item.code}
                />
              ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* {loading_product ? <PureLoading /> : ""} */}
    </Helmet>
  );
};

export default Home;
