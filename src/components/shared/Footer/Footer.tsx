import "./Footer.css";
import { HiEnvelope, HiMiniPhone, HiHome } from "react-icons/hi2";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Container className=''>
        <div className="footer">
          <div>
            <h3 className="text-3xl font-bold"> Trending Products</h3>
           

            <div>
              <div className="flex items-center mt-4">
                <HiEnvelope size={20} className="mr-2" />
                <span>softypy@gmail.com</span>
              </div>
              <div className="flex items-center my-4">
                <HiMiniPhone className="mr-2" size={20} />
                <span>+88-0467484848</span>
              </div>
              <div className="flex items-center my-4">
                <HiHome className="mr-2" size={20} />
                <span>Dhaka,Gulshan,Jabbar Tower 3rd Floor </span>
              </div>
              <div className="flex items-center my-4">
                <FaFacebook className="mr-2" size={20} />
                <FaTwitter className="mr-2" size={20} />
                <FaLinkedin className="mr-2" size={20} />
                <FaInstagramSquare className="mr-2" size={20} />
              </div>
              <p>@2023, all right reserve by softypy </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">About Us</h3>
            <ul>
              <li>About Zynix</li>
              <li>Contact Zynix</li>
              <li>Zynix Blog</li>
              <li>Zynix Card</li>
              <li>Zynix Exclusive </li>
              <li>Zynix Mart </li>
              <li>Digital Payment </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Categories/Brands</h3>
            <ul>
              <li>Branding</li>
              <li>Design</li>
              <li>Marketing</li>
              <li>Advertisemen</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold"> Customer Care</h3>
            <ul>
              <li>Help Center</li>
              <li>Returns & Refunds</li>
              <li>Cookie policy</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>CCMS - Central Complain </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us </h3>
        
            <div>
              <button className="shopBtn mt-3 mb-5">Subscribe </button>
            </div>
            <div>
              <h5 className="text-xl mb-3">Payment Method </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
