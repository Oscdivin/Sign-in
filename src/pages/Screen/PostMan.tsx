import styled from "styled-components"
import Pic from "../../assets/96bff51802e8a43c.png"
import Button from "../../components/res/Button"
import mor from "../../assets/s6Ia6hyfDMfTb.svg"
import Mor from "../../assets/microsoft-logo-light.a08a342.svg"
import Ko from "../../assets/linux-logo-light.c97e8fe.svg"
const PostMan =()=>{
        return(
                <div>
<Box>
        <Main>
                <Build>
                        <Apl>
                                Build
                        </Apl>
                        <Together>
                                APIs together
                        </Together>
                        <Over>
                                Over 25 million developers use Postman. Get <br />
                                started by signing up or downloading the desktop
                                app.
                        </Over>
                        <Hloder>
        <Input/><Button h="6.5vh"w="135%"bag="#FF6C37"txt="Sign Up for Free" 
col="#fff"bu="0px 5px 5px 0px"  
boder="#FF6C37"/>
</Hloder>

                        <App>
                                Download the desktop app for
                        </App>
                        <Icons>
                                <Icon src={Mor}/>
                                <Icon src={mor}/>
                                <Icon src={Ko}/>
                        </Icons>




                </Build>
                <Image src={Pic}/>
        </Main>
</Box>
                </div>
        )
}
export default PostMan

const  App=styled.div`

width: 50%;
height: 7vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
`
const  Icons=styled.div`

width: 44%;
height: 7vh;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
`
const  Icon=styled.img`

font-size: 20px;
background-color: none;
object-fit: cover;
display: flex;
align-items: center;
justify-content: center;
`
const  Hloder=styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
/* background-color: green; */
width: 99%;
height: 6,7vh;
border-left: 1px orangered solid;
border-top: 1px  gray solid;
border-bottom: 1px orangered solid;
border-radius: 5px;

`
const  Input=styled.input`
width: 61%;
height: 30px;
padding: 7px;
outline: none;
border: none;


`
const  Apl=styled.div`
width: 24%;
height: 7vh;
/* background-color: red; */
display: flex;
align-items: center;
font-size: 46px;
/* justify-content: center; */
`
const  Together=styled.div`

width: 40%;
height: 7vh;
/* background-color: red; */
display: flex;
align-items: center;
font-size: 27px;
`
const  Over=styled.div`

width: 95%;
height: 14vh;
/* background-color: red; */
display: flex;
align-items: center;
font-size: 18px;
`
const  Box=styled.div`
width: 100%;
height: 100vh;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
`
const  Main=styled.div`
width: 95%;
height: 90vh;
/* background-color: blue; */
display: flex;
justify-content: space-between;
align-items: center;
`
const  Build=styled.div`
width: 35%;
min-height: 30vh;
/* background-color: #000; */
`
const  Image=styled.img`
width: 64%;
/* background-color: red; */
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
background-image: center center  center/ cover  no-repeat;
object-fit: cover;
`