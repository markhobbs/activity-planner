import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface IPlanProgressProps {
    total?: any;
    totalCompleted?: any;
    addedItems?: any;
}

class PlanProgress extends Component<IPlanProgressProps> { 
    render() {
        let percentage = parseInt(this.props.totalCompleted)/parseInt(this.props.total)*100;
        let modifier = percentage === 100 ? 'plan-progress plan-progress--completed' : 'plan-progress';
        let isPercentageNan = isNaN(percentage) ? true: false;
        return (
            <section className={modifier}>
            { isPercentageNan || 
                <div className="container">
                    <span className="right">
                        <Link to="/"> .::{process.env.REACT_APP_ACTIVATIES_HEADING}::. </Link>
                        <Link to="/plan"> .::{process.env.REACT_APP_PLAN_HEADING}::. </Link>
                        <Link to="/awards_history"> .::{process.env.REACT_APP_HISTORY_HEADING}::. </Link>
                    </span>
                    <h5>
                        { this.props.addedItems.length }
                        <sup> activity(s)</sup> { this.props.total } <sup> rep(s) </sup>
                    </h5> 
                    <h6>
                        <span>Progress : {percentage} <sup>&#37;</sup></span>
                        {/*({this.props.totalCompleted}<sup> rep(s)</sup>)*/}
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
