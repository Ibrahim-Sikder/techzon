import React from 'react';
import explore from '../../../../assets/images/explore.png'
import explore2 from '../../../../assets/images/explore2.png'
import explore3 from '../../../../assets/images/explore3.png'
import explore4 from '../../../../assets/images/explore4.png'
import explore5 from '../../../../assets/images/explore5.png'
import explore6 from '../../../../assets/images/explore6.png'
import Image from 'next/image';
import Container from '../../Container';
import './ExploreCategories.css'
const ExploreCategories = () => {
    const categoryData = [
        {
            id:1,
            name: 'Laptop',
            img: explore
        },
        {
            id:1,
            name: 'Circle',
            img: explore2
        },
        {
            id:1,
            name: 'Iphone',
            img: explore3
        },
        {
            id:1,
            name: 'Mobile ',
            img: explore4
        },
        {
            id:1,
            name: 'Headhphone ',
            img: explore5
        },
        {
            id:1,
            name: 'Mini bag',
            img: explore6
        },
    ]
    return (
        <Container className='sectionMargin'>
            <h3 className="text-2xl font-semibold ">Popular Categories  </h3>
           <div className="lg:grid-cols-4 grid xl:grid-cols-6 gap-5 mt-10 text-center grid-cols-1 md:grid-cols-3 place-items-center  ">
                {
                    categoryData.map((data)=>(
                        <div key={data.id} className="categoryContainer">
                      
                        <Image
                        src={data.img}
                            width='500'
                            height='500'
                            alt='categories'
                        />
                        <h3 className="text-xl font-semibold mt-3"> {data.name} </h3>
                        </div>
                    ))
                }
           </div>
        </Container>
    );
};

export default ExploreCategories;