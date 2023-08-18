import styled from "styled-components" 
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from 
"@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import pix from "../../assets/[CooL GuY] {{a2zRG}} (15).jpg"
// import { useState } from "react"
import {BsEyeSlash} from "react-icons/bs"


// import {yup}

const Regeter =()=>{
        const [eye,setEye] = useState(false)
        const see =()=>{
                setEye(!eye);
        }
        const [show, setShow] = useState<boolean>(false)
        const [show1, setShow1] = useState<boolean>(false)
        const tog = ()=>{
                setShow1(true)
        }
        const tog1 = ()=>{
                setShow(!show)
        }
	const navigate = useNavigate()
          const [image,setImage] = useState(pix)
          const [avatar,setAvatar] = useState('')
	const schema =yup.object({
                    email:yup.string().required(),
                    password:yup.string().required(),
     confirm: yup.string().required().oneOf([yup.ref("password")])
          })
          const {register, handleSubmit,reset, formState: {errors} }=useForm({
                resolver: yupResolver(schema)
                
          })
           const onHandleImage = (e: any) => {
     try {
         const file = e.target.files[0]
         const realImage = URL.createObjectURL(file)
         setImage(realImage)
         setAvatar(file)
     } catch (error) {
         console.log(error)
     }
 }
          
          const onHandleSubit = handleSubmit(async(data:any)=>{
                const{email,password,confirm} = data
                const formData = new FormData()
 formData.append("email", email)
 formData.append("password", password)
 formData.append("confirm", confirm)
 formData.append("image", avatar)
                navigate("sign-in")
                reset()
          })
        return(
                <div>
                        {
                                show ? (
                                        <Box style={{"backgroundColor":"#000"}}>	
        <Build >
             
                {
 show1 ? (  <Col onClick={tog1} style={{marginLeft:"90px"}}></Col>) : (  <Col onClick={tog1} style={{marginLeft:"36px"}}></Col>)
}
        </Build>
        
        <From onSubmit={onHandleSubit}>
                <ImageHolder>
                              <ImageLabel htmlFor='pix' >
                <Image src={image}/>
                              </ImageLabel>
                              <ImageInput id="pix" type="file" onChange={onHandleImage} />
                </ImageHolder>
                <Sign>Register!!!!</Sign>
                                        <Cover>
 {errors.email && <Div>Error</Div>}
<Eye>
<Input placeholder="Email:" {...register("email")}/>       
</Eye>
  {errors.password && <Div> Password:</Div>}
  <Eye>
<Input placeholder="Password:"type="password" {...register("password")}/>       
  </Eye>
{errors.password&& <Div>Confirm Password:</Div>}
<Eye>
         <Input
     placeholder='Confirm'
     {...register("confirm")} type={eye ? "text": "password"} 
 />
{/* <Input  placeholder="Confirm Your  PassWord:"type={eye ? "text": "password"} {...register("Confirmpassword")}/>   */}
<div onClick={see}>
<Icon>
</Icon>
</div>
</Eye>
</Cover>     
<Up>
                     Registering with our Teams ??<Tm>Terms</Tm>and<Tm>Privacy</Tm> y
</Up>
<Sb type="submit">
              Sign-In    
</Sb>
</From>
</Box>
                               
                                ) : (
                                        <Box style={{"background":"blue"}}>	
        <Build>
               {
                show1 ? (  <Col onClick={tog} style={{marginLeft:"400px"}}></Col>) : ( <Col onClick={tog1}></Col>)
               }
</Build>
<From onSubmit={onHandleSubit}>
<ImageHolder>
<ImageLabel htmlFor='pix'>
<Image src={image}/>  
</ImageLabel>
<ImageInput id="pix" type="file" onChange={onHandleImage} />
</ImageHolder>
<Sign>Register!!!!</Sign>
<Cover>
{errors.email && <Div>Error</Div>}
<Eye>
<Input placeholder="Email:" {...register("email")}/>       
</Eye>
{errors.password && <Div> Password:</Div>}
<Eye>
         <Input
     placeholder='password'
     {...register("password")} type="password"/>
</Eye>
{/* {errors.ConfirmPassword&& <Div>Confirm Password:</Div>} */}
{errors.password && <Div>!!</Div>}
<Eye>
         <Input
     placeholder='Confirm Password'
     {...register("confirm")} type={eye ? "text": "password"} 
 />
{/* <Input placeholder="Confirm Password:"type="password" {...register("ConfirmPassword")}/>        */}
{/* <Input  placeholder="Confirm Your  PassWord:"type={eye ? "text": "password"} {...register("confirm")}/>   */}
<div onClick={see}  >
<Icon>     
</Icon>
</div>
</Eye>
</Cover>     
<Up>
                     Registering with our Teams ??<Tm>Terms</Tm>and<Tm>Privacy</Tm> y
</Up>
<Sb type="submit">
  Sign-In    
</Sb>
</From>
</Box>
                                )
                        }
                </div>
        )
}
export default Regeter

const Icon = styled(BsEyeSlash)`
justify-content: center;
display: flex;
align-items: center;
`
const ImageInput = styled.input`
display:none
`

const ImageHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-items: center;
`

const ImageLabel = styled.label`
padding: 8px 15px;
/* border-radius: var(--appRadiusSmall); */
/* background-color: var(--appText); */
color: var(--appBG);
font-size: 12px;
margin-top: 4px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const Build=styled.div`
width: 65px;
height: 25px;
background-color: red;
border: 1px solid red;
border-radius: 20px;
/* justify-content: center; */
display: flex;
align-items: center;
position: relative;
top: 30%;
left: -100px;
object-fit: cover;
`
const Col=styled.div`
width: 27px;
height: 27px;
background-color: #000;
border: 1px solid red;
border-radius: 50%;
`
const Sb=styled.button`
padding: 10px 15px;
font-size: 14px;
background-color: #000;
color: lightgray;
outline: none;
border-radius: 3px;
border: 1px solid lightgray;
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0px;
:hover{
	cursor: pointer;
          background-color: transparent;
          color: #000;
          border: 1px solid #000;
          /* border: 1px solid #aacbf7; */
}
`
const Up=styled.div`
width: 80%;
height: 7vh;
font-size: 11px;
/* font-weight: 100; */
color:#4d4d4d;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
`
const Tm=styled.div`
margin: 0px 8px;

`
const Cover=styled.div`
display: flex;
flex-direction: column;
        width: 80%;
min-height: 20px;
justify-content: center;
align-content: center;
/* background-color: blue; */

`
const Div=styled.div`
padding:0px 10px;
font-size: 13px;
color:#ff0000;
display: flex;
align-items: center;
`
const Eye=styled.div`
outline: none;
display: flex;
        width: 93%;
height: 40px;
/* background-color: blue; */
justify-content: center;
display: flex;
align-items: center;
border: none;
border-bottom: 1px solid lightgray;
margin: 5px 0px;
`
const Input=styled.input`
        width: 93%;
height: 20px;
padding: 10px;
outline: none;
/* margin: 10px 0px; */
border: none;
/* border-bottom: 1px solid lightgray; */

/* border: 2px solid lightgray; */
`
const Box=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
/* background-color: #000; */
/* background: rgb(255,255,255); */
 /* background: linear-gradient(90deg,   */
 /* rgba(255,255,255,1) 0%, rgba(197,222,254,1)   */
/* 28%, rgba(252,253,255,1) 100%);  */
/* background:linear-gradient(); */
align-items: center;
`
const From=styled.form`
width: 30%;
height: 530px;
display: flex;
border-radius: 5px;
border: 1px solid #fff;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:#fff;
`
const Image= styled.img`
width: 110px;
height: 110px;
border-radius: 50%;
background-color: green;
display: flex;
justify-content: center;
align-items: center;
object-fit: cover;
`
const Sign= styled.div`
width: 22%;
height: 7vh;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
font-size: 22px;
font-weight: 600;

`