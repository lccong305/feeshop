import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct, openModal } from "../../../redux/actions";
import ProductViewModal from "../../ProductViewModal";
import DataTableGrid from "../DataTableGrid";
import EditProduct from "../EditProduct";
import "./product.scss";
import { v4 as uuidv4 } from "uuid";

const Product = () => {
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const dataUser = useSelector((state) => state.product.products);
  const columns = [
    {
      name: "Name product",
      selector: (row) => row.title,
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
      selector: (row) => row.description,
      width: "200px",
    },
    {
      name: "Image",
      selector: (row) => <img width={50} height={50} src={row.image} />,
      width: "100px",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      width: "200px",
    },

    {
      name: "Action",
      width: " 400px",

      cell: (row) => [
        <button
          onClick={() => handleEdit(row.id)}
          className="btn-edit-product-admin btn btn-primary"
        >
          Edit
        </button>,
        <button
          onClick={() => handleDelete(row.id)}
          className="btn-edit-product-admin btn btn-primary"
        >
          Delete
        </button>,
      ],
    },
  ];

  const handleEdit = (id) => {
    dispatch(openModal(id));
  };
  const handleDelete = (id) => {
    alert(`Item delete id: ${id}`);
  };

  const handleSearch = (e) => {
    setSearchInputValue(e.target.value);
  };
  useEffect(() => {
    setFilterProduct(dataUser);
    const result = dataUser.filter((item) =>
      item.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilterProduct(result);
  }, [searchInputValue]);
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
        data={filterProduct.length > 0 ? filterProduct : dataUser}
        highlightOnHover={true}
        subHeader={true}
        subHeaderComponent={
          <input
            type="text"
            className="cc-input form-control"
            placeholder="Search here"
            onChange={(e) => handleSearch(e)}
          />
        }
      />
      <EditProduct />
    </div>
  );
};

export default Product;
