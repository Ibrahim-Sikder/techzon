'use client'

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
import { HiMinus, HiOutlineEye, HiOutlineHeart, HiStar } from "react-icons/hi";
import { Card, Checkbox, CheckboxProps } from "antd";
import { BiMinus } from "react-icons/bi";
const ProductPage = () => {
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

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Container className="pt-20">
      <div className="flex justify-center flex-wrap md:justify-between gap-5">
        <div className="flex flex-wrap justify-between lg:block space-y-5 ">
          <Card className="card">
            <h4 className="text-xl font-semibold">Price Range </h4>
          <div className="space-y-3 mt-3">
          <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">$200.00  <BiMinus/>  $500 </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">$200.00  <BiMinus/>  $500 </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">$200.00  <BiMinus/>  $500 </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">$200.00  <BiMinus/>  $500 </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">$200.00  <BiMinus/>  $500 </p>
           </div>
          </div>
          </Card>
          <Card className="card">
            <h4 className="text-xl font-semibold">Categories / Brands  </h4>
          <div className="space-y-3 mt-3">
          <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 " > Apple </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />

           <p className="flex items-center ml-4 ">Samsung </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">Huawei </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">Xiaomi </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">OnePlus </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">Google (Pixel) </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">Oppo </p>
           </div>

           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">Vivo </p>
           </div>

          </div>
          </Card>
          <Card className="card">
            <h4 className="text-xl font-semibold">Ratings </h4>
          <div className="space-y-3 mt-3">
          <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">1Star </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">2Star </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">3Star </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">4Star </p>
           </div>
           <div className="flex items-center">
           <Checkbox onChange={onChange} />
           <p className="flex items-center ml-4 ">5Star </p>
           </div>


          </div>
          </Card>
        </div>
        <div className="col-span-10">
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid  gap-10 place-content-center place-items-center">
            {flashData?.map((data) => (
              <div key={data.id} className="flashSellProductWrap productsCard">
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
                    <HiOutlineHeart
                      className=" startIcon  startIcon2"
                      size={30}
                    />
                    <HiOutlineEye className=" startIcon startIcon2" size={30} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
