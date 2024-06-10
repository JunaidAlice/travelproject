import React from 'react'
import { TiSocialTwitter , TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube ,TiSocialPinterest } from "react-icons/ti";




export const Footer = () => {
  return (
            <footer className=' rounded-sm p-4 bg-black text-white bottom-0  '>
    
        <div className='flex gap-6'>
            <h1 className='font-extrabold '>Get UpTo Date</h1>
       <div className='gap-20'>   
<div>
<h1 className='hover:cursor-pointer '   >Contact us</h1>
<h1   className='hover:cursor-pointer '>Our service</h1> 
 <h1  className='hover:cursor-pointer ' >Privacy Policy</h1> 
<h1   className='hover:cursor-pointer '>Terms and Conditions</h1> 
    <h1 className='hover:cursor-pointer '  >Tour</h1>
  
     



</div>

<div className='flex  gap-6 '>
            <TiSocialTwitter  className='hover:cursor-pointer hover:underline-offset-1'/>
            <TiSocialLinkedin className='hover:cursor-pointer hover:underline-offset-1'/>
            <TiSocialFacebook className='hover:cursor-pointer hover:underline-offset-1'/>
            <TiSocialYoutube  className='hover:cursor-pointer hover:underline-offset-1'/>
            <TiSocialPinterest  className='hover:cursor-pointer hover:underline-offset-1'/>
</div>  <p>&copy;</p>
        </div></div>  
    </footer>
  )
}
