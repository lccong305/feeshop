
import React from "react";
import PaymentOffline from "./PaymentOffline";





const Ordered = () => {
    return (
        <div className="order">
            <div className="InfoPayment">
                Tên
                Sdt
                Địa chỉ
            </div>
            <div className="Shipping">
            Phương thức Thanh toán: Thanh toán khi nhận hàng
            </div>
            <div className="total">
                Tổng cộng:
            </div>
        </div>
    );
};
export default Ordered;