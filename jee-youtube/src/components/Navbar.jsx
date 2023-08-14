import React from 'react'
import { Box, Img, Input,Image } from '@chakra-ui/react'
import youtubelogo from '../images/Youtube-Logo-PNG-removebg-preview.png'
import './Home.css'
import mic from '../images/mic-youtube-removebg-preview.png'

function Navbar() {
  return (
    <Box className='navbox'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="24" style={{marginTop:"5px"}}>
  <rect width="64" height="8" rx="4" ry="4" fill="#FFFFFF"/>
  <rect y="28" width="64" height="8" rx="4" ry="4" fill="#FFFFFF"/>
  <rect y="56" width="64" height="8" rx="4" ry="4" fill="#FFFFFF"/>
</svg>
<Box  mr={{lg:"200px",md:"100px",sm:"20px",base:"0px"}}>
<Img src={youtubelogo} alt="logo" width={{md:"120px",base:"200px"}} h={{md:"80%"}}    />
</Box>
{/* <Box display="flex"> */}
<Input w={{md:"400px",base:"200px"}}/>
<Img src={mic} alt="mic"  mr={{md:"20px",lg:"300px"}}/>
<Image
  borderRadius='full'
  boxSize='150px'
  src='https://yt3.ggpht.com/KIWBeq4ywm4hQ8yo7cKfbV8uJiihM7qglAwb6QVFSTeymn7i483G2EghAzC7cP-IX-9gzjW1=s88-c-k-c0x00ffffff-no-rj'
  alt='Dan Abramov'
  h="40px"
  w="40px"
/>
{/* </Box> */}





    </Box>
  )
}

export default Navbar