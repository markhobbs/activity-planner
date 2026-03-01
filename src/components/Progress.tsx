import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const StyledProgress = styled.section`
    background-color: rgba(3, 155, 229, .9);
    bottom: 0;
    color: white;      
    margin: 0 auto;
    padding: 0 10px;
    position: fixed;
    width: 100%;
    z-index: 1;
    font-size: 1.8em;
`
const StyledRewards = styled.p``

interface ProgressProps {
    total: string;
    totalCompleted: string;
    addedItems: string[];
}
interface RootState {
    plan : Plan;
}
interface Plan {
    addedItems: string[];
    total: string;
    totalCompleted: string;
}

class Progress extends Component<ProgressProps> { 
    render() {
        const percentage = Math.ceil(parseInt(this.props.totalCompleted) / parseInt(this.props.total) * 100);
        const mod1 = (percentage >= 0) ? 'plan-progress--active' : '';
        const mod2 = (percentage === 100) ? 'plan-progress--completed' : '';
        const modifier = `plan-progress ${mod1} ${mod2}`;
        const isPercentageNan = isNaN(percentage) ? true: false;

        return (
            <StyledProgress className={modifier}>
                {isPercentageNan || 
                    <StyledRewards>
                        {this.props.addedItems.length } 
                        <sup> activity(s) </sup>
                        {this.props.total} <sup> rep(s) </sup> 
                        {percentage}<sup>&#37; progress</sup>
                    </StyledRewards>}
            </StyledProgress>)}}      

const mapStateToProps = (state : RootState) => {
    const {addedItems, total, totalCompleted }  = state.plan;
    return {
        addedItems: addedItems,
        total: total,
        totalCompleted: totalCompleted
    }
}

export default connect(mapStateToProps)(Progress);
