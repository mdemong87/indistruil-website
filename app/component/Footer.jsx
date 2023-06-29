import React from 'react'
import Image from 'next/image';
import logo from "../../public/logo.png"
import Container from "./Containner";
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin}from "react-icons/ai";

export default function Footer() {
  return (
    <div className='border-t-4 border-yellow-500 bg-gray-800 text-gray-200'>
        <Container>
          <div className='py-5'>
            <div className='flex  justify-between items-center pb-5'>
              <div className='w-full'>
                <p className='pb-5 w-3/4 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora eveniet quas. Deserunt sed magnam aperiam, repellat tempore tempora aliquam?</p>
                <div className='flex flex-col w-3/4 gap-3'>
                <input className='rounded-lg  text-center px-2 py-2 text-black' type="email" placeholder='Email'/>
                <button className='text-gray-900 font-bold custombg px-2 py-2 rounded-lg'>Sing Up</button>
                </div>
              </div>
              <div className='w-full flex justify-center'>
                <Image className='w-1/2 h-1/2' width={400} height={400} src={logo}/>
              </div>
              <div className='w-full flex justify-end'>sfdgdfg</div>
            </div>
            <div className='pt-5 flex justify-between items-center border-t-2 border-gray-700'>
                <div>
                &copy;2023 <b className='customcolor'>Impact Capital</b>. All right reserved
                </div>
                <div className='flex gap-3'>
                  <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                    <AiFillFacebook className='text-gray-800 text-2xl'/>
                  </div>
                  <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                    <AiFillInstagram className='text-gray-800 text-2xl'/>
                  </div>
                  <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                    <AiFillLinkedin className='text-gray-800 text-2xl'/>
                  </div>
                </div>
            </div>
          </div>
        </Container>
    </div>
  )
}
