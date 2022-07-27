import React, { useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCate, getProductByCategory } from "../../redux/actions";
import Button from "../Button";
import PureLoading from "../Loading/PureLoading";
import "./style.scss";
const SidebarProduct = ({}) => {
  const dispatch = useDispatch();

  const slug_cate = useParams();
  console.log(slug_cate);

  const { getCateFetching, getCateData, getCateError } = useSelector(
    (state) => state.cate.getCate
  );

  const product = useSelector((state) => state.product.products);

  useEffect(() => {
    getAllCate(dispatch);
    dispatch(getProductByCategory(slug_cate.name__cate));
  }, [dispatch]);

  return (
    <>
      <div className="catalog__filterrrrr ">
        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">
            danh mục sản phẩm
          </div>

          <div className="catalog__filter__widget__content">
            {getCateData?.map((item, index) => (
              <div
                key={index}
                className="catalog__filter__widget__content__item"
              >
                <Link to={`../category/${item.name}`}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
        {getCateFetching ? <PureLoading /> : ""}
      </div>
    </>
  );
};

export default SidebarProduct;
