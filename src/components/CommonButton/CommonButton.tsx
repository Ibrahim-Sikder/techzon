import React from 'react';

const CommonButton = ({text}) => {
    return (
        <div>
            <button className='px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl'>{text}</button>
        </div>
    );
};

export default CommonButton;