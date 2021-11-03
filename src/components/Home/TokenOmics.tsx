import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

import rocketImage from '../../assets/images/rocketImage.png'
import rocketImage1 from '../../assets/images/rocketImage1.png'
import tokenTop from '../../assets/images/tokenTop.png'

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
    margin-top:-250px;
    @media (max-width: 1250px) {
        margin-top:0px;
    }
    @media (max-width: 560px) {
        margin-top:0px;
        font-size:30px;
    }
`
const RocketImg = styled.img`
    margin-top:100px;
    width: 100%;
    @media (max-width: 800px) {
        margin-top:50px;
        display:none;
    }
`
const RocketImg1 = styled.img`
    display:none;
    margin-top:100px;
    width: 100%;
    @media (max-width: 800px) {
        display:flex;
        margin-top:-100px;
    }
`
const RocketImgArea = styled.div`
    margin-top:70px;
    width: 100%;
`
const ToptImg = styled.img`
    margin-top:0px;
    width: 100%;
    @media (max-width: 800px) {
        margin-top:50px;
    }
`
const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    line-height: 1.5;
`
function TokenOmics() {
    const classes = useStyles();
    return (
        <ItemContainer id="tokenomics">
            <ToptImg src={tokenTop} />
            <TopTitle>
                TOKENOMICS
            </TopTitle>
            <RocketImgArea>
                <RocketImg src={rocketImage} />
                <RocketImg1 src={rocketImage1} />
            </RocketImgArea>
        </ItemContainer>
    )
}

export default TokenOmics
