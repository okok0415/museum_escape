import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import One from "./Images/one.png";
import Two from "./Images/two.png"
import Three from "./Images/three.png"
import Four from "./Images/four.png"
import Five from "./Images/five.png"
import Six from "./Images/six.png"
import Seven from "./Images/seven.png"
import Eight from "./Images/eight.png"
import Nine from "./Images/nine.png"
import Ten from "./Images/ten.png"
import Eleven from "./Images/eleven.png"
import Twelve from "./Images/twelve.png"
import Thirteen from "./Images/thirteen.png"
import Fourteen from "./Images/fourteen.png"
import answer from "./Images/answer.png"
import input from "./Images/input.png"
import number from "./Images/number.png"
import { Link } from "react-router-dom";




const Wrapper = styled.div`
    background-color: white;
`
const startAnimation = keyframes`
    0%{
        opacity: 0;
    }
    50%{
    
    }
    100%{
        opacity: 1;
    }

`
const Img = styled.img`
    width: 100vw;
    height: 100%;
    max-width: 100%;
    animation : ${startAnimation} 0.6s;
    display:flex;
    justify-content: center;
    z-index: 0;
`

const Button = styled.img.attrs({ src: answer })`
    cursor: pointer;
    width: 78%;
    position: absolute;
    z-index: 1;
    left: 50%;
    transform:translate(-50%, -270%);
`

const Input = styled.div`
    width:100vw;
    max-width: 100%;
    height:100vh;
    position: fixed;
    z-index: 1000;
    background-color: rgba(0,0,0,0.74);

    
`

const RealInput = styled.input`
    background : url(${input}) no-repeat;
    width: 266px;
    height: 57px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    border: none;
    padding: 20px;
    font-size: 30px;
    font-weight: 700;
    color: rgb(138, 108, 79);
    text-align: center;
    z-index: 2000;
    animation : ${startAnimation} 0.6s;
`

const NumInput = styled.div`
    width: 266px;
    height: 72px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    border: none;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    animation : ${startAnimation} 0.6s;
    display: grid;
    z-index: 2000;
    grid-template-columns: 1fr 1fr 1fr;
`
const NumInput1 = styled.input`
    background: url(${number}) no-repeat;
    background-position: cover;
    width:72px;
    height: 72px;
    border: none;
    font-size: 30px;
    font-weight: 700;
    color: rgb(138, 108, 79);
    text-align: center;
    animation : ${startAnimation} 0.6s;
`
const OneImg = styled(Img).attrs({ src: One })``;
const TwoImg = styled(Img).attrs({ src: Two })``;
const ThreeImg = styled(Img).attrs({ src: Three })``;
const FourImg = styled(Img).attrs({ src: Four })``;
const FiveImg = styled(Img).attrs({ src: Five })``;
const SixImg = styled(Img).attrs({ src: Six })``;
const SevenImg = styled(Img).attrs({ src: Seven })``;
const EightImg = styled(Img).attrs({ src: Eight })``;
const NineImg = styled(Img).attrs({ src: Nine })``;
const TenImg = styled(Img).attrs({ src: Ten })``;
const ElevenImg = styled(Img).attrs({ src: Eleven })``;
const TwelveImg = styled(Img).attrs({ src: Twelve })``;
const ThirteenImg = styled(Img).attrs({ src: Thirteen })``;
const FourteenImg = styled(Img).attrs({ src: Fourteen })``;




function Main() {
    const [check, setCheck] = useState<number>(1);
    const [inp, setInp] = useState<boolean>(false);
    const [market, setMarket] = useState<string>('');
    const [oldbook, setOldbook] = useState<string>('')
    const [kyung, setKyung] = useState<string>();
    const [numone, setNumone] = useState<string>();
    const [numtwo, setNumtwo] = useState<string>();
    const [numthree, setNumthree] = useState<string>();
    const oneRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const twoRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const threeRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const i = 0;


    const checkPlus = () => {
        setCheck(check + 1)
    }
    const seeInput = () => {
        setInp(true)
    }
    const hideInput = () => {
        setInp(false)
    }
    const onChangeMarket = (e: React.FormEvent<HTMLInputElement>) => {
        setMarket(e.currentTarget.value);
    }
    const onChangeOldbook = (e: React.FormEvent<HTMLInputElement>) => {
        setOldbook(e.currentTarget.value);
    }
    const onChangeKyung = (e: React.FormEvent<HTMLInputElement>) => {
        setKyung(e.currentTarget.value);
    }
    const onChangeNumOne = (e: React.FormEvent<HTMLInputElement>) => {
        setNumone(e.currentTarget.value);
        twoRef.current.focus()
    }
    const onChangeNumTwo = (e: React.FormEvent<HTMLInputElement>) => {
        setNumtwo(e.currentTarget.value);
        threeRef.current.focus()
    }
    const onChangeNumThree = (e: React.FormEvent<HTMLInputElement>) => {
        setNumthree(e.currentTarget.value);
    }
    const goMuseum = () => {
        window.location.href = 'https://www.museum.go.kr/'
    }

    useEffect(() => {
        if (market === 'MARKET' || market === 'market' || market === 'Market') {
            alert('정답입니다!')
            checkPlus()
            setMarket('')
            hideInput()
        };
    }, [market]);
    useEffect(() => {
        if (oldbook === '헌책상점') {
            alert('정답입니다!')
            checkPlus()
            setOldbook('')
            hideInput()
        };
    }, [oldbook]);

    useEffect(() => {
        if (kyung === '(2, 6.5)') {
            alert('정답입니다!')
            checkPlus()
            setKyung('')
            hideInput()
        };
    }, [kyung]);

    useEffect(() => {
        if (numone === '3' && numtwo === '0' && numthree === '6') {
            alert('정답입니다!')
            checkPlus()
            setNumone('')
            setNumtwo('')
            setNumthree('')
            hideInput()
        };
    }, [numone, numtwo, numthree]);


    if (check === 1) {
        return (
            <Wrapper>
                <OneImg onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 2) {
        return (
            <Wrapper>
                <TwoImg />
                <Button onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 3) {
        return (
            <Wrapper>
                <ThreeImg onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 4) {
        return (
            <Wrapper>
                <FourImg />
                <Button onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 5) {
        return (
            <Wrapper>
                {inp && (<><Input onClick={hideInput} /><RealInput autoFocus value={market} onChange={onChangeMarket} /></>)}
                <FiveImg />
                <Button onClick={seeInput} />
            </Wrapper>
        )
    }
    else if (check === 6) {
        return (
            <Wrapper>
                <SixImg />
                <Button onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 7) {
        return (
            <Wrapper>
                {inp && (<><Input onClick={hideInput} /><RealInput autoFocus value={oldbook} onChange={onChangeOldbook} /></>)}
                <SevenImg />
                <Button onClick={seeInput} />
            </Wrapper>
        )
    }
    else if (check === 8) {
        return (
            <Wrapper>
                <EightImg />
                <Button onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 9) {
        return (
            <Wrapper>
                {inp && (<><Input onClick={hideInput} /><RealInput autoFocus value={kyung} onChange={onChangeKyung} /></>)}
                <NineImg />
                <Button onClick={seeInput} />
            </Wrapper>
        )
    }
    else if (check === 10) {
        return (
            <Wrapper>
                <TenImg onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 11) {
        return (
            <Wrapper>
                {inp && (<><Input onClick={hideInput} /><NumInput><NumInput1 ref={oneRef} autoFocus value={numone} onChange={onChangeNumOne} /><NumInput1 ref={twoRef} value={numtwo} onChange={onChangeNumTwo} /><NumInput1 ref={threeRef} value={numthree} onChange={onChangeNumThree} /></NumInput></>)}
                <ElevenImg />
                <Button onClick={seeInput} />
            </Wrapper>
        )
    }
    else if (check === 12) {
        return (
            <Wrapper>
                <TwelveImg />
                <Button onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 13) {
        return (
            <Wrapper>
                <ThirteenImg />
                <Button onClick={checkPlus} />
            </Wrapper>
        )
    }
    else if (check === 14) {
        return (
            <Wrapper>
                <FourteenImg />
                <Button onClick={goMuseum} />
            </Wrapper>
        )
    }




    return (
        <Wrapper>

        </Wrapper>
    )
}

export default Main;