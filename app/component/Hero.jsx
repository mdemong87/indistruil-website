import React from 'react'
import Container from "../component/Containner";
import {AiOutlineArrowRight}from "react-icons/ai";

export default function Hero() {
  return (
    <div className='heroSection'>
        <Container>
            <div className=''>
                <div>
                    <h1 className='text-gray-100 text-5xl font-extrabold uppercase'>IMPACT</h1>
                    <h1 className='customcolor text-5xl font-extrabold uppercase pb-4'>Capital</h1>
                    <span className='uppercase text-gray-200 tracking-widest font-semibold text-xl'>distribution inc</span>
                    <p className='pt-4 text-gray-200 w-2/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus ipsam deserunt similique asperiores aliquam ratione architecto exercitationem voluptatum voluptatem aliquid molestiae distinctio blanditiis autem earum molestias, fugit laudantium iusto.</p>
                    <button className='flex gap-4 rounded-lg custombg py-2 px-3 mt-4 items-center'>
                        <span className='font-bold'>Learn More</span>
                        <AiOutlineArrowRight/>
                    </button>
                </div>
            </div>
        </Container>
    </div>
  )
}
