import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlanItem} from '../redux/actions/planActions';
import ColorChoice from './ColorChoice';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styled from 'styled-components';


const StyledScore= styled.section``;
const ScoreList = styled.ul``;
const ScoreListItem= styled.li``;
const ScoreListItemBadge = styled.span`
    padding: 2px 4px;
`;
const Message = styled.span``;

interface IScoreProps {
    score: number[];
}

class Score extends Component<IScoreProps> {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        let scores = this.props.score.map( (
            score: any, 
            iKey= -1 
        ) => {
            iKey++;
            return (
                <ScoreListItem key={iKey}>
                    { !score[0] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[0][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[0][0] + " " +score[0][1] }
                        </span>
                    </ScoreListItemBadge> }
                    { !score[1] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[1][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[1][0] + " " +score[1][1] }
                        </span>
                    </ScoreListItemBadge> }  
                    { !score[2] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[2][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[2][0] + " " +score[2][1] }
                        </span>
                    </ScoreListItemBadge> }
                    { !score[3] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[3][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[3][0] + " " +score[3][1] }
                        </span>
                    </ScoreListItemBadge> }    
                    { !score[4] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[4][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[4][0] + " " +score[4][1] }
                        </span>
                     </ScoreListItemBadge>} 
                    { !score[5] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[5][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[5][0] + " " +score[5][1] }
                        </span>
                    </ScoreListItemBadge>}
                    { !score[6] || <ScoreListItemBadge style={{ backgroundColor: ColorChoice(score[6][1]) }}>  
                        <AccessibilityNewIcon />
                        <span>
                            { score[6][0] + " " +score[6][1] }
                        </span>
                    </ScoreListItemBadge>}                 
                </ScoreListItem>
            )
        });

        return(
            <StyledScore>
                { scores.length 
                ? <ScoreList>{ scores }</ScoreList> 
                : <Message>{ process.env.REACT_APP_EMPTY_AWARDS }.</Message> }
            </StyledScore>
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

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Score);
