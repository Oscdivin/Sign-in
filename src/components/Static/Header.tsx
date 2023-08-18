import styled from "styled-components"
import {CiSearch} from "react-icons/ci"
import Button from "../res/Button"
import {Link} from "react-router-dom"
const Header =()=>{
        return(
                <div>
<Box>
        <Main>
              <House>
                <Logo><Nav to=""></Nav></Logo>
                <Nav to="">Product</Nav>
                <Nav to="">Pricing</Nav>
                <Nav to="">Enterprise</Nav>
                <Nav to="">Resources and Support</Nav>
              <House>
                <Nav to="">Expore</Nav>
                </House>  
                </House>  

              <House>
              <Inputh>
              <Icons/>
                 <Input placeholder="Search Postman"/>
              </Inputh>
                </House>  
              <Hous>
            <Man>
<Nav to="/signin">
                <Button h="4vh"w="140%"bag="none" txt="Sign in" boder="" bu="5px"/>

</Nav>
            </Man>
            <Man>
                <Nav to="/signup">
<Button h="4vh"w="150%"bag="#FF6C37"txt="Sign Up for Free" col="#fff"bu="5px"  
boder="#FF6C37"/>
</Nav>
            </Man>
                
                </Hous>  
        </Main>
</Box>
                </div>
        )
}
export default Header
const Man =styled.div`
width: 40%;
height: 10vh;
/* background-color: #000; */

/* justify-content: center; */
align-items: center;
display: flex;
`
const Icons=styled(CiSearch)`
font-size: 25px;
color: #ccc3c3;
`
const Hous=styled.div`
width: 21%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;


/* background-color: green; */
`
const Inputh=styled.div`
width: 100%;
height: 4.2vh;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F2F2F2;
`
const Logo=styled.div``
const Input=styled.input`
        width: 80%;
        height: 3vh;
        padding: 3px;
        border-radius: 3px;
background-color: #F2F2F2;

color:#ccc3c3;
        outline: none;
border: 1px solid #F2F2F2;
`
const Box=styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: #ffffff;
`
const Main=styled.div`
width: 95%;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: blue; */
`
const House=styled.div`
min-width: 5%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color:  green; */
`
const Nav=styled(Link)`
margin: 0px 10px;
color:#7D8B9D;
text-decoration: none;
:hover{
        color:#000;
        cursor: pointer;
}
`