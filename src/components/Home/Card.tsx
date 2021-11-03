import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
interface Props {
    url: string;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: radial-gradient(49.03% 164.11% at 49.03% 50.04%, rgba(${colors.gradDark}) 0%, rgba(${colors.gradLight}) 100%);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(${colors.border});
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(${colors.border}), 0 6px 20px 0 rgba(${colors.border});
    }
`
const CardImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: contain;
`
const Description = styled.p`
    color: rgb(${colors.fontColor});
    font-size: 15px;
    text-align: center;
`

const Card: React.FC<Props> = ({ url }) => {
    return (
        <Container>
            <CardImage src={url} />
        </Container>
    )
}

export default Card
