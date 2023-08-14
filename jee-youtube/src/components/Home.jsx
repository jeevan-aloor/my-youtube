import React,{useState,useEffect} from 'react'
import './Home.css'
import { Box, Grid,GridItem,Image,Text } from '@chakra-ui/react'
import Navbar from './Navbar'
import axios from 'axios'

function Home() {
  const [data,setData]=useState([])

  const getData=async ()=>{
    try {
      let res=await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCPv_4bGP9tBWXOkFwEXFhnSkinBxLOclE&maxResults=200')
      console.log(res.data.items,"res")
      setData(res.data.items)
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    getData();
  },[])



  return (
    <Box>
        <Navbar/>
       <Grid  templateRows={{md:'repeat(5,360px)',base:'repeat(5,380px)'}}
  templateColumns={{md:'repeat(4, 1fr)',base:'repeat(2,46%)'}}
  gap={{md:6,base:7}} rowGap={{base:15}} 
  
  >
          {
            data.length>0 && data.map((ele)=>(
              <GridItem  key={ele.id} onClick={()=>window.location.href=`/${ele.id}`}>
                <Image src={ele.snippet.thumbnails.medium.url} borderRadius="10px" height="60%"/>
                <Text color="#ffffff" fontWeight="bold" textAlign="left">{ele.snippet.title}</Text>
                <Text color="#F9F6EE" textAlign="left">{ele.snippet.channelTitle}</Text>
                <Text color="#F9F6EE" textAlign="left">{ele.statistics.viewCount}</Text>
                <Text color="#F9F6EE" textAlign="left">{ele.snippet.publishedAt}</Text>
              </GridItem>
            ))
          }
</Grid>
{/* <iframe src="https://www.youtube.com/embed/RTjxhK2mGTU" width="100%" height="400px" allowFullScreen/> */}
   
    </Box>
  )
}

export default Home