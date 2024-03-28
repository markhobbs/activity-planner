import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPlanItem} from '../redux/actions/planActions';
import Heading from '../components/Heading';
import ColorChoice from '../components/ColorChoice';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styled from 'styled-components';

interface IAwardsProps {
    score: number[];
}

const StyledAwards= styled.main`
    margin: 0 auto;
    padding: 0 10px;
`;

class Awards extends Component<IAwardsProps> {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const str_awards_heading = String(process.env.REACT_APP_AWARDS_HEADING);
        let scores = this.props.score.map( (score : any, iKey=-1 ) => {
            iKey++;
            return (
                <li className="score-list-item" key={iKey}> 
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
            <StyledAwards>
                <Heading heading={ str_awards_heading } />
                <p>{ process.env.REACT_APP_AWARDS_SUMMARY }</p>
                
                { scores.length ? 
                <ul className="score-list">
                    { scores }
                </ul>
                : 
                <ul className="collection center">
                    <li className="collection-item">
                        <p>
                            { process.env.REACT_APP_EMPTY_AWARDS }. 
                        </p>
                    </li>
                </ul> 
                }
                <p>
                    Return to <Link to="/">{ process.env.REACT_APP_ACTIVATIES_HEADING }</Link> or <Link to="/planner">{ process.env.REACT_APP_PLAN_HEADING }</Link> Page
                </p>
            </StyledAwards>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Awards);
