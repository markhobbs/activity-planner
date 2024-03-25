import React from "react";
import ColorChoice from './ColorChoice';
import styled from 'styled-components';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

interface propsCast {
    items: any[];
}

const Rewards = ( props: propsCast ) => {
    let rewardLabel : string;
    let rewardValue : number;
    let chipLabel : string;
    let rewards = props.items.map( ( reward : any, key : number )  => {

        // If reward Label, build a Chip.
        if (reward[0]) {
            rewardLabel = reward[0];
            rewardValue = reward[1];
            chipLabel = `+${rewardLabel} ${rewardValue}`;  
        }
        key++;
        
        return (
            <Wrapper 
                key={key} 
                className="reward_chip"
                style={{
                    backgroundColor: ColorChoice(rewardValue)
                }}><AccessibilityNewIcon />{chipLabel}
            </Wrapper>
        );
    });

    return ( 
        <div className="rewards">
            {rewards}
        </div> 
    )
};

const Wrapper = styled.div`
  padding: 12px 24px;
`
 
export default Rewards;
