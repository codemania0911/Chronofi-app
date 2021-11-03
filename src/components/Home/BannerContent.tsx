import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

import telegramIcon from '../../assets/images/telegram.png'
import twitterIcon from '../../assets/images/twitter.png'
import onlineIcon from '../../assets/images/online.png'
import buttonplay from '../../assets/images/buttonplay.png'
import landingBottom from '../../assets/images/landingBottom.png'
import topImage from '../../assets/images/topImage.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection: 'column-reverse',
        // },
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

const Container = styled.div`
    width: 100%;
    height:100vh;
    background-image: url(/background4.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`
const BottomContainer = styled.div`
    position:absolute;
    bottom:-15px;
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
    @media (max-width: 660px) {
        bottom:0px;
    }
`
const ContainerTitle = styled.p`
    display:flex;
    color:white;
    text-align:center;
    margin:0rem auto 0 auto;
    font-size: 32px;
    font-weight: 100 !important;
    @media (max-width: 660px) {
        font-size: 22px;
        width:90%
    }
`
const OutlineButton = styled.button`
    width: 263px;
    height: 75px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:46px;
    background: #D35BFF;
    transition: all 0.2s ease-out;
    @media (max-width: 720px) {
        width: 100px;
        height: 35px;
        font-size:20px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        // background: rgb(${colors.fontColor});
    }
`
const PlayIcon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom:80px;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
    @media (max-width: 660px) {
        margin-bottom:10px;
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
const BottomImage = styled.img`
    position:absolute;
    pointer-events: none;
    bottom:0px;
    width:100%;
    height:15rem;
    @media (max-width: 660px) {
        height:5rem;
    }
`
const TopImage = styled.img`
    width:55%;
    @media (max-width: 1300px) {
        width:75%;
    }
`
const IconList = styled.div`
    margin: 0 auto 0px auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    @media (max-width: 660px) {
        margin: 0 auto 80px auto;
    }
`

const YoutubeLink = styled.a`
    margin: 0;
`

function BannerContent() {
    const classes = useStyles();
    return (
        <Container>
            <TopImage src={topImage} />
            <BottomContainer>
                <ContainerTitle>
                    Monster come to invade earth, Robots save the earth.
                </ContainerTitle>
                <YoutubeLink target="_blank" href="https://www.youtube.com/watch?v=Z7D4mRC84HQ"><PlayIcon src={buttonplay} ></PlayIcon></YoutubeLink>
                <IconList>
                    <SocialTag target="_blank" href="https://t.me/chronofi"><SocialIcon src={telegramIcon} ></SocialIcon></SocialTag>
                    <SocialTag target="_blank" href="https://chronofi.medium.com/"><SocialIcon src={onlineIcon} ></SocialIcon></SocialTag>
                    <SocialTag target="_blank" href="https://twitter.com/chronofi_"><SocialIcon src={twitterIcon} ></SocialIcon></SocialTag>
                </IconList>
                <BottomImage src={landingBottom} ></BottomImage>
            </BottomContainer>
        </Container >
    )
}

export default BannerContent
