import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import {Rye} from "next/font/google";
import { Libre_Bodoni } from "next/font/google";

const rye = Rye ({
  weight : '400',
  subsets : ['latin'],
  display : 'swap',

})

const page = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    </div>
  );

}

export default page