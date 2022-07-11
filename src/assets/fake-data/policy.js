import { FaShippingFast } from "react-icons/fa";
import { SiContactlesspayment } from "react-icons/si";
import { FcVip } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";

const policy = [
  {
    name: "Miễn phí giao hàng",
    description: "Miễn phí ship với đơn hàng > 239K",
    icon: <FaShippingFast />,
  },
  {
    name: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
    icon: <SiContactlesspayment />,
  },
  {
    name: "Khách hàng VIP",
    description: "Ưu đãi dành cho khách hàng VIP",
    icon: <FcVip />,
  },
  {
    name: "Hỗ trợ bảo hành",
    description: "Đổi, sửa đồ tại tất cả store",
    icon: <BiSupport />,
  },
];

export default policy;
