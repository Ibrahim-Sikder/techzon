
import "./FlashSellProduct.css";
import flash from "../../../../../src/assets/images/flash8.png";
import Image from "next/image";
import Container from "../../Container";
import { HiMinus, HiOutlineEye, HiOutlineHeart, HiOutlineStar, HiStar } from "react-icons/hi";
const FlashSellProduct = () => {



  return (
    <Container className="sectionMargin">
      <h3 className="text-2xl font-semibold">Trending Best Selling Products</h3>
      <div className="flashSellProductWrap">
        <div>
          <Image width="500" height="500" src={flash} alt="flash" />
          <div>
            <p>
             Monitor Headphone
            </p>
            <div className="flex items-center">
                <HiStar size={25} className=" startIcon"/>
                <HiStar size={25} className=" startIcon"/>
                <HiStar size={25} className=" startIcon"/>
                <HiStar size={25} className=" startIcon"/>
                <HiStar size={25} className=" startIcon"/>
            </div>
            <div className="flex items-center ">

                 <del className="mr-2"> ৳484848</del> <HiMinus />
                <b className="text-[#FCB903] ml-2">৳58999</b> 
            </div>
            <div className="iconWraps space-y-2">
              <HiOutlineEye className=" startIcon startIcon2" size={25}/>
              <HiOutlineHeart className=" startIcon " size={25}/>
              <HiOutlineEye className=" startIcon" size={25}/>
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlashSellProduct;
