import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import PaymentOffline from "./PaymentOffline";





const Payment = () => {
    return (
        <div className="SelectOptionPayment">
            <b>
            Lựa chọn phương thức thanh toán
            </b>
            <div className="PaymentOffline">
                <Link to="/paymentoffline">
                <Button>
                Payment Offline
                </Button>
                </Link>
            </div>

            <div className="PaymentPaypal">
                <Link to="/paymentpaypal">
                <Button>
                Payment Paypal
                </Button>
                </Link>
            </div>

            <div className="PaymentVNPAY">
            <Link to="/paymentvnpay">
                <Button>
                Payment VNPAY
                </Button>
                </Link>
            </div>
        </div>
    );
};
export default Payment;