// import { Button } from "@mui/material";
// import React from "react";
// import styled from "styled-components";

// const TextField = styled.input`
 
//   display:block;
// `;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";



export default function PaymentOffline() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 'ch' },
      }}
      noValidate
      autoComplete="off"
        
    >  

<div className="CheckOut">   

            <div className="Info">

                <div className="InfoPayment">
                    <b>Thông tin nhận hàng</b>
                </div>
                <div className="InfoPayment">
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </div>
                <div className="InfoPayment">
                    <TextField id="outlined-basic" label="Họ và tên" variant="outlined" />
                </div>
                <div className="InfoPayment">
                    <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" />
                </div>
                <div className="InfoPayment">
                    <TextField id="outlined-basic" label="Địa chỉ" variant="outlined" />
                </div>

            </div>

            <div className="Shipping">
                
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        <b>
                        Hình thức vận chuyển 
                        </b>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                    <FormControlLabel value="female" control={<Radio />} label="Thanh toán khi nhận hàng" />
                    {/* <FormControlLabel value="male" control={<Radio />} label="Paypal" />
                    <FormControlLabel value="other" control={<Radio />} label="VNPAY" /> */}
                </RadioGroup>
                </FormControl>
            </div>

            <div className="Total"> 
                <div className="Total_Item">
                    <b>
                    Đơn hàng
                    </b>
                </div>
                <div className="Total_Item">
                    Tổng cộng:
                </div> 
                <div className="Total_Item">
                    <Link to="/ordered">
                    <button className="Total_Item">
                        Đặt hàng
                    </button>
                    </Link>
                    
                </div>           
            </div>
        
</div>
   
    </Box>
  );
}



