import SinglePageSlider from "@/components/SinglePageSlider/SinglePageSlider";
import Container from "@/components/ui/Container";
import React from "react";
import { HiChevronRight, HiStar } from "react-icons/hi";
import TZSelect from "@/components/ui/TZSelect/TZSelect";
import "../product.css";
import AddProductBtn from "@/components/ui/AddproductBtn/AddProductBtn";
const SingleProduct = () => {
  return (
    <Container className="mt-10">
        <div className="flex items-center space-x-3">
            <span>Home</span>
            <HiChevronRight/>
            <button className="bg-[#E8E8E8] px-3 py-2  rounded-sm ">Accessories</button>
            <HiChevronRight/>
            <button className="bg-[#E8E8E8] px-3 py-2  rounded-sm ">Accessories</button>
            <HiChevronRight/>
            <small>Ultra Wireless S50 Headphones S50 with Bluetooth</small>
        </div>
      <div className="flex items-center">
        <div className='w-[50%] overflow-hidden'>
          <SinglePageSlider />
        </div>
        <div className="border-b border-[#ddd]">
          <small>Headphones</small>
          <h3 className="text-2xl font-semibold my-3">
            Headphones Ultra Wireless S50 Headphones S50 with Bluetooth
          </h3>
          <div className="flex items-center text-sm ">
            <div className="flex items-center ">
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
            </div>
            <small> (3 customer reviews)</small>
          </div>
          <div className="mt-3 text-sm featureItem  text-[#7c7c7c]">
            <ul className="space-y-2">
              <li>4.5 inch HD Touch Screen (1280 x 720) </li>
              <li>Android 4.4 KitKat OS</li>
              <li>1.4 GHz Quad Core™ Processor</li>
              <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
            </ul>
          </div>
          <p className=" text-[#7c7c7c] my-5">
            "Experience wireless freedom with Ultra Wireless S50 Headphones.
            Enjoy seamless Bluetooth connectivity and immersive sound. Elevate
            your audio experience today!"
          </p>
          <span className="my-5 block">SKU: FW511948218</span>
          <div className="flex items-">
            <span className="text-5xl">$1,999.00</span>{" "}
            <del className="text-xl">$2,299.00</del>
          </div>
          <hr className="my-5" />
          <div className="flex items-center">
            <span className="mr-3">Color</span>

            <TZSelect />
          </div>
          <hr className="my-5" />
          <div>
            <span>Quantity </span>
            <div className="flex items-center ">
              <AddProductBtn />

              <button className="addToCartBtn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
