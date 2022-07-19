import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, closeModal } from '../../../redux/actions';
import './addproduct.scss';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';



const AddProduct = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [shortDes, setShortDes] = useState("");
    const [image, setImage] = useState(null);
    const [categoryName, setCategoryName] = useState("");
    const [size, setSize] = useState([]);

    const flag = useSelector((state) => state.productModal.value);
    // const products = useSelector((state) => state.product.products);
    const { isSuccess1 } = useSelector((state) => state.adminproduct._addProduct);
    useEffect(() => {
        if (isSuccess1) {
            setName("")
            setPrice("")
            setShortDes("")
            setImage(null)
            setCategoryName("")
            setSize("")
            dispatch(closeModal());
        }
    }, [isSuccess1])

    var Sizes = ['s', 'm', 'l', 'xl']

    const handleClose = (e) => {
        e.preventDefault();
        var x = document.getElementsByTagName("BODY")[0];
        x.classList.remove("act_body");
        setName("")
        setPrice("")
        setShortDes("")
        setImage(null)
        setCategoryName("")
        setSize("")
        dispatch(closeModal());
        flag = null;
    };


    useEffect(() => {
        setName("")
        setPrice("")
        setShortDes("")
        setImage(null)
        setCategoryName("")
        setSize("")
    }, [])
    const handleAddProduct = (e) => {
        e.preventDefault();
        var x = document.getElementsByTagName("BODY")[0];
        // x.classList.remove("act_body");
        const newProduct = {
            name: name,
            price: price,
            shortDes: shortDes,
            file: image,
            categoryName: categoryName
        }
        addProduct(newProduct, dispatch);
    }
    const handleSetSize = () => {
        let sizeWrap = document.querySelector('.product-sizes').classList.toggle('act_size')
    }
    return (
        <div
            className={`addproduct-wrapper ${flag === true ? "active" : ""} `}
        >
            <div className="overlay"></div>
            <div className="edit-content">
                <h2 className="edit-tittle">San pham chi tiet</h2>
                <form method="put" encType="multipart/form-data">
                    <div className="form-group-edit">
                        <label>Product Name</label>
                        <input
                            type="text"
                            className="product-input-ad"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group-edit">
                        <label>Price</label>
                        <input
                            type="text"
                            className="product-input-ad"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                    <div className="form-group-edit">
                        <label>Category</label>
                        <input
                            type="text"
                            className="product-input-ad"
                            onChange={(e) => setCategoryName(e.target.value)}
                            value={categoryName}
                        />

                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group-edit">
                        <label>Description</label>
                        <input
                            type="text"
                            className="product-input-ad"
                            onChange={(e) => setShortDes(e.target.value)}
                            value={shortDes}
                        />
                    </div>
                    <div className="form-group-edit">
                        <label>Size</label>
                        <div className="product-sizes act_size">
                            {
                                Sizes.map((item, index) => (
                                    <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                        <span className="product__info__item__list__item__size">
                                            {item}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="form-group-edit">
                        <label>Image</label>
                        <input
                            type="file"
                            className="product-input-ad"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="form-button-edit">
                        <button
                            type="submit"
                            className="btn-add-product"
                            onClick={handleAddProduct}
                        >
                            Add product
                        </button>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct