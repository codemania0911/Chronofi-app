import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

import loadMap from '../../assets/images/loadMap.png'
import roadMap1 from '../../assets/images/roadMap1.png'

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
const RoadMapImg = styled.img`
    margin:0;
    width: 100%;
    @media (max-width: 800px) {
        display: none;
    }
`
const RoadMapImg1 = styled.img`
    margin:0;
    display: none;
    @media (max-width: 800px) {
        width: 100%;
        display: flex;
    }
`
function LoadMap() {
    const classes = useStyles();
    return (
        <ItemContainer id="roadmap">
            <RoadMapImg src={loadMap} />
            <RoadMapImg1 src={roadMap1} />
        </ItemContainer>
    )
}

export default LoadMap
