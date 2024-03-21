import "../FlashSellProduct/FlashSellProduct.css";
import flash from "../../../../../src/assets/images/trending.png";
import flash2 from "../../../../../src/assets/images/trending2.png";
import flash3 from "../../../../../src/assets/images/trending3.png";
import flash4 from "../../../../../src/assets/images/trending4.png";
import flash5 from "../../../../../src/assets/images/trending5.png";
import flash6 from "../../../../../src/assets/images/trending7.png";
import flash7 from "../../../../../src/assets/images/trending8.png";
import flash8 from "../../../../../src/assets/images/flash7.png";
import Image from "next/image";

import Container from "../../Container";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
const TopRatedProduct = () => {
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
     <h3 className="text-3xl font-semibold mb-5 ">Top Trending Products </h3>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 gap-10 place-content-center place-items-center mt-10">
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
              <div className="iconWraps space-y-4">
                <HiOutlineEye className=" startIcon startIcon2" size={30} />
                <HiOutlineHeart className=" startIcon  startIcon2" size={30} />
                <HiOutlineEye className=" startIcon startIcon2" size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TopRatedProduct;
