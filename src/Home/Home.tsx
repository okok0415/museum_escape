import { useState } from "react";
import styled from "styled-components";
import One from "./Images/one.png";


const Wrapper = styled.div`
    
`
const OneImg = styled.img.attrs({ src: One })`
    width: calc(var(--vw, 1vw) * 100);
`
function Main() {
    const [check, setCheck] = useState(0)



    return (
        <Wrapper>
            {check === 0 ? <OneImg /> : }
        </Wrapper>
    )
}

export default Main;