import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "../Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions";
// import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to={`/_product/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img1} alt="" />
          <img src={props.img1} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {props.price}
          <span className="product-card__price__old">
            <del>{399000}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          animate={false}
          onClick={() => dispatch(openModal(props.slug))}
        >
          chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img1: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
