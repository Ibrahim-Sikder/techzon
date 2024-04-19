"use client";

import React, { useState } from "react";

import { TProduct } from "@/types";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import EModal from "@/components/ui/EModal/EModal";
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import "../products/AllProduct.css";
const Page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  return (
    <div className="bg-[#F2F2F2] p-10">
      <div className="flex items-center justify-between mb-3 ">
        <h3 className="text-3xl font-semibold ">Dashboard / My Orders </h3>
      </div>
      <div className="flex items-center justify-between orderTable">
        <div className="text-justify">
          <small className="block">
            Order <b className="text-[#2251CF]">#657172694756550</b>
          </small>
          <small>Placed on 30 Mar 2024 11:59:49</small>
        </div>
        <button><b className="text-[#2251CF]">Manage</b></button>
      </div>
      <div className="myOrders">
        <table className="orderTable">
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Status </th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.slice(0, 2).map((data: TProduct, i: number) => (
              <tr key={data._id}>
                <td>
                  <div className="flex items-center justify-center ">
                    <Image
                      className="mr-3  "
                      alt="products"
                      src={data.image}
                      width="60"
                      height="60"
                    />
                    <span>{data.name}</span>
                  </div>
                </td>
                <td> 5 </td>
                <td>
                  <button className="bg-[#EFF0F5] px-2 py-1 rounded-lg">
                    Cancelled
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
