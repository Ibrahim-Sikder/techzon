import "./FlashSellProduct.css";
import flash from "../../../../../src/assets/images/flash.png";
import flash2 from "../../../../../src/assets/images/flash2.png";
import flash3 from "../../../../../src/assets/images/flash3.png";
import flash4 from "../../../../../src/assets/images/flash4.png";
import flash5 from "../../../../../src/assets/images/flash5.png";
import flash6 from "../../../../../src/assets/images/flash6.png";
import flash7 from "../../../../../src/assets/images/flash8.png";
import flash8 from "../../../../../src/assets/images/flash7.png";
import Image from "next/image";

import Container from "../../Container";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,

  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import ProductIcons from "./ProductIcons";
import Link from "next/link";
const FlashSellProduct = () => {


  const flashData = [
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash2,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash3,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash4,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash5,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash6,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash7,
    },
    {
      id: 1,
      name: "Head Phone",
      price: 13999,
      img: flash8,
    },
  ];
  return (
    <Container className="sectionMargin">
     <div className="flex-wrap flex items-center mb-10 ">
     <h3 className="text-2xl font-semibold">Deals Of The Day </h3>
      <span className="ml-10">Ends after: <span className=" bg-[#F14705] text-white px-3 py-1 ">05h: 13m: 47s</span></span>

    <Link href='/flash-sale'>
    <div className="flex items-center ml-8">
     <button>See All </button> <HiOutlineArrowNarrowRight size={20}/>
     </div>
    </Link>
     </div>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 gap-10 place-content-center place-items-center">
        {flashData?.map((data) => (
          <div key={data.id} className="flashSellProductWrap">
            <div className="flashContent">
              <Image width="500" height="500" src={data.img} alt="flash" />
              <div>
                <p className="flashCartName">{data.name}</p>
                <button className="flashCartBtn ">Add To Cart</button>
                <div className="flex items-center ">
                  <HiStar size={25} className=" startIcon" />
                  <HiStar size={25} className=" startIcon" />
                  <HiStar size={25} className=" startIcon" />
                  <HiStar size={25} className=" startIcon" />
                  <HiStar size={25} className=" startIcon" />
                </div>
                <div className="flex items-center  my-2">
                  <del className="mr-2"> ৳484848</del> <HiMinus />
                  <b className="text-[#2251CF] ml-2">৳58999</b>
                </div>
              </div>
             
            </div>
            <div className="iconWraps space-y-4">
              <ProductIcons/>
                <HiOutlineHeart className=" startIcon  startIcon2" size={30} />
                <HiOutlineShoppingCart className=" startIcon startIcon2" size={30} />
               
              </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FlashSellProduct;
