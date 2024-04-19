import React from "react";
import "../AllProduct.css";
import { Textarea } from "@nextui-org/react";
import { FaCloudUploadAlt } from "react-icons/fa";
const page = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-center ">Add Product </h2>
      <div className="addProductWrap">
        <div className="flex items-center justify-between ">
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Product Name</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Review</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="w-full border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Price </label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Categories</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="w-full border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Discount </label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Rating</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="w-full border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Brand </label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Sub Categories</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="w-full border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1"> Slug</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Products Tag</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="w-full border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
        </div>

        <div className="flex items-center justify-between ">
        <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Sub Categories</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <input
              type="text"
              className="w-full border-2-[#ddd] border p-2 rounded-sm "
            />
          </div>
          <div className="mt-4">
          <div className="flex">
              <label className="block mb-1">Image Upload </label>
              <span className="ml-1 text-red-600">*</span>
            </div>
              <input type="file" id="files" className="hidden" />
              <label
                htmlFor="files"
                className="fileUpload flex items-center justify-center cursor-pointer bg-[#2251CF] text-white py-2 rounded-md "
              >
                <span>
                  <FaCloudUploadAlt size={30} className="mr-2" />
                </span>
                <span> Upload Image</span>
              </label>
            </div>
       
        </div>
        <div >
          
          <div className="mt-4">
            <div className="flex">
              <label className="block mb-1">Description</label>
              <span className="ml-1 text-red-600">*</span>
            </div>

            <Textarea className="w-full border-2-[#ddd] border p-2 rounded-sm "></Textarea>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button className="border-2-[#ddd] border rounded-2xl w-52 h-12 mx-auto  bg-[#FF851A] text-white ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
