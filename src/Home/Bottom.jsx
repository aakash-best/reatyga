import React from 'react'
import Ima from '../image/sai.jpg'
import Imag from '../image/genos.jpg'
import Imagess from '../image/king.jpg'
import styled from 'styled-components'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'



const Main = styled(motion.div)`
padding:2%;
background-color:rgb(254 255 240);
overflow-x: hidden;
    
   

`
const Container = styled.div`
padding:2%;
background-color:rgb(252 255 214);
justify-content:space-between;
display: flex;
flex-wrap:wrap;

`
const H = styled.h1`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

text-align: center;
margin-top:12%;
span{
color:blue;
}
`
const HH = styled.div`
font-size: 3rem;
text-align: center;
  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

` 
const HHH = styled.div`
font-size: 1rem;
text-align: center;
  color:blue;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


` 




const Box = styled.div`
flex-basis:16rem;
flex-grow:1;
background-color:#f9f7c2;
cursor:pointer;
text-align:center;

img{
    
width:80%;
height:80%;
margin:2%;
}


`

function Bottom(){
    const anime ={
        hidden:{
          scale:0.5,
            opacity:0
        },
        show:{
            scale:1,
            opacity:1,
            Transition:{
                duration:1
            }
        }
        
        
        
        }
         
      
        const [element , view] = useInView({threshold:0.5});
        const control = useAnimation();
        console.log(view);
        if(view){
            control.start('show')
        }else{
            control.start('hidden')
        }




    return(
        <>
<Main  variants={anime} animate={control} initial='hidden' ref={element} >
<H>Our <span>Teams</span></H>
<Container>

<Box>
    <HHH>PROGRAMMER</HHH>
    <img src={Ima} alt=""/>
   </Box>
<Box>
    <HHH>PROGRAMMER</HHH>
    <img src={Imag} alt=""/>
   
</Box>
<Box>
    <HHH>PROGRAMMER</HHH>
    <img src={Imagess} alt=""/>
    
</Box>

</Container>
</Main>

        </>
    )
}

export default Bottom