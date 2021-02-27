import React, { Component } from 'react';
/* Redux and Reducers */
import { connect } from 'react-redux';
import { addPlanItem, reset } from '../redux/actions/planActions';
/* Componenets  */
import PageHeader from '../components/PageHeader';
import ColorChoice from '../components/ColorChoice';

/* Material UI  */
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

/* 
    History Page Class 
*/

interface IHistoryProps {
    reset?: any;
    score?: any;
}

class History extends Component<IHistoryProps> {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    reset = () => {
        console.log('Are you sure?');
        this.props.reset(); 
    }

    render() {
        // Loop through each activity item
        let scores = this.props.score.map( (score : any, iKey=-1 ) => {
            iKey++;
            return (
                /*TODO:  Lots of duplication, can be cleaned up */
                <li className="score-list-item" key={iKey}> 
                    <div className="marker">{iKey} : </div>

                    { !score[0] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[0][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[0][0] + " " +score[0][1] }</span>
                    </span>
                    }

                    { !score[1] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[1][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[1][0] + " " +score[1][1] }</span>
                    </span>
                    }   

                    { !score[2] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[2][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[2][0] + " " +score[2][1] }</span>
                    </span>
                    } 

                    { !score[3] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[3][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[3][0] + " " +score[3][1] }</span>
                    </span>
                    }    

                    { !score[4] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[4][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[4][0] + " " +score[4][1] }</span>
                    </span>
                    } 

                    { !score[5] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[5][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[5][0] + " " +score[5][1] }</span>
                    </span>
                    }   

                    { !score[6] || 
                    <span 
                        className="reward_chip"
                        style={{
                            backgroundColor: ColorChoice(score[6][1])
                        }}>  
                        <AccessibilityNewIcon /><span>{ score[6][0] + " " +score[6][1] }</span>
                    </span>
                    }                 
                </li>
            )
        });
        return(
            <div className="container">
                <PageHeader heading = {process.env.REACT_APP_HISTORY_HEADING} />
                <p>{process.env.REACT_APP_HISTORY_SUMMARY}</p>
                { scores.length ? 
                <ul className="score-list">
                    {scores}
                </ul> 
                : 
                <ul className="collection center">
                    <li className="collection-item">{process.env.REACT_APP_EMPTY_HISTORY}</li>
                </ul> 
                }
            </div>
        );
    }
}

const mapStateToProps = (state : any) => {
    return {
      score: state.plan.score
    }
}

const mapDispatchToProps= (dispatch: any) => {
    return {
        addPlanItem: (id : number) => { 
            dispatch(addPlanItem(id)) ;
        },
        reset: () => { 
            dispatch( reset() );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);



