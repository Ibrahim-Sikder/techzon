'use client'

import React, { useState } from "react";

import { TProduct } from "@/types";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import EModal from "@/components/ui/EModal/EModal";
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import '../products/AllProduct.css'
const Page = async () => {



  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
 
  return (
    <>
    <div className="flex items-center justify-between mb-3">
          <h3 className="text-3xl font-semibold ">Dashboard / Orders </h3>
         
        </div>
      <div className="table-container">
        
        <table className="attendanceInputTable">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Items</th>
              <th>Categories</th>
              <th>Discount</th>
              <th>Status</th>
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
                <td>{data.categories}</td>
                <td>{data.discount}</td>
                <td>
                    <button className='text-green-500 '>Approved</button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>


       
      </div>
    </>
  );
};

export default Page;
