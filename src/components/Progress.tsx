import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

interface IProgressProps {
    total: string;
    totalCompleted: string;
    addedItems: string[];
}

const StyledRewards = styled.div`
    margin: 0 auto;
    padding: 0 10px;    
`

class Progress extends Component<IProgressProps> { 
    render() {
        let percentage = parseInt(this.props.totalCompleted)/parseInt(this.props.total)*100;
        let mod1 = (percentage >= 0) ? 'plan-progress--active' : '';
        let mod2 = (percentage === 100) ? 'plan-progress--completed' : '';
        let modifier = 'plan-progress ' + mod1 + ' ' + mod2;
        let isPercentageNan = isNaN(percentage) ? true: false;
        return (
            <section className={modifier}>
                { isPercentageNan || 
                    <StyledRewards>
                        <h5>
                            { this.props.addedItems.length }
                            <sup> activity(s)</sup> { this.props.total } <sup> rep(s) </sup>
                        </h5> 
                        <h6>
                            <span>Progress : {percentage} <sup>&#37;</sup></span>
                        </h6>
                    </StyledRewards>
                }
            </section>
        )
    }
}

const mapStateToProps = (state : any) => {
    return {
        addedItems: state.plan.addedItems,
        total: state.plan.total,
        totalCompleted: state.plan.totalCompleted
    }
}

export default connect(mapStateToProps)(Progress);