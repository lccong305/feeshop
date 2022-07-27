import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getProductByCategory } from "../../redux/actions";
import InfinityList from "../components/InfinityList";
import PureLoading from "../components/Loading/PureLoading";
import { getProductByCategory } from "../redux/actions";

const Category = () => {
  const slug_cate = useParams();
  const dispatch = useDispatch();

  const { cateProduct_fetching, cateProduct_data } = useSelector(
    (state) => state.product.cateProduct
  );

  console.log(cateProduct_fetching);

  useEffect(() => {
    dispatch(getProductByCategory(slug_cate.name__cate));
  }, [dispatch, slug_cate.name__cate]);

  return (
    <div className="category">
      <div className="cate__content">
        <InfinityList data={cateProduct_data} />
        {cateProduct_fetching ? <PureLoading /> : ""}
      </div>
    </div>
  );
};

export default Category;
