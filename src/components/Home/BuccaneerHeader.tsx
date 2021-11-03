import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoArea from './LogoArea'
import MenuArea from './MenuArea'
import SocialLinkArea from './SocialLinkArea'
import ToggleMenuIcon from './ToggleMenuIcon'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

interface Props {
    connectMetaMask:() => void
    accountID:string
}

const BuccaneerHeader: React.FC<Props> = ({ connectMetaMask, accountID}) => {
    const [isHide, setIsHide] = useState(false)
    const [currentWidth, setCurrentWidth] = useState(0)

    useEffect(() => {
        function updateSize() {
            setCurrentWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        setIsHide(true)
    }, [currentWidth]);

    return (
        <Wrapper>
            <LogoArea />
            <MenuArea displayMenu={isHide} openMenu={() => setIsHide(!isHide)} accountID={accountID} connectMetaMask={connectMetaMask} />
            <ToggleMenuIcon openMenu={() => setIsHide(!isHide)} />
        </Wrapper>
    )
}

export default BuccaneerHeader
