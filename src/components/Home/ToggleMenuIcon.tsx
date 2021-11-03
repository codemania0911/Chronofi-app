import React, { useEffect } from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
interface Props {
    openMenu: () => void;
}

const useClasses = makeStyles(theme => ({
    icon: {
        color: 'white',
        fontSize:30
    },
}))

const ToggleIcon = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 2em;
    top: 25px;
    display: none;
    @media (max-width: 880px) {
        display: block;
    }
`

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    &:hover {
        cursor: pointer;
    }
`

const ToggleMenuIcon: React.FC<Props> = ({ openMenu }) => {
    const classes = useClasses()
    useEffect(() => {
        openMenu()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ToggleIcon>
            <IconButton aria-label="delete" size="medium" color="primary" onClick={openMenu}>
                <MenuIcon className={classes.icon} />
            </IconButton>
        </ToggleIcon>
    )
}

export default ToggleMenuIcon
