import React from 'react'
import styled from 'styled-components'
import logoImg from "../../assets/images/logo.png"
import Icon from "../../assets/images/icon.png"
import Arrow from "../../assets/images/Group.png"
import buttonLayer from "../../assets/images/buttonLayer.png"
import { colors } from '../../styles'
import BoxImage from "../../assets/images/redBox.png"
import Battle from "../../assets/images/battle.png"
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
const ImgSelect = styled.div`
    width: 311px;
    height: 48.98px;
    display: flex;
    flex-direction: row;
    border: 1px solid #003C58;
    justify-content:space-between;
    margin:3%;    
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
    padding-top: 9%;
    padding-left: 23%;
`;

const InventoryContainer = styled.div`
    width: 100%;    
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
const BattleLayer = styled.div`
     display:flex;
     flex-direction:row;
     justify-content:center;    
`;
const BattleImg = styled.img`
    width:80%;
    height:80%;
`;
function MysteryBox() {
    return (
        <TotalContainer  id="battle">
            <Container>                 
                <SectionContainer>
                    <LogoImg src={logoImg}></LogoImg>
                </SectionContainer>               
                <SectionContainer>
                    <ButtonLayer>
                        <ButtonName>BUY CFC</ButtonName>    
                    </ButtonLayer>                                  
                </SectionContainer>
            </Container>
                  
            <InventoryContainer> 
                <a href="/">
                    <IconLayer src={Arrow}></IconLayer>  
                </a>  
                
                <BattleLayer>   
                    <BattleImg  src={Battle}></BattleImg>
                </BattleLayer>
            </InventoryContainer>
            
        </TotalContainer>
    )
}

export default MysteryBox
