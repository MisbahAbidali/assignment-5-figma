import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
  <header>
    <div className=' bg-[#A29875] w-[1007px] h-[95px] gap: 0px opacity: 0px'>
       <div className='text-5xl text-[#FFFFFF]'>MANZZARI</div>
    </div>  
  </header>
      <div>      
         <p className='w-[300px] h-[150px] pl-[80px] pt-[120px] pb-[0px] top: 214px left: 147px gap: 0px opacity: 0px text-2xl '>IMPECCABLE CRAFTSMANSHIP AND FINESSE  <p className='pt-[50px] text-[#A29875]
          text-base w-[300px]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className='bg-[#A29875] p-[8px] mt-[20%] text-[#FFFFFF] text-base'>Explore Now</button> 
         </p>
      </div>    
    <div className='pl-[620px] pb-[20px]'>
      <Image 
         src="/rs-layer-wrap ⏵ rs-layer (1).png"
         alt="image"
         width={300}
         height={596}>
      </Image>   
    </div>   
      </div>
  )
}

export default page;





