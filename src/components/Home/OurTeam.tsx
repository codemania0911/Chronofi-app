import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

import Avartar1 from '../../assets/images/1.png'
import Avartar2 from '../../assets/images/2.png'
import Avartar3 from '../../assets/images/3.png'
import Avartar4 from '../../assets/images/4.png'
import Avartar5 from '../../assets/images/5.png'
import Avartar6 from '../../assets/images/6.png'
import Avartar7 from '../../assets/images/7.png'
import Avartar8 from '../../assets/images/8.png'
import Avartar9 from '../../assets/images/9.png'
import Avartar10 from '../../assets/images/10.png'
import telegramIcon from '../../assets/images/telegram.png'
import onlineIcon from '../../assets/images/online.png'
import twitterIcon from '../../assets/images/twitter.png'
import footerRight from '../../assets/images/footerRight.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column-reverse',
        },
    },
    root1: {
        display: 'flex',
        marginTop: -150,
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height:67px;
    padding: 0 20px;
    border-radius: 5px;
    margin-top: 100px;
    @media (max-width: 880px) {
        flex-direction: column;
        opacity: 0.9;
        width: 100%;
        margin-top: 20px;
    }
`
const MmenuItem = styled.li`
    color: rgb(${colors.fontColor});
    font-size: 22px;
    font-weight: bold;
    margin: 0 1em;
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
        font-size: 13px;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`

const ItemContainer = styled.div`
    width: 100%;
    height:100%;
    margin: 0em auto;
    background-image: url(/background1.png);
    display:flex;
    align-items:center;
    flex-direction:column;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 800px) {
        padding: 4em auto;
    }
`
const TopTitle = styled.h1`
    margin:0;
    color:white;
    font-size:50px;
    padding-top:3%;
    margin-bottom:50px;
    @media (max-width: 560px) {
        padding-top:30px;
        font-size:25px;
    }
`
const AvartarImg = styled.img`
    margin-top:40px;
    width: 230px;
    padding:0 45px;
    @media (max-width: 1000px) {
        width: 30%;
        padding:10px;
    }
`
const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    line-height: 1.5;
`
const IconList = styled.div`
    margin: 0 auto 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    @media (max-width: 880px) {
        margin: 150px auto 0 auto;
    }
`
const SocialTag = styled.a`
    margin-right:3%;
    @media (max-width: 560px) {
        width: 100%;
        margin-top:-2%;
    }
`
const SocialIcon = styled.img`
    width: 180px;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
    @media (max-width: 560px) {
        margin-top:30px;
        width: 100px;
    }
`
const FooterTxt = styled.p`
    color:white;
    font-size:24px;
    font-weight:300;
    @media (max-width: 560px) {
        font-size:20px;
    }
`
const FooterImageArea = styled.div`
    width:100%;
    display:flex;
    justify-content:end;
    margin-top:-120px;
    pointer-events: none;
    padding-bottom:50px;
    @media (max-width: 880px) {
        width:0%;
        margin-top:0px;
    }
`
const AvatarImageArea = styled.div`
    width:70%;
    margin: 0 auto;
    text-align:center;
    @media (max-width: 1000px) {
        width: 100%;
    }
`
const FooterImage = styled.img`
    margin-right:50px;
    width:90px;
    @media (max-width: 880px) {
        width:0%;
    }
`

function OurTeam() {
    const classes = useStyles();
    return (
        <ItemContainer id="team">
            <TopTitle>
                FOUNDING TEAM
            </TopTitle>
            <AvatarImageArea>
                <AvartarImg src={Avartar1} />
                <AvartarImg src={Avartar2} />
                <AvartarImg src={Avartar3} />
                <AvartarImg src={Avartar4} />
                <AvartarImg src={Avartar5} />
                <AvartarImg src={Avartar6} />
                <AvartarImg src={Avartar7} />
                <AvartarImg src={Avartar8} />
                <AvartarImg src={Avartar9} />
                <AvartarImg src={Avartar10} />
            </AvatarImageArea>
            <MenuContainer>
                <MmenuItem><a href="#dashboard">HOME</a></MmenuItem>
                <MmenuItem><a href="#about">ABOUT</a></MmenuItem>
                <MmenuItem><a href="#tokenomics">TOKENOMICS</a></MmenuItem>
                <MmenuItem><a href="#roadmap">ROADMAP</a></MmenuItem>
                <MmenuItem><a href="#feature">FEATURES</a></MmenuItem>
                <MmenuItem><a href="#team">TEAM</a></MmenuItem>
                <MmenuItem><a href="./Whitepaper.pdf">WHITEPAPER</a></MmenuItem>
            </MenuContainer>
            <IconList>
                <SocialTag target="_blank" href="https://t.me/chronofi"><SocialIcon src={telegramIcon} ></SocialIcon></SocialTag>
                <SocialTag target="_blank" href="https://chronofi.medium.com/"><SocialIcon src={onlineIcon} ></SocialIcon></SocialTag>
                <SocialTag target="_blank" href="https://twitter.com/chronofi_"><SocialIcon src={twitterIcon} ></SocialIcon></SocialTag>
            </IconList>
            <FooterTxt>
                COPYRIGHT 2021 CHRONOFI
            </FooterTxt>
            <FooterImageArea>
                <FooterImage src={footerRight}></FooterImage>
            </FooterImageArea>
        </ItemContainer>
    )
}

export default OurTeam
