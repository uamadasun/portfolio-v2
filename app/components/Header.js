"use client"
import Image from "next/image";
import React from "react";
import uche from "../assets/uche.svg";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {

    const media = {
        
        '@media (min-width: 768px)':{
            fontSize: `2.25rem`,
            lineHeight: `2.5rem`}
    }


  return (
    <header className="mx-auto mt-2 flex flex-col items-center">
        <TypeAnimation 
        sequence={[
            'New Look, Coming Soon!',
            1000, 
          ]}
          wrapper="span"
          speed={30}
          style={{ fontSize: '2em', lineHeight:'2rem',marginBottom:'2rem', fontWeight:'800', display: 'inline-block',color:'#DD3DA2', textAlign:'center', textTransform: 'uppercase', media}}
          repeat={1}/>
      
      <Link href={`https://calendly.com/uchenna-io`}  target="_blank" rel="noopener noreferrer" title={`Calendly consultation website`}>
        <p className="underline uppercase text-pink-500 text-center  hover:text-lime-400 font-bold -mb-10">
          Schedule a Consultation
        </p>
      </Link>
      <Image
        src={uche.src}
        height={100}
        width={100}
        alt="uche circular image"
        className=" w-80 h-80 mt-16"
      />
    </header>
  );
};
