import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../redux/actions'

import Button from './Button'

import ProductInfo from './ProductInfo'

// import productData from '../assets/fake-data/products'

const ProductViewModal = () => {

    const dispatch = useDispatch()
    const [product, setProduct] = useState(undefined)

    const productData = useSelector((state) => state.product.products)
    const productSlug = useSelector((state) => state.productModal.value)

    const getProductBySlug = (slug) => productData.find((e) => e.id === slug);

    useEffect(() => {
        setProduct(getProductBySlug(productSlug))
    }, [productSlug]);

    return (

        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                {
                    product === undefined ? '' : <ProductInfo product={product} />
                }
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"
                        onClick={() => dispatch(closeModal())}
                    >
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal