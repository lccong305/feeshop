import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { BsTrash } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { decrementItemCart, incrementItemCart, removeItemCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
const CartItem = ({ item }) => {
    const itemRef = useRef(null)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(item.quantity)
    const [productCart, setProductCart] = useState(item)

    useEffect(() => {
        setQuantity(item.quantity)
        setProductCart(item)
    }, [item])

    const handleDecrementQuantity = (id) => {
        if (quantity <= 1) {
            dispatch(removeItemCart(id))
        }
        dispatch(decrementItemCart(id))
    }
    return (
        <div className="cart__item" ref={itemRef}>
            <div className="cart__item__image">
                <img src={productCart.data.image} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${item.id}`}>
                        {`${productCart.data.name} `}
                    </Link>
                </div>
                <div className="cart__item__info__price">
                    {(productCart.data.price)}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn"
                            onClick={() => handleDecrementQuantity(productCart.data.id)}
                        >
                            <AiOutlineMinus />
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn"
                            onClick={() => dispatch(incrementItemCart(productCart.data.id))}
                        >
                            <AiOutlinePlus />
                        </div>
                    </div>
                </div>
                <div className="cart__item__del" onClick={() => dispatch(removeItemCart(productCart.data.id))}>
                    <BsTrash />
                </div>
            </div>
        </div>
    )
}

export default CartItem