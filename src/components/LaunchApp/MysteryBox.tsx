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
const ImgSelect = styled.select`
    width: 311px;
    height: 48.98px;
    background:url(${Icon});   
    background-repeat: no-repeat;
    background-position: center right;
    background-color: #000;
    color:white;
    weight:bold;  
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
    height:1080px;
    background-image: url(/background_1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;             
    flex-direction:column;  
    padding-top:2%;
    padding-left:2%;  
`;
const IconLayer = styled.img`
    width: 87px;
    height: 60px;      
`;   
const BotContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;       
    width:100%;
    padding:7%; 
    padding-top:2%;  
`;   
const BotCardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:0px;
`;
const BotImg = styled.img`
    width: 100%;
  
`;
const BotProperty = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:50%;
`;
const BotPropertyTxt = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`;
const BotImgTitle = styled.p`    
    color:white;
    font-weight:bold;
    background: #000000;
    border: 1px solid #00AEFF;
    box-sizing: border-box;
    border-radius: 8px;
    padding:5%  40%;
`;
const InputLayer = styled.div`
    width: 311px;
    height: 48.98px;
    display: flex;
    flex-direction: row;
    border: 1px solid #003C58;
    justify-content:space-between;
    margin:3%;    
 `

function MysteryBox() {
    return (
        <TotalContainer  id="mysterybox">
            <Container>                 
                <SectionContainer>                    
                    <LogoImg src={logoImg} />                          
                </SectionContainer>
                <SectionContainer>
                    <InputLayer>
                        <ButtonName>FAUCET CFC</ButtonName>                        
                    </InputLayer>
                    <ImgSelect>                       
                        <option selected value="">RARITY</option>
                        <option value="COMMON">COMMON</option>
                        <option value="RARE">RARE</option>
                        <option value="EPIC">EPIC</option>                        
                        <option value="LEGEND">LEGEND</option>                        
                    </ImgSelect> 
                    <ImgSelect>                       
                        <option selected value="">SORT BY</option>
                        <option value="1">HIGHTEST PRICE</option>
                        <option value="2">LOWEST PRICE</option>                 
                    </ImgSelect>
                </SectionContainer>
                <SectionContainer>
                    <ButtonLayer>
                        <a href="/faucet">
                            <ButtonName>BUY CFC</ButtonName>    
                        </a>
                    </ButtonLayer>                                  
                </SectionContainer>
            </Container>
                  
            <InventoryContainer>   
                <a href="/">
                    <IconLayer src={Arrow}></IconLayer>  
                </a>
                <BotContainer>
                    <BotCardContainer>
                        <BotImg src={BoxImage}></BotImg>
                        <BotProperty>
                            <BotPropertyTxt>1000</BotPropertyTxt>
                            <BotPropertyTxt>CFC</BotPropertyTxt>
                        </BotProperty>
                        <BotImgTitle>BUY</BotImgTitle>
                    </BotCardContainer>                                                                                
                </BotContainer>
              
            </InventoryContainer>
            
        </TotalContainer>
    )
}

export default MysteryBox
