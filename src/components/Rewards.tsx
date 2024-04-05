import React from "react";
import ColorChoice from './ColorChoice';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styled from 'styled-components';

const StyledRewards= styled.div``
const StyledRewardsItem = styled.div`
  padding: 12px 24px;
`

interface propsCast {
    rewardLabel?: string;
    rewardValue?: any;
    chipLabel?: string;
    items: any;
}

const Rewards = ( props: propsCast ) => {
    let { rewardLabel, rewardValue, chipLabel } = props;
    
    let rewards = props.items.map( ( reward : any, key : number )  => {
        if (reward[0]) {
            rewardLabel = reward[0];
            rewardValue = reward[1];
            chipLabel = `+ ${ rewardLabel } ${ rewardValue }`;  
        }
        key++;
        return (
            <StyledRewardsItem 
                key={ key }
                style={{ backgroundColor: ColorChoice(rewardValue) }}>
                    <AccessibilityNewIcon />
                    { chipLabel }
            </StyledRewardsItem>
        );
    });
    return ( 
        <StyledRewards>
            { rewards }
        </StyledRewards> 
    )
};
 
export default Rewards;
