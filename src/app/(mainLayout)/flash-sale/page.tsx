import "../../../components/ui/HomePage/FlashSellProduct/FlashSellProduct.css";
import flash from "../../../../src/assets/images/flash.png";
import flash2 from "../../../../src/assets/images/flash2.png";
import flash3 from "../../../../src/assets/images/flash3.png";
import flash4 from "../../../../src/assets/images/flash4.png";
import flash5 from "../../../../src/assets/images/flash5.png";
import flash6 from "../../../../src/assets/images/flash6.png";
import flash7 from "../../../../src/assets/images/flash8.png";
import flash8 from "../../../../src/assets/images/flash7.png";
import Image from "next/image";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import Container from "@/components/ui/Container";
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
    <Container className="mt-10">
     <div className=" mb-10 ">
     <h3 className="text-2xl font-semibold mb-3">Flash Sale </h3>
      <p>Showing 1-12 of 24 item(s)</p>
    <p>"Dive into the ultimate frenzy of savings with our electrifying flash sale! Brace yourself for an adrenaline-pumping shopping experience as we unveil a treasure trove of unbeatable deals and jaw-dropping discounts. Whether you're hunting for the latest gadgets, fashion must-haves,</p>
    
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

export default FlashSellProduct;
