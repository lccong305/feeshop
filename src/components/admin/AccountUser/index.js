import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import DataTableGrid from '../DataTableGrid'
import PureLoading from "../../Loading/PureLoading";
import { getAlluser } from "../../../redux/actions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import AddUser from "../AddUser";
import { getAllProduct, openModal } from "../../../redux/actions";
const AccountUser = () => {
    const dataUser = useSelector((state) => state.user.getUser.users);
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(true);
    const handleAddProduct = () => {
      var x = document.getElementsByTagName("BODY")[0];
      x.classList.add("act_body");
      dispatch(openModal(flag));
    };
    const { getUserFetching,getUserError} = useSelector((state) => state.user.getUser);
    const [open,setOpen] = useState(false);
    const [edit,setEdit] = useState(false);
    const [id,setId] = useState(null);
    const [success,setSuccess] = useState(false);
    const mystyle = {
      color: "black",
      padding: "10px",
      fontFamily: "Bodoni MT",
      fontSize : "20px"
    };
    useEffect(() => {
      setSuccess(false);
        dispatch(getAlluser());
      }, [success]);
  
    const columns = [
        {
          name : "ID",
          selector : (row) => row.id,
          sortable : true,
          width : "100px",
        },      
        {
          name: "User name",
          selector: (row) => row.username,
          sortable: true,
          width: "200px",
        },
        {
          name : "Email",
          selector : (row) => row.email,
          sortable :true,
          width :"200px",
        },
        {
          name : "Status",
          sortable : true,
          width : "100px",
          cell : (row) =>[
            <div> {row.status ? "OK" :"BLOCK"} </div>
          ]
        },
        {
          name : "Actions",
          width : "400px",
          cell: (row) => [
            <button
              onClick={() => handleEdit(row.id)}
              className="btn-edit-product-admin btn btn-primary"
            >
              Edit
            </button>,
            <button onClick={() => handleDelete(row.id)}>Delete</button>,
            <>
              <Dialog
                
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description" style={mystyle}>
                    {edit ? "Are you sure you want to block this account?" : "Are you sure you want to delete this account?"}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancle</Button>
                  <Button onClick={handleConfirmed} autoFocus>
                    Sure!
                  </Button>
                </DialogActions>
              </Dialog>
            </>,
          ],

        }
      
        
      ];
      const handleClose = () => {
        setOpen(false);
        setEdit(false);
      };
      const handleConfirmed = () => {
          let _id = JSON.stringify(id);
          if(edit){
            axios({
              method: "POST",
              url: "https://apieshopbasic.herokuapp.com/UserStatus",
              data: _id,
              headers: { "Content-Type": "application/json" },
            }).then((res) => {
              setSuccess(true);
              setOpen(false);
              setEdit(false);
            });
          }
          else {
          axios({
            method: "DELETE",
            url: "https://apieshopbasic.herokuapp.com/User",
            data: _id,
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            setSuccess(true);
            setOpen(false);
          });
        }
      };
      const handleDelete = (id) => {
        setId(id);
        setOpen(true);

      };
      const handleEdit = (id) => {
        setOpen(true);
        setEdit(true);
        setId(id);
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
        data={dataUser}
        highlightOnHover={true}
        subHeader={true}
        subHeaderComponent={[
          <button
          onClick={handleAddProduct}
            className="btn.btn-sm btn-info add-product"
          >
            Add new user
          </button>,
          <input
            type="text"
            className="cc-input form-control"
            placeholder="Search here"
          
          />,
        ]}
      />
       {getUserFetching ? <PureLoading /> : "" }
        <AddUser />
    </div>
    )
}

export default AccountUser