import styled from 'styled-components';

interface icard{
img?:string,
text?:string,
smalltext?:string,
}
const Card:React.FC<icard> =({img,text,smalltext})=>{
        return(
                <div>
<Box>
        <Main>
<Image src={img}/>
<Text>{text}</Text>
<Small>{smalltext}</Small>
        </Main>
</Box>
                </div>
        )
}
export default Card;
const Box =styled.div`
width: 313px;
height: 34vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffff;
border-radius: 7px;
`
const Image=styled.img`
font-size: 40px;
width: 15%;
height: 7vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */

`
const Text=styled.div`
font-size: 20px;
width:38%;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
color:#000;                   
`
const Small=styled.div`
font-size: 11.7px;
width: 80%;
height: 14vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
`
const Main=styled.div`
width: 300px;
height: 30vh;
display: flex;
justify-content: space-between;
/* align-items: center; */
flex-direction: column;
/* background-color: blue; */
`