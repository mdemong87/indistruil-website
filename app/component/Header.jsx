import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import Container from "./Containner";
import React from 'react'
import {AiOutlineMobile}from "react-icons/ai";

export default function Header() {
  return (
    <div className="bg-gray-800 text-gray-200 py-4">
        <Container>
          <div className="flex justify-between items-center">
        <div className="flex gap-4 w-full justify-start capitalize font-medium text-lg flex-wrap">
          <Link href={"#"}>home</Link>
          <Link href={"#"}>about us</Link>
          <Link href={"#"}>portfolio</Link>
          <Link href={"#"}>services</Link>
          <Link href={"#"}>contact us</Link>
        </div>
        <div className="w-full flex justify-center">
          <Image className="w-1/4 h-2/4" src={logo} width={400} height={400}/>
        </div>
        <div className="w-full flex justify-end gap-3">
        <input className="px-2 bg-gray-200 rounded-lg" type="seacrh" placeholder="Search..."/>
          <button className="flex items-center gap-1 custombg rounded-lg px-2 text-gray-900 font-medium">
            <AiOutlineMobile className="text-2xl"/>
            <div className="flex flex-col items-start">
              <small>call us</small>
              <span>88019854654</span>
            </div>
          </button>
        </div>
          </div>
        </Container>
    </div>
  )
}
