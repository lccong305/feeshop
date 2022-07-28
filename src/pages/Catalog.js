import React, { useCallback, useEffect, useRef, useState } from "react";

import Helmet from "../components/Helmet";
// import CheckBox from "../components/CheckBox";

// import productData from "../assets/fake-data/products";
// import category from "../assets/fake-data/category";
// import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";
import Button from "../components/Button";
// import InfinityList from "../components/InfinityList";
// import Section, { SectionTitle, SectionBody } from "../components/Section";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../components/CheckBox";
import InfinityList from "../components/InfinityList";
import { getAllProduct } from "../redux/actions";
import PureLoading from "../components/Loading/PureLoading";
// import SidebarProduct from "../components/SidebarProduct";
const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const [prdList, setPrdList] = useState(products);
  const [filter, setFilter] = useState(initFilter);

  const updateProducts = useCallback(() => {
    let temp = products;
    if (filter.size.length > 0) {
      console.log(filter.size);
      temp = temp.filter((e) => {
        const check = e.sizes.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setPrdList(temp);
  }, [filter, products]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };
  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");
  const clearFilter = () => {
    setFilter(initFilter);
  };

  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          <div
            className="catalog__filter__close"
            onClick={() => showHideFilter()}
          >
            <AiOutlineClose />
            close
          </div>
          <div className="catalog__filter__widget"></div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">kích cỡ</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button onClick={clearFilter} size="sm">
                xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className="catalog__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()}>
            bộ lọc
          </Button>
        </div>
        <div className="catalog__content">
          {<InfinityList data={prdList} />}
        </div>
      </div>
      {loading ? <PureLoading /> : ""}
    </Helmet>
  );
};

// prdList.map((item, index) => (
//   <ProductCard
//     key={index}
//     name={item.title}
//     img1={item.image}
//     price={Number(item.price)}
//     slug={item.id}
//   />
// ))
export default Catalog;
