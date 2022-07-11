import React, { useEffect } from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PolicyCard from "../components/PolicyCard";
import heroSliderData from "../assets/fake-data/hero-slider";
import { Link } from "react-router-dom";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Section";

const Home = () => {
  console.log("Page home_");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const products = useSelector((state) => state.product.products);

  const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
  };

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
            {getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                name={item.title}
                img1={item.image}
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

export default Home;
