import React from "react";
/* Componenets  */
import ColorChoice from './ColorChoice';
/* Material UI  */

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

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
            <span 
                key={key} 
                className="reward_chip"
                style={{
                    backgroundColor: ColorChoice(rewardValue)
                }}><AccessibilityNewIcon />{chipLabel}
            </span>
        );
    });

    return ( 
        <div className="rewards">
            {rewards}
        </div> 
    )
};
 
export default Rewards;
