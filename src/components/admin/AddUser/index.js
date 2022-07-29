import "./adduser.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isValidPhoneNumber } from 'react-phone-number-input'
import {
  addProduct,
  closeModal,
  getAllCate,
  getAllProduct,
} from "../../../redux/actions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/Input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PureLoading from "../../Loading/PureLoading";
function AddUser() {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.productModal.value);
  const [phone,setPhone] = useState(null);
  const handleAddProduct = (e) => {
    e.preventDefault();
    var x = document.getElementsByTagName("BODY")[0];
    x.classList.remove("act_body");
    const newProduct = {
    
    };
    addProduct(newProduct, dispatch);
    getAllProduct(dispatch);
  };
  const handleSearch =(e) =>{
    setPhone(e.target.value);
    if(phone.length < 10){
      console.log("error");
    }
    else {
      console.log("good day men");
    }
  }
  const handleClose = (e) => {
    e.preventDefault();
    var x = document.getElementsByTagName("BODY")[0];
    x.classList.remove("act_body");
   
    dispatch(closeModal());
    flag = null;
  };
  const [num, setNum] = useState('');

  const handleNumChange = event => {
    const limit = 11;
    setNum(event.target.value.slice(0, limit));
  };
  const options = [
    {
      id :"1",
      name: "admin",
    },
    { 
      id : "2",
      name: "user",
    },
  ];
  const [roles,setRoles] = useState(['user']);
  const roleshandle = (e) =>{
    roles.push(e.target.value);
    console.log(e.target.value);
  };
  console.log(roles);
  
  return (
    <div className={`addproduct-wrapper ${flag  ? "active" : ""} `}>
    <div className="overlay"></div>
    <div className="edit-content">
      <h2 className="edit-tittle">User Infomation</h2>
      <form method="put" encType="multipart/form-data">
        <div className="form-group-edit">
          <label> Userame</label>
          <input
            type="text"
            className="product-input-ad"
          />
        </div>
        <div className="form-group-edit">
          <label>Password</label>
          <input
            type="password"
            className="product-input-ad"
          />
        </div>
        <div className="form-group-edit">
          <label>Password Again</label>
          <input
            type="password"
            className="product-input-ad"
          />
        </div>
        <div className="form-group-edit">
          <label>Email</label>
          <input
            type="email"
            className="product-input-ad"
          />
          
        </div>
        <div className="name">
        <div className="form-group-edit" >
          <label>First name</label>
          <input 
            type="text"
            className="product-input-ad"
          />
        </div>
            <div className="form-group-edit" >
          <label>Last name</label>
          <input 
            type="text"
            className="product-input-ad"
          />
        </div>
        </div>
        
        <div className="form-group-edit">
          <label>Phone</label>
          <input 
          className="product-input-ad"
          type="number"
          id="num"
          name="num"
          value={num}
          onChange={handleNumChange}
          />

        </div>
        <div className="form-group-edit" >
          <label>Address</label>
          <input 
            type="text"
            className="product-input-ad"
          />
        </div>
        <div className="form-group-edit">
          <label>Avatar</label>
          <input
            type="file"
            className="product-input-ad"
          />
        </div>
        <div className="form-group-edit" >
          <label>Roles</label>
          <FormControl fullWidth>
              <Select
                value={roles}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={roleshandle}
              >
                {options?.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          
        </div>
        <div className="form-button-edit">
          <button
            type="submit"
            className="btn-add-product"
          
          >
            Add product
          </button>
          <button onClick={handleClose}   >Close</button>
        </div>
      
      </form>
    </div>
  </div>
  )
}

export default AddUser