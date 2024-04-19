'use client'

import React, { useState } from "react";
import "./AllProduct.css";
import { TProduct } from "@/types";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import EModal from "@/components/ui/EModal/EModal";
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

const Page = async () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const res = await fetch("https://techzon-server.vercel.app/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
 
  return (
    <>
    <div className="flex items-center justify-between mb-3">
          <h3 className="text-3xl font-semibold ">All Products </h3>
          <button onClick={handleOpen} className="addProductBtn flex items-center"><PiPlus size={20}/> <span className="ml-1 ">Add Products</span> </button>
        </div>
      <div className="table-container">
        
        <table className="attendanceInputTable">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Items</th>
              <th>Review</th>
              <th>Categories</th>
              <th>Discount</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((data: TProduct, i: number) => (
              <tr
                className={i % 2 === 0 ? "even-row" : "odd-row"}
                key={data._id}
              >
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center">
                    <Image
                      className="mr-3"
                      alt="products"
                      src={data.image}
                      width="60"
                      height="60"
                    />
                    <span>{data.name}</span>
                  </div>
                </td>
                <td>{data.review}</td>
                <td>{data.categories}</td>
                <td>{data.discount}</td>
                <td>
                    <div className="flex items-center justify-center w-10">
                    <HiOutlineTrash size={30} className="text-red-500 flex justify-center"/>
                    </div>
                </td>
                <td> <div className="flex items-center justify-center w-10">
                    <FaRegEdit size={30} className="text-green-500 flex justify-center"/>
                    </div></td>
              </tr>
            ))}
          </tbody>
        </table>


        {
          open && <EModal onClose={handleClose}/>
        }
      </div>
    </>
  );
};

export default Page;
