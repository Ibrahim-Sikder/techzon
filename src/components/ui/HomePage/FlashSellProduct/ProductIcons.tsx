'use client'

import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineHeart } from 'react-icons/hi';
import ProductModal from './ProductModal';

const ProductIcons = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
             <HiOutlineEye onClick={handleOpen} className=" startIcon  startIcon2 cursor-pointer " size={30}  />

             {
                open && <ProductModal onClose={handleClose}/>
             }
        </div>
    );
};

export default ProductIcons;