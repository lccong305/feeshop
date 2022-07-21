import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from "../components/Helmet";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.auth.login.currentUser);

  const navigate = useNavigate();

  let toTal = 0;
  cartItems.map((item) => {
    toTal += item.quantity * item.data.price;
    return toTal;
  });

  const handleClick = () => {
    navigate("/profile");
    console.log("click to buy");
  };
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>
              Bạn đang có <span> {cartItems.length} </span>sản phẩm trong giỏ
              hàng
            </p>
            <div className="cart__info__txt__price">
              <span>Thành tiền: {toTal}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            {currentUser ? (
              <Button size="block" onClick={handleClick}>
                Đặt hàng
              </Button>
            ) : (
              <Button size="block" onClick={handleClick}>
                Đăng nhập để đặt hàng
              </Button>
            )}
            <Link to="/catalog">
              <Button size="block" disabled={true}>
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
