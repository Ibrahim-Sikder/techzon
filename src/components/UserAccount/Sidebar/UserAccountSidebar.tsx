import {
  HiOutlineLogin,
  HiOutlineLocationMarker,
  HiOutlineUpload,
  HiOutlineUser,
  HiOutlineHome,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import "./Sidebar.css";
import Link from "next/link";
const UserAccountSidebar = () => {
  return (
    <div>
      <div className="profileWrap  wrapContainer">
        <aside className="sidebar">
          <div className="sidebarWrap">
            <Link href="/my-account">
              <div className="orderItems">
                <HiOutlineHome className="" size={20} />
                <span className="ml-3">My Account </span>
              </div>
            </Link>

            <Link href="/my-account/order">
              <div className="orderItems">
                <HiOutlineShoppingCart size={20} />
                <span className="ml-3">My Order</span>
              </div>
            </Link>
            <Link href="/my-account/address">
              <div className="orderItems ">
                <HiOutlineLocationMarker size={20} />
                <span className="ml-3">Address </span>
              </div>
            </Link>
            <div className="orderItems">
              <HiOutlineUpload size={20} />
              <span className="ml-3"> My Wishlist</span>
            </div>
            <div className="orderItems">
              <HiOutlineUser size={20} />
              <span className="ml-3">My Reviews</span>
            </div>
            <Link href="/my-account/cancel">
              <div className="orderItems">
                <HiOutlineUser size={20} />
                <span className="ml-3">My Returns & Cancellations</span>
              </div>
            </Link>
            <div className="orderItems">
              <HiOutlineLogin size={20} />
              <span className="ml-3">Log Out </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default UserAccountSidebar;
