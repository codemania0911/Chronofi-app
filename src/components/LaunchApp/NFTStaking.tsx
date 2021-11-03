import React from 'react'
import styled from 'styled-components'
import logoImg from "../../assets/images/logo.png"
import Icon from "../../assets/images/icon.png"
import Arrow from "../../assets/images/Group.png"
import buttonLayer from "../../assets/images/buttonLayer.png"
import { colors } from '../../styles'
import Bot from "../../assets/images/Bot97.png" 
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
    padding-top: 13%;
    padding-left: 28%;
`;

const NFTStakingContainer = styled.div`
    width: 100%;    
    display: flex; 
    padding:7%;
    padding-top:0px;
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
const ImageLayer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:2%;
  
`;
const BotImg = styled.img`
    width: 230px;
    height: 300px;     
`;

const SectionDivider = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;           
    width: 100%;
    background-image: url(/background_1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    padding-left:2%;
    padding-top:2%;       
`;
const Section1Layer = styled.div`
    width:5%;
`;
const Section2Layer = styled.div`
    display:flex;
    flex-direction:column;    
    justify-content:space-between;
    align-items: center;       
    width:80%;
`;

const Section3Layer = styled.div`
    display:flex;
    flex-direction:column;    
    justify-content:center;
    align-items: center;       
    width:15%; 
`;
const BorderRect = styled.div`
    border-bottom: 2px solid white;
    display:flex;
    flex-direction:row;   
`;
const Rect = styled.div`    
    display:flex;
    flex-direction:column;       
`;
const ClaimTxtArea = styled.div`
    background: #0092D6;
    border-radius: 5px;
`;

const ClaimTxt = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    color: #FFFFFF;
   
`;
const RectTitle = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
`;
const InfoTxt = styled.p`
    display:flex;
    flex-direction:row;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;   
    width:50%;
    color: #FFFFFF;
    justify-content:space-between;
`;
const StakingInfoLayer = styled.div`
    width: 90%;
    height: 200px;
    background: #000000;
    border: 1.4px solid #003C58;
    box-sizing: border-box;
    border-radius: 8px;
    padding:3%;
`;
const StakingRewardLayer = styled.div`
    width: 90%;
    height: 200px;    
    background: #000000;
    border: 1.4px solid #003C58;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top:5%;
    padding:3%;
`;

const SubInfoLayer = styled.div`
    display:flex;
    flex-direction:row;    
    
    align-items: center;           
`;
const NFTHeadLayer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    padding:7%;
    padding-top:0px;
    padding-bottom:0px;
`;
const NFTTitle = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #FFFFFF;
`;

const NFTInfoLayer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;

`;
const NFTInfoSubLayer = styled.div`
    width: 159px;
    height: 24px;
    border: 1px solid #003C58;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    margin:2%;
`;
 const NFTPropertySection = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    padding:7%;
    padding-top:0px;
    padding-bottom:0px;
    text-align:center;
 `;

 const NFTPropertyLayer_1 = styled.div`
    display:flex;
    flex-direction:row;  
    border: 1.4px solid #003C58;
    box-sizing: border-box;
    border-radius: 8px;   
    width:10%;  
    text-align:center;
    justify-content:center;
`;
const NFTPropertyLayer_2 = styled.div`
    display:flex;
    flex-direction:row;  
    border: 1.4px solid #003C58;
    box-sizing: border-box;
    border-radius: 8px;   
    width:80%;  
    justify-content:space-around;
`;

const NFTPropertyRect = styled.div`
    display:inline-flex;
    flex-direction:column; 
    text-align:center;   
`;

 const NFTPropertyTxt = styled.p`
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;    
    text-align: center;    
    color: #FFFFFF;   
    text-align:center; 
 `;
function NFTStaking() {
    return (
        <TotalContainer id="nftstaking">
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
                        <ButtonName>CONNECT</ButtonName>    
                    </ButtonLayer>                
                </SectionContainer>
            </Container>
            <SectionDivider>                
                <Section1Layer>
                    <a href="/">
                        <IconLayer src={Arrow}></IconLayer>
                    </a>                    
                </Section1Layer>
                <Section2Layer>
                    <NFTHeadLayer>
                        <NFTTitle>NFT STAKING</NFTTitle>
                        <NFTInfoLayer>
                            <NFTInfoSubLayer>FAUCET CFC</NFTInfoSubLayer>
                            <NFTInfoSubLayer>How it Works?</NFTInfoSubLayer>
                            <NFTInfoSubLayer>Stake All</NFTInfoSubLayer>
                            <NFTInfoSubLayer>Unstake All</NFTInfoSubLayer>
                        </NFTInfoLayer>
                    </NFTHeadLayer>
                    <NFTPropertySection>
                        <NFTPropertyLayer_1>
                            <NFTPropertyRect>
                                <NFTPropertyTxt>0%</NFTPropertyTxt>
                                <NFTPropertyTxt>Avg. APY</NFTPropertyTxt>
                            </NFTPropertyRect>                            
                        </NFTPropertyLayer_1>
                        <NFTPropertyLayer_2>
                            <NFTPropertyRect>
                                <NFTPropertyTxt>TOTAL VALUE</NFTPropertyTxt>
                                <NFTPropertyTxt>150000 CREDITS</NFTPropertyTxt>
                            </NFTPropertyRect> 
                            <NFTPropertyRect>
                                <NFTPropertyTxt>TOTAL NFTs</NFTPropertyTxt>
                                <NFTPropertyTxt>10</NFTPropertyTxt>
                            </NFTPropertyRect> 
                            <NFTPropertyRect>
                                <NFTPropertyTxt>C/R/E/L</NFTPropertyTxt>
                                <NFTPropertyTxt>0/10/0/0</NFTPropertyTxt>
                            </NFTPropertyRect> 
                            <NFTPropertyRect>
                                <NFTPropertyTxt>STAKED</NFTPropertyTxt>
                                <NFTPropertyTxt>0</NFTPropertyTxt>
                            </NFTPropertyRect> 
                            <NFTPropertyRect>
                                <NFTPropertyTxt>UNSTAKED</NFTPropertyTxt>
                                <NFTPropertyTxt>10</NFTPropertyTxt>
                            </NFTPropertyRect>                    
                        </NFTPropertyLayer_2>
                    </NFTPropertySection>
                    <NFTStakingContainer>                
                        <BotContainer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            <ImageLayer>
                                <BotImg src={Bot}></BotImg>
                            </ImageLayer>
                            
                                         
                        </BotContainer>
                    </NFTStakingContainer>   
                </Section2Layer>
                <Section3Layer>
                    <StakingInfoLayer>
                        <BorderRect>
                            <InfoTxt>Stakign Info</InfoTxt>
                        </BorderRect>
                        <BorderRect>
                            <InfoTxt>Staked</InfoTxt>
                            <InfoTxt>
                                <SubInfoLayer>≈</SubInfoLayer>
                                <SubInfoLayer>150000</SubInfoLayer>
                                <SubInfoLayer>CFC</SubInfoLayer>
                            </InfoTxt>                         
                        </BorderRect>
                        <BorderRect>
                            <InfoTxt>Average APY</InfoTxt>
                            <InfoTxt>
                                <SubInfoLayer>≈</SubInfoLayer>
                                <SubInfoLayer>70%</SubInfoLayer>
                                <SubInfoLayer></SubInfoLayer>
                            </InfoTxt>   
                               
                        </BorderRect>
                        <BorderRect>
                            <InfoTxt>Total Earning</InfoTxt>
                            <InfoTxt>
                                <SubInfoLayer>≈</SubInfoLayer>
                                <SubInfoLayer>2013.6</SubInfoLayer>
                                <SubInfoLayer>CFC</SubInfoLayer>
                            </InfoTxt>                                          
                        </BorderRect>
                    </StakingInfoLayer>
                    <StakingRewardLayer>
                        <BorderRect>
                            <InfoTxt>Earned Rewards</InfoTxt>
                        </BorderRect>                        
                        <BorderRect>                            
                            <InfoTxt>
                                <SubInfoLayer>≈</SubInfoLayer>
                                <SubInfoLayer>2013.6</SubInfoLayer>
                                <SubInfoLayer>CFC</SubInfoLayer>
                            </InfoTxt> 
                            <InfoTxt>
                                <SubInfoLayer></SubInfoLayer>
                                <SubInfoLayer>
                                    <ClaimTxtArea>
                                        <ClaimTxt>CLAIM</ClaimTxt>
                                    </ClaimTxtArea>
                                </SubInfoLayer>
                            </InfoTxt>
                        </BorderRect>
                        <Rect> 
                            <RectTitle>You can exchange your CFC tokens on PancakeSwap</RectTitle>                        
                        </Rect>
                    </StakingRewardLayer>
                </Section3Layer>
            </SectionDivider>
            
            
            
        </TotalContainer>
    )
}

export default NFTStaking
