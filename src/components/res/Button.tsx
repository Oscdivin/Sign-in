import styled from "styled-components";
interface ibutton{
        w?:string,
        h?: string
        txt?: string,
        col?: string,
        bag?: string,
        boder?: string,
        bu?: string,
}
const Button:React.FC<ibutton> =({w,h,txt,col,bag,boder,bu})=>{
        return(
                <div>
                        {/* <Box> */}

                        {/* </Box> */}
                                                        
<Sign wide={w} high={h} bc={bag}cl={col} bo={boder} br={bu}>
{txt}
</Sign>
                </div>
        )
}

export default Button;

const Sign =styled.div<{wide:any,high:any,bc:any,cl:any,bo:any,br:any }>`
width: ${({wide})=>wide};
height: ${({high})=>high};
background-color: ${({bc})=>bc};
display: flex;
align-items: center;
color: ${({cl})=>cl};
        border:1px solid ${({bo})=>bo};
border-radius: ${({br})=>br};
/* border-radius: 5px; */
justify-content: center;
:hover{
        cursor: pointer;
}
`