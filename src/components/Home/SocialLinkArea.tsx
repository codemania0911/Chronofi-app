import React from 'react'
import styled from 'styled-components'
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2em;
    @media (max-width: 880px) {
        display: none;
    }
`

const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0 1em;
    &:hover {
        cursor: pointer;
    }
`

function SocialLinkArea() {
    return (
        <SocialContainer>
            <SocialIcon src={twitter} />
            <SocialIcon src={telegram} />
        </SocialContainer>
    )
}

export default SocialLinkArea
