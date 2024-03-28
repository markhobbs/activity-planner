import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlanItem } from '../redux/actions/planActions';
import Heading from '../components/Heading';
import ColorChoice from '../components/ColorChoice';
import Chip from '@mui/material/Chip';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

interface IScorecardProps {
    score: any;
    scoreGroups: any;
}
class Scorecard extends Component<IScorecardProps> {
    
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render () {
        const str_scorecard_summary = String(process.env.REACT_APP_SCORECARD_SUMMARY);
        let scores = this.props.score.map( (score : any, iKey=0 ) => {
            let scoreGroups = this.props.scoreGroups.map( (scoreGroup : any, lkey=0 ) => {
                if (score[0] && scoreGroup[0] === score[0][0]) {
                    scoreGroup[1] += score[1][1];
                }
                if (score[1] && scoreGroup[0] === score[1][0]) {
                    scoreGroup[1] += score[1][1];
                }
                if (score[2] && scoreGroup[0] === score[2][0]) {
                    scoreGroup[1] += score[1][1];
                }
                if (score[3] && scoreGroup[0] === score[3][0]) {
                    scoreGroup[1] += score[1][1];
                }
                if (score[4] && scoreGroup[0] === score[4][0]) {
                    scoreGroup[1] += score[1][1];
                }
                if (score[5] && scoreGroup[0] === score[5][0]) {
                    scoreGroup[1] += score[1][1];
                }
                if (score[6] && scoreGroup[0] === score[6][0]) {
                    scoreGroup[1] += score[1][1];
                }
                lkey++;
                return (
                    <p key={lkey}>
                        {lkey} : {scoreGroup} 
                    </p> 
                ); 
            });
            iKey++;
            return (
                <li className="score-list-item" key={iKey}> 
                    <div className="marker">{iKey} : </div>
                    { !score[0] ||  
                    <Chip
                        className="rewards_chip"
                        icon={<AccessibilityNewIcon />}
                        label={ score[0][0] + " " +score[0][1] }
                        style={{
                            backgroundColor: ColorChoice(score[0][1])
                        }} />
                    }
                    { !score[1] || 
                        <Chip
                            className="rewards_chip"
                            icon={<AccessibilityNewIcon />}
                            label={ score[1][0] + " " +score[1][1] }
                            style={{
                                backgroundColor: ColorChoice(score[1][1])
                            }} />
                    }
                    { !score[2] || 
                        <Chip
                            className="rewards_chip"
                            icon={<AccessibilityNewIcon />}
                            label={ score[2][0] + " " + score[2][1] }
                            style={{
                                backgroundColor: ColorChoice(score[2][1])
                            }} />
                    }
                    { !score[3] || 
                        <Chip
                            className="rewards_chip"
                            icon={<AccessibilityNewIcon />}
                            label={ score[3][0] + " " + score[3][1] }
                            style={{
                                backgroundColor: ColorChoice(score[3][1])
                            }} />
                    }
                    { !score[4] || 
                        <Chip
                            className="rewards_chip"
                            icon={<AccessibilityNewIcon />}
                            label={ score[4][0] + " " + score[4][1] }
                            style={{
                                backgroundColor: ColorChoice(score[4][1])
                            }} />
                    }
                    { !score[5] || 
                        <Chip
                            className="rewards_chip"
                            icon={<AccessibilityNewIcon />}
                            label={ score[5][0] + " " +score[5][1] }
                            style={{
                                backgroundColor: ColorChoice(score[5][1])
                            }} />
                    }
                    { !score[6] || 
                        <Chip
                            className="rewards_chip"
                            icon={<AccessibilityNewIcon />}
                            label={ score[6][0] + " " + score[6][1] }
                            style={{
                                backgroundColor: ColorChoice(score[6][1])
                            }} />
                    }      
                    {scoreGroups}
                </li>
            )
        });

        return(
            <div className="container">
                <Heading heading = { str_scorecard_summary } />
                <p>{ process.env.REACT_APP_SCORECARD_SUMMARY }</p>
                <ul className="score-list">
                    { scores }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state : any) => {
    return {
      score: state.plan.score,
      scoreGroups: state.plan.scoreGroups
    }
}

const mapDispatchToProps= (dispatch : any) => {
    return {
        addPlanItem: (id : number) => { 
            dispatch(addPlanItem(id)) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scorecard);
