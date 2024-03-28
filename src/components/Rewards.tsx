import React from "react";
import ColorChoice from './ColorChoice';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styled from 'styled-components';

interface propsCast {
    items: any[];
}

const StyledRewards = styled.div`
  padding: 12px 24px;
`

const Rewards = ( props: propsCast ) => {
    let rewardLabel : string;
    let rewardValue : number;
    let chipLabel : string;
    let rewards = props.items.map( ( reward : any, key : number )  => {
        if (reward[0]) {
            rewardLabel = reward[0];
            rewardValue = reward[1];
            chipLabel = `+${rewardLabel} ${rewardValue}`;  
        }
        key++;
        return (
            <StyledRewards 
                key={key} 
                className="reward_chip"
                style={{
                    backgroundColor: ColorChoice(rewardValue)
                }}><AccessibilityNewIcon />{chipLabel}
            </StyledRewards>
        );
    });
    return ( 
        <div className="rewards">
            {rewards}
        </div> 
    )
};
 
export default Rewards;