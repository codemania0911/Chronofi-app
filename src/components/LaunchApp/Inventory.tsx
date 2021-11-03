import React from 'react'
import styled from 'styled-components'
import logoImg from "../../assets/images/logo.png"
import Icon from "../../assets/images/icon.png"
import Arrow from "../../assets/images/Group.png"
import buttonLayer from "../../assets/images/buttonLayer.png"
import { colors } from '../../styles'
import Bot1 from "../../assets/images/bot1.png"
import Bot2 from "../../assets/images/bot2.png"
import Bot3 from "../../assets/images/bot3.png"
import BotDefault from "../../assets/images/bot_default.png"
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
`
const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left:2%;
    padding-right:2%;
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
    padding:2.5%;   
`;

const ButtonName = styled.div`
    color:white;
    font-size:20px;
    font-weight:bold;     
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`;
const ButtonIcon = styled.img`
    width:10%;
    height:100%;
`;
const ButtonLayer = styled.div`
    background:url(${buttonLayer});
    width: 216px;
    height: 81px;
    padding-top: 7%;
    padding-left: 14%;
`;

const BackgroundContainer = styled.div`
    width: 100%; 
    background-image: url(/background_1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex; 
    padding-top:2%;
    padding-left:2%;
    flex-direction:row;
`;
const CardContainer = styled.div`
    width: 100%;   
    display: flex; 
    padding:5%;       
    flex-direction:column;
    justify-content:center;
`;
const IconLayer = styled.img`
    width: 87px;
    height: 60px;     
`;   
const BotContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;    
    width:100%;  
`;   
const BotImg = styled.img`
    width: 230px;
    height: 300px;   
`;
const ImageLayer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:2%;
`;
function Inventory() {
    return (
        <TotalContainer  id="inventory">
            <Container>                 
                <SectionContainer>
                    <LogoImg src={logoImg}></LogoImg>
                </SectionContainer>
                <SectionContainer>
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
                    <ButtonLayer>
                        <ButtonName>CONNECT</ButtonName>    
                    </ButtonLayer>                
                </SectionContainer>
            </Container>
            <BackgroundContainer>
                <a href="/">
                    <IconLayer src={Arrow}></IconLayer>
                </a>                
                <CardContainer>                
                    <BotContainer>
                        <ImageLayer>
                            <BotImg src={Bot1}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={Bot2}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={Bot3}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>
                        <ImageLayer>
                            <BotImg src={BotDefault}></BotImg>
                        </ImageLayer>                                                                                                 
                    </BotContainer>
                </CardContainer>
            </BackgroundContainer>
        </TotalContainer>
    )
}

export default Inventory
