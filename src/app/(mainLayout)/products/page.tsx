

import Container from "@/components/ui/Container";
import "../../../components/ui/HomePage/FlashSellProduct/FlashSellProduct.css";
import './product.css'
import flash from "../../../../src/assets/images/flash.png";
import flash2 from "../../../../src/assets/images/flash2.png";
import flash3 from "../../../../src/assets/images/flash3.png";
import flash4 from "../../../../src/assets/images/flash4.png";
import flash5 from "../../../../src/assets/images/flash5.png";
import flash6 from "../../../../src/assets/images/flash6.png";
import flash7 from "../../../../src/assets/images/flash8.png";
import flash8 from "../../../../src/assets/images/flash7.png";
import Image from "next/image";
import { HiMinus, HiOutlineEye, HiOutlineHeart, HiOutlineShoppingCart, HiStar } from "react-icons/hi";





import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import ProductIcons from "@/components/ui/HomePage/FlashSellProduct/ProductIcons";
import { TProduct } from "@/types";
const ProductPage = async () => {

  const res = await fetch('http://localhost:5000/api/v1/products?category=${categories}',{
    next:{
      revalidate: 30
    }
  })
  const products = await  res.json()
 

 
  return (
    <Container className="pt-12">
      <div className="flex justify-center flex-wrap lg:flex-nowrap md:justify-between gap-5">
        <div>
            <ProductCard/>
        </div>
        <div className="col-span-10">
         <Link href={`/products/id`}>
         <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid  gap-10 place-content-center place-items-center">
            {products.data?.map((data:TProduct) => (
              <div key={data._id} className="flashSellProductWrap productsCard">
                <div className="flashContent">
                  <Image width="500" height="500" src={data.image} alt="flash" />
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
         </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
