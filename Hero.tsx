import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex h-[80%] bg-white'>
            <div className='w-1/2 flex flex-col justify-center items-start h-screen ml-40'>
            <h3 className='font-[libre-bodoni] font-semibold text-[50px] leading-[65.8px] text-black '>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h3>
            <p className=' text-[#A29875] font-[500] text-[35px] font-[libre-bodoni] '>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
            <button className='w-[fixed-700px] h-[Hug-100px] px-10  gap-10 rounded-md bg-[hsl(47,19%,55%)] font-[libre-bodoni] text-3xl '> Explore Now</button>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start ml-40 mt-[189]'>
            <Image src={"/figma-jewellary.svg"} alt = "girl image"
            width={490}
            height={667}/>
            </div>
    
    </div>
  )
}

export default Hero