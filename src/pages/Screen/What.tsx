import styled from "styled-components";
import Button from "../../components/res/Button";
import Home from "../../assets/homepage-header-illustration.3385ecf.svg"
import Card from "../../components/res/Card";
const What =()=>{
        return(
                <div>
<Box>
        <Main>
                <Tools>
<Up>
                                <Text>
What is Postman?
                        </Text>
                        <Texts>
                                Postman is an API platfrom for building and using 
APIs. Postman simplifies each step of <br />
                                the API lifecycle and streamlines collaboration so 
you can create better APIs-faster
                        </Texts>
</Up>
                        <Image src={Home}/>
                </Tools>
                <Tools>
                        <Card img=""text="API Tools" smalltext="A comprehensive set of tools that help accelerate the APL Lifecycle - from design,testing, documentation, and mocking to discovery"/>

                         <Card img=""text="APIRepository" smalltext="Easily store, iterate and collaborate around all your APl artifacts on one central platfrom used across teams."/>
                           <Card img=""text="Workspaces" smalltext="Organize your API work and collaborate with teammates across your organiztion or stakeholders across the world."/>
  <Card img=""text="Governance" smalltext="improve the quality of APIS with governance rules that ensure APIs are designed,built,tested, and distributed meeting organizational standards."/>
                </Tools>
                <Tool>
                         <Button h="4vh"w="114%"bag="none" txt="Learn more" boder="" bu="5px"/>
                </Tool>
        </Main>
</Box>
                </div>
        )
}
export default  What;

const Up =styled.div`
width: 60%;
height: 20vh;
/* background-color: red; */
`
const Text =styled.div`
width:26%;
height: 10vh;
/* background-color: green; */
display: flex;
align-items: center;
font-size: 25px;
`
const Texts =styled.div`
width:80%;
height: 10vh;
/* background-color: green; */
display: flex;
align-items: center;
font-size: 16px;
`
const Image =styled.img`
width: 29%;
height: 37vh;
display: flex;
justify-content: center;
align-items: center;
object-fit: cover;
margin-top: -35px;
/* background-color: green; */
`
const Box =styled.div`
width: 100%;
height: 95vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #F2F2F2;
`
const Main =styled.div`
width: 95%;
height: 80vh;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: blue; */
flex-direction: column;
`
const Tools =styled.div`
width: 100%;
min-height: 1vh;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color:#000; */
`
const Tool =styled.div`
width: 10%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color:#000; */
`