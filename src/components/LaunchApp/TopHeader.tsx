import React from 'react'
import styled from 'styled-components'
import logoImg from "../../assets/images/topIcon.png"
import BannerImg from "../../assets/images/banner.png"
import { colors } from '../../styles'
import buttonLayer from "../../assets/images/buttonLayer.png"

const TotalContainer = styled.div`        
    background: #000000;   
    width:100%;
`; 
const InventoryContainer = styled.div`
    width: 100%;
    height:100vh;
    position:relative;
    background-image: url(/background_1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;     
    padding-top:0px;
    flex-direction:row;    
`; 
const SectionContainer = styled.div`
    position:absolute;
    bottom:0px;
    width:100%;
    height:211px;
    display:flex;
    align-items:center;
    flex-direction:row;        
    justify-content:space-between;    
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

`; 
const Section_1 = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row; 
    justify-content:space-between;    
    width:30%;
    padding-left:2%;
    padding-right:4%;
    margin-top:8%;
`;
const Section_2 = styled.div`
    text-align:center;
    width:40%;  
    margin-top:3%;     
`;
const Section_3 = styled.div`     
    width:30%;  
    display:flex;
    align-items:center;
    flex-direction:row; 
    justify-content:space-between;  
    padding-left:4%;
    padding-right:2%;
    margin-top:8%;
`;

const Title = styled.a`    
    color:white;
    font-size:20px;
    font-weight:bold;
    @media (max-width: 560px) {
        width: 100%;
        margin-top:-2%;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
 `
 const BigTitle = styled.a`    
    color:white;
    font-size: 64px;
    font-weight:bold;
    margin-top:-2%;
    @media (max-width: 560px) {
        width: 100%;
        margin-top:-2%;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
 `
const MenuContainer =styled.div`
    padding:2%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`;
const IconLayer = styled.img`
    width: 538px;
    height: 137px;
`;

const MenuLayer = styled.div`
    display: flex;
    flex-direction: row;
`;
const ButtonLayer = styled.div`
    background:url(${buttonLayer});
    width: 216px;
    height: 81px;
    padding-top: 7%;
    padding-left: 14%;
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
function MysteryBox() {
    return (                
        <InventoryContainer>
            <MenuContainer>
                <MenuLayer></MenuLayer>
                <MenuLayer>
                    <ButtonLayer>
                        <a href="/faucet">
                            <ButtonName>BUY CFC</ButtonName>    
                        </a>                        
                    </ButtonLayer>   
                    <ButtonLayer>
                        <ButtonName>CONNECT</ButtonName>    
                    </ButtonLayer>                
                </MenuLayer>
            </MenuContainer> 
            <SectionContainer>
                <Section_1>
                    <Title href="/mystery-box">MYSTERYBOX</Title>
                    <Title href="/market-place">MARKETPLACE</Title> 
                </Section_1>
                <Section_2>
                    <BigTitle href="/battle">BATTLE</BigTitle> 
                </Section_2>
                <Section_3>
                    <Title href="/inventory">INVENTORY</Title>                                                
                    <Title href="/nft-staking">NFT FARMING</Title> 
                </Section_3>
            </SectionContainer>                               
        </InventoryContainer>                    
    )
}

export default MysteryBox
