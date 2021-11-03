import React from 'react'
import styled from 'styled-components'
import logoImg from "../../assets/images/logo.png"
import Icon from "../../assets/images/icon.png"
import Arrow from "../../assets/images/Group.png"
import buttonLayer from "../../assets/images/buttonLayer.png"
import { colors } from '../../styles'
import BoxImage from "../../assets/images/redBox.png"
const TotalContainer = styled.div`        
    background: #000000;   
    width:100%;
`;
const Container = styled.div`   
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;   
    border: 2px solid #FAFF00;
    background: #000000;
    height: 86px;
    width:100%;
    padding-left:2%;
    padding-right:2%;
`
const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const LogoImg = styled.img`
    width: 80px;
    height: 80px;  
`;
 
const ButtonName = styled.div`
    color:white;
    font-size:20px;
    font-weight:bold;   
    margin:5%;  
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`;
const ButtonIcon = styled.img`
    width: 10%;
    height: 64%;
    margin: 3%;
`;
const ButtonLayer = styled.div`
    background:url(${buttonLayer});
    width: 216px;
    height: 81px;
    padding-top: 4%;
    padding-left: 12%;
`;

const InventoryContainer = styled.div`
    width: 100%;
    height:100vh;
    background-image: url(/background_1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;     
    padding-top:0px;
    flex-direction:column;  
    padding-left:2%;
    padding-top:2%;  
`;
const IconLayer = styled.img`
    width: 87px;
    height: 60px;    
`;   
 
const TitleLayer = styled.div`
    display:column;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    position: relative;
    top: 31%;
    transform: translate(0, -50%);
`; 
const Title1 = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;    
    text-align: center;
    color: #FFFFFF;
`;
const Title2 = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
`;
const Title3 =  styled.h2`   
    text-align: center;
    background: #331F2E;
    border-radius: 16px;
    color: #FFFFFF;    
    padding:0% 6%;
`;
const Title3Layer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
const Title2Layer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`;
const Title4 = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
`
const InputLayer = styled.div`
width: 311px;
height: 48.98px;
display: flex;
flex-direction: row;
border: 1px solid #003C58;
justify-content:space-between;
margin:3%;    
`;
function MysteryBox() {
    return (
        <TotalContainer  id="faucet">
            <Container>                 
                <SectionContainer>
                    <LogoImg src={logoImg}></LogoImg>
                </SectionContainer>                
                <SectionContainer>
                    <InputLayer>
                        <ButtonName>BALANCE</ButtonName> 
                        <ButtonName>0 CFC</ButtonName>                        
                    </InputLayer>   
                    <ButtonLayer>
                        <ButtonName>BUY CFC</ButtonName>    
                    </ButtonLayer>                                  
                </SectionContainer>
            </Container>
                  
            <InventoryContainer>   
                <a href="/">
                    <IconLayer src={Arrow}></IconLayer>  
                </a>
                
                <TitleLayer>
                    <Title1>CHRONOFI Token Faucet</Title1>
                    <Title2>Receive 100,000 $CFC tokens once every 24 hours</Title2>
                    <Title3Layer>
                        <Title3>Get CFC Tokens</Title3>
                    </Title3Layer>
                    <Title2Layer>
                        <Title4>Need BNB? Go to </Title4>
                        <Title4>BNB Faucet</Title4>
                    </Title2Layer>                
                </TitleLayer>
            </InventoryContainer>
            
        </TotalContainer>
    )
}

export default MysteryBox
