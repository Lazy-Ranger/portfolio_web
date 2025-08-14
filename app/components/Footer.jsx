import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center' >
            <Image src={assets.logo_nits} alt="footer" className="w-36 mx-auto mb-2" />
        </div>
        <div className='w-max mx-auto flex gap-3'>
            <Image src={assets.mail_icon} alt="" className="w-9" /> nitishk642@gmail.com
        </div>
        <div className='text-center sm:flex item-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Zimia Stack. All rights reserved.</p>
            <ul className='flex item-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://github.com/Lazy-Ranger'>Git Hub</a></li>
                <li><a target='_blank' href='https://github.com/Lazy-Ranger'>LinkedIn</a></li>
                <li><a target='_blank' href='https://github.com/Lazy-Ranger'>X</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
