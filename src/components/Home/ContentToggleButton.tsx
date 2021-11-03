import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { colors } from '../../styles'

interface Props {
    title: string;
    description1: any;
    description2: any;
    isHide: boolean;
    openTxt: () => void;
}

const useStyles = makeStyles((theme) => ({
    descriptionArea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconButton: {
        width: '30px !important',
        height: 30
    },
    icon: {
        color: 'white',
        fontSize: 30
    },
}));

const DescriptionArea = styled.div`
    width: 90%;
    margin: 0 auto -0.5em auto;
`
const Description1 = styled.p`
    width:90%;
    color: white;
    font-size: 28px;
    padding-right:10px;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px white, 0 0 0.5em white, 0 0 0.1em darkblue
    }
`
const Description = styled.p`
    margin-left:5%;
    width:90%;
    color: white;
    font-size: 18px;
    padding-right:10px;
`

const ImageContainer: React.FC<Props> = ({ title, openTxt, isHide,description1,description2 }) => {
    const classes = useStyles();
    return (
        <div>
            <DescriptionArea className={classes.descriptionArea}>
                <Description1 onClick={openTxt}>
                    {title}
                </Description1>
                <IconButton aria-label="delete" size="medium" color="primary" className={classes.iconButton} onClick={openTxt}>
                    {isHide ? <RemoveIcon className={classes.icon} /> : <AddIcon className={classes.icon} />}
                </IconButton>
            </DescriptionArea>
            {isHide && <Description>
                {description1}
            </Description>}
            {isHide && <Description>
                {description2}
            </Description>}
        </div>
    )
}

export default ImageContainer;