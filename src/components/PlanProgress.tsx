import React, { Component } from 'react';
import { connect } from 'react-redux';

interface IPlanProgressProps {
    total: string;
    totalCompleted: string;
    addedItems: string[];
}

class PlanProgress extends Component<IPlanProgressProps> { 
    render() {
        let percentage = parseInt(this.props.totalCompleted)/parseInt(this.props.total)*100;
        let mod1 = (percentage >= 0) ? 'plan-progress--active' : '';
        let mod2 = (percentage === 100) ? 'plan-progress--completed' : '';
        let modifier = 'plan-progress ' + mod1 + ' ' + mod2;
        let isPercentageNan = isNaN(percentage) ? true: false;
        return (
            <section className={modifier}>
                { isPercentageNan || 
                    <div className="container">
                        <h5>
                            { this.props.addedItems.length }
                            <sup> activity(s)</sup> { this.props.total } <sup> rep(s) </sup>
                        </h5> 
                        <h6>
                            <span>Progress : {percentage} <sup>&#37;</sup></span>
                        </h6>
                    </div>
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

export default connect(mapStateToProps)(PlanProgress);
