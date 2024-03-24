 'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FlashSaleTime = () => {
  const calculateEndTime = () => {
    const now = new Date();
    const endTime = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
    return endTime;
  };

  const [endTime, setEndTime] = useState(calculateEndTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setEndTime(calculateEndTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (endTime: number | Date) => {
    const diff = endTime - new Date();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  return (
    <div className="flex-wrap flex items-center">
      <h3 className="text-2xl font-semibold">Flash Sale</h3>
      {endTime && (
        <span className="ml-10">
          Ends after:
          <span className="ml-3 text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm">
            {formatTime(endTime).days}d   
          </span>
          <span className="ml-3 text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm">
          {formatTime(endTime).hours}h
          </span>
          <span className="ml-3 text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm">
          {formatTime(endTime).minutes}m
          </span>
          <span className="ml-3 text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm">
          {formatTime(endTime).seconds}s
          </span>

        </span>
      )}
     
    </div>
  );
};

export default FlashSaleTime;
