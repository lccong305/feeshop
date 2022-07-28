import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, openModal } from "../../../redux/actions";
import AddProduct from "../AddProduct";
import DataTableGrid from "../DataTableGrid";
import EditProduct from "../EditProduct";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./product.scss";
import PureLoading from "../../Loading/PureLoading";

const Product = () => {
  console.log("admin product");

  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);
  const [idDelete, setIdDelete] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const { addProductFetching, addProductSuccess, addProductError } =
    useSelector((state) => state.adminproduct.addProduct);

  const { editProductFetching, editProductSuccess, editProductError } =
    useSelector((state) => state.adminproduct.editProduct);

  const [isLoading, setIsLoading] = useState(!addProductFetching);

  useEffect(() => {
    setIsDelete(false);
    dispatch(getAllProduct());
  }, [
    addProductFetching,
    addProductSuccess,
    editProductFetching,
    editProductSuccess,
    isDelete,
    dispatch,
  ]);

  const columns = [
    {
      name: "Name product",
      selector: (row) => row.name,
      sortable: true,
      width: "200px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      width: "100px",
    },
    {
      name: "Description",
      selector: (row) => row.shortDes,
      width: "200px",
    },
    {
      name: "Image",
      selector: (row) => <img width={50} height={50} src={row.image} />,
      width: "100px",
    },
    {
      name: "Category",
      selector: (row) => row.categoryName,
      width: "200px",
    },
    {
      name: "Sizes",
      selector: (row) =>
        row.sizes.map((item) => (
          <div className="size">
            <div> {item}</div>
          </div>
        )),
    },
    {
      name: "Action",
      width: " 400px",
      cell: (row) => [
        <button
          onClick={() => handleEdit(row.code)}
          className="btn-edit-product-admin btn btn-primary"
        >
          Edit
        </button>,
        <button onClick={() => handleDelete(row.id)}>Delete</button>,
        <>
          {/* <Button variant="outlined" onClick={handleClickOpen}>
            Delete
          </Button> */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Thong bao"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Ban co chac chan muon xoa?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Huy</Button>
              <Button onClick={handleConfirmed} autoFocus>
                Xoa
              </Button>
            </DialogActions>
          </Dialog>
        </>,
      ],
    },
  ];

  const [flag, setFlag] = useState(true);
  const handleAddProduct = () => {
    var x = document.getElementsByTagName("BODY")[0];
    x.classList.add("act_body");
    dispatch(openModal(flag));
  };

  const handleEdit = (id) => {
    dispatch(openModal(id));
  };

  const handleDelete = (id) => {
    setOpen(true);
    setIdDelete(id);
  };

  function handleConfirmed() {
    let _id = JSON.stringify(idDelete);
    axios({
      method: "DELETE",
      url: "https://apieshopbasic.herokuapp.com/Product",
      data: _id,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setIsDelete(true);
      setOpen(false);
    });
  }

  const handleSearch = (e) => {
    setSearchInputValue(e.target.value);
  };

  useEffect(() => {
    setFilterProduct(products);
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilterProduct(result);
  }, [searchInputValue]);

  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="prd-admin-wrap">
      <DataTableGrid
        fixedHeader={true}
        scrollWidth={false}
        pagination={true}
        height="78vh"
        fixedHeaderScrollHeight="78vh"
        title="List product"
        columns={columns}
        data={filterProduct.length > 0 ? filterProduct : products}
        highlightOnHover={true}
        subHeader={true}
        subHeaderComponent={[
          <button
            onClick={handleAddProduct}
            className="btn.btn-sm btn-info add-product"
          >
            Add new product
          </button>,
          <input
            type="text"
            className="cc-input form-control"
            placeholder="Search here"
            onChange={(e) => handleSearch(e)}
          />,
        ]}
      />
      <EditProduct />
      <AddProduct />
      {loading ? <PureLoading /> : ""}
    </div>
  );
};

export default Product;
