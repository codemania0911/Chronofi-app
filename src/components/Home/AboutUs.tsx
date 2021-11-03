import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import character1 from '../../assets/images/character1.png'
import character2 from '../../assets/images/character2.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column-reverse',
            padding:20,
        },
    },
    root1: {
        display: 'flex',
        marginTop:-150,
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            marginTop:0,
        },
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column-reverse',
            padding:20,
            marginTop:0,
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
        padding-top:50px;
        font-size:28px;
    }
`
const BannerImg = styled.img`
    width: 90%;
    height: 100%;
    @media (max-width: 560px) {
        width: 100%;
        height: 90%;
    }
`
const BannerImg1 = styled.img`
    width: 90%;
    height: 100%;
    @media (max-width: 560px) {
        width: 100%;
        height: 100%;
    }
`
const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    line-height: 1.5;
    @media (max-width: 560px) {
        padding:0;
        font-size: 10px;
        font-weight: 400;
    }
`
function AboutUs() {
    const classes = useStyles();
    return (
        <ItemContainer id="about">
            <TopTitle>
                ABOUT US
            </TopTitle>
            <Grid container className={classes.root}>
                <Grid item xs={7} md={3} className={classes.imgCont}>
                    <BannerImg src={character1} />
                </Grid>
                <Grid item xs={5} md={7} className={classes.textCont}>
                    <Description>
                        Create and build a play to earn ecosystem, Chrono guides gamers into the blockchain industry by removing barriers to entry and providing a complete infrastructure and truly entertaining games. Through the first innovative promotion system and cooperation plan, Chrono is rapidly acquiring traditional gamers and blockchain native users, providing integrated solutions for the blockchain gaming industry.
                    </Description>
                </Grid>
            </Grid>
            <Grid container className={classes.root1}>
                <Grid item md={3}></Grid>
                <Grid item xs={5} md={6} className={classes.textCont}>
                    <Description>
                        ChronoFi is game RPG which will have 2 version 2D and 3D. In 2D the user able to fight monster and CFC as reward then for 3D version will release on Phase 3, Players will feels enjoy and the games is not boring, because 3D version have an adventure.
                    </Description>
                </Grid>
                <Grid item xs={7} md={3} className={classes.imgCont}>
                    <BannerImg1 src={character2} />
                </Grid>
            </Grid>
        </ItemContainer>
    )
}

export default AboutUs
