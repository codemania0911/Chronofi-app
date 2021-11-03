import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { colors } from '../../styles'

interface MenuAreaProps {
    displayMenu: boolean;
    accountID: string;
    openMenu: () => void;
    connectMetaMask: () => void;
}

interface MenuContainerProps {
    status: boolean;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height:67px;
    padding: 0 20px;
    border-radius: 5px;
    margin-top: 26px;
    @media (max-width: 1000px) {
        flex-direction: column;
        transform: translateY(${props => props.status ? '-180%' : '30%'});
        background: rgb(${colors.main});
        opacity: 0.9;
        width: 100%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
        height:280px;
        margin-top: 0px;
    }
`
const MmenuItem = styled.li`
    color: rgb(${colors.fontColor});
    font-size: 22px;
    font-weight: bold;
    margin: 0 1em;
    @media (max-width: 1200px) {
        font-size: 18px;
    }
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const MmenuItem1 = styled.li`
    color: rgb(${colors.fontColor});
    
    font-weight: 400;
    background: rgb(${colors.red});
    margin: 0 1em;
    padding: 10px 16px;
    border-radius: 5px;
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0.5em;
    &:hover {
        cursor: pointer;
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({ displayMenu, connectMetaMask, accountID }) => {

    return (
        <MenuContainer status={displayMenu}>
            <MmenuItem><a href="#dashboard">HOME</a></MmenuItem>
            <MmenuItem><a href="#about">ABOUT</a></MmenuItem>
            <MmenuItem><a href="#tokenomics">TOKENOMICS</a></MmenuItem>
            <MmenuItem><a href="#roadmap">ROADMAP</a></MmenuItem>
            <MmenuItem><a href="#feature">FEATURES</a></MmenuItem>
            <MmenuItem><a href="#team">TEAM</a></MmenuItem>
            <MmenuItem><a href="./Whitepaper.pdf">WHITEPAPER</a></MmenuItem>
            <MmenuItem><a href="./launchapp">LAUNCH APP</a> </MmenuItem>          
        </MenuContainer>
    )
}

export default MenuArea
