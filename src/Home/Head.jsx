import React from 'react'
import Image from '../image/front.jpeg'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Container = styled.div`
padding:2%;
background-color:rgb(252 255 214);
height: 100vh;
display: flex;

@media screen and (max-width:570px)
{
    margin-top: 17%;
display:block;

}
button{
margin:2% 0%;
height:50px;
width:200px;
background-color:transparent;
cursor:pointer;
border: none;
border: 5px solid blue;
border-radius:20px;
}


`
const Line = styled.div`
flex-direction: column;
flex-basis:50% ;
display:flex;
justify-content:center;
align-items: center;

`
const Imagee = styled.div`
flex-basis:50% ;
text-align: center;
img{
width:100%;
height:90%;

}




`
const Headline = styled.div`
@media screen and (min-width:570px){
width:100%;
}
`
const H = styled(motion.h1)`
font-size: 3rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
@media screen and (max-width:570px){
   text-align: center;
    }

span{
color:blue;

}




`

function Head(){
const Tittleanime = {
hidden:{
    y:200,
    opacity:0,
},
show:{
    y:0,
    opacity:1,
    transition:{
        duration:1,
        type:"spring",
         stiffness:90,
    }
},
hover:{
    scale:1.2,
    textshadow:" 0px 0px 8px rgb(255, 255, 255)",
    boxshadow:" 0px 0px 8px rgb(255, 255, 255)",
    transition:{
        yoyo:Infinity
    }
    

}}

const Imgs = {
hidden:{
    y:-20,
   
},
show:{
   y:0,
    
    transition:{
        yoyo: Infinity,
        duration:1
    }
}


}
const Animation ={
ani:{
    x:[-80, 80],
    y:[120, 0],
    transition:{
        x:{
            yoyo:Infinity,
            duration:0.5,
        },
        y:{
            yoyo:Infinity,
            duration:0.25,
        }
    }
}
}
 





return(
<>
<Container>

<Line>
<div className="dotbox">
<motion.div className="dot" variants={Animation} animate="ani"></motion.div>
</div>

    <Headline>
<H variants={Tittleanime}>Are you looking for<br/> <span>FrontEnd Developer</span></H>

    </Headline>

    <motion.p variants={Tittleanime} >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus a magnam suscipit minus? Ab nesciunt fugit quidem dolore sunt eligendi dolorem repellendus distinctio voluptatem quaerat, impedit vitae ipsam minima sapiente.   </motion.p>
   <Headline>
<motion.button variants={Tittleanime} 
whileHover='hover'

>Contact Us</motion.button>
</Headline>
</Line>
<Imagee>
<motion.img variants={Imgs} src={Image} alt="image"/>
    
</Imagee>


</Container>


</>


)


}
export default Head