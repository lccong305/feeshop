import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  editProduct,
  closeModal,
  getDetailProduct,
} from "../../../redux/actions";
import "./edit.scss";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.productModal.value);
  const prd = useSelector((state) => state.product.product_detail);
  // const { isSuccess } = useSelector((state) => state.adminproduct.addProduct);

  const [_id, set_Id] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (id !== null) {
      dispatch(getDetailProduct(id));
    } else {
      return;
    }
  }, [id]);

  useEffect(() => {
    set_Id(prd.id);
    setName(prd.name);
    setPrice(prd.price);
    setDesc(prd.shortDes);
    setImage(prd.image);
    setCategory(prd.categoryName);
  }, [id, prd]);

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  const handleFileImage = (e) => {
    let file = e.target.files[0];
    setImage(file);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    let _image = undefined;
    if (typeof image === "string") {
      _image = prd.image;
    } else {
      _image = image;
    }

    let productEdited = {
      id: _id,
      name: name,
      price: price,
      shortDes: desc,
      file: _image,
      categoryName: category,
    };
    editProduct(id, productEdited, dispatch, navigate);
  };
  return (
    <div
      className={`edit-wrapper ${
        Object.entries(prd).length === 0 || id === null || id === true
          ? ""
          : "active"
      }`}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group-edit">
            <label>Price</label>
            <input
              type="text"
              className="product-input-ad"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group-edit">
            <label>Category</label>
            <input
              type="text"
              className="product-input-ad"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group-edit">
            <label>Description</label>
            <input
              type="text"
              className="product-input-ad"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-group-edit">
            <label>Image</label>
            <img src={prd.image} className="product-input-img" />
            <input
              type="file"
              className="product-input-ad"
              onChange={handleFileImage}
            />
          </div>
          <div className="form-button-edit">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleEdit(e)}
            >
              Edit
            </button>
            <button onClick={(e) => handleClose(e)}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
