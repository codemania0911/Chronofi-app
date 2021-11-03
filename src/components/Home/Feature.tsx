import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import featureImage from '../../assets/images/featureImage.png'
import feature1 from '../../assets/images/feature1.png'

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
    padding-top:3%;
    @media (max-width: 560px) {
        padding-top:30px;
        font-size:30px;
    }
`
const FeatureImg = styled.img`
    margin-top:100px;
    width: 100%;
    @media (max-width: 800px) {
        display:none;
        margin-top:50px;
    }
`
const FeatureImg1 = styled.img`
    display:none;
    @media (max-width: 800px) {
        display:flex;
        width: 100%;
        margin-top:50px;
    }
`
function Feature() {
    const classes = useStyles();
    return (
        <ItemContainer id="feature">
            <TopTitle>
                FEATURES
            </TopTitle>
            <FeatureImg src={featureImage} />
            <FeatureImg1 src={feature1} />
        </ItemContainer>
    )
}

export default Feature
