// components/Loader/Footer.jsx
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
  <>
      <div className='bg-gray-700'>
        <div className='p-10 text-white WitchMagic'>
          <p className='text-xl'>Team Z3r0l0g0n</p>
            <h4 className='text-sm'>Socials</h4> 
              <div className='flex gap-3'>
                <a href="https://www.facebook.com/z3r0l0g0n?mibextid=ZbWKwL" target='_blank'><FacebookIcon/></a>
                <a href="https://www.instagram.com/cybercell.jgec/?utm_source=qr&igsh=dWY1bjRjbm4zdmtq" target="_blank"><InstagramIcon/></a>
                <a href="https://www.linkedin.com/company/z3r0l0g0n/" target='_blank'><LinkedInIcon/></a>
                <a href="https://x.com/z3r0_l0g0n?t=gFtHpJ_ibMGmfw8_IScAbw&s=08" target='_blank'><XIcon/></a>
              </div>
        </div>
      </div>
   
  </>
  );
};

export default Footer;