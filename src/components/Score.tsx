import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlanItem } from '../redux/actions/planActions';
import ColorChoice from './ColorChoice';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Context from '../Context';
import styled from 'styled-components';

const StyledScore = styled.section``;
const ScoreList = styled.ul``;
const ScoreListItem = styled.li``;
const ScoreListItemBadge = styled.span`
    padding: 2px 4px;
`;
const Message = styled.span``;

interface PlanState {
  score: (string | number)[][];
}

interface ScoreProps {
  score: (string | number)[][];
  addPlanItem?: (id: number) => void;
}

class Score extends Component<ScoreProps> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { score } = this.props;

    // Create badge components for each score item
    const renderScoreBadges = (scoreItems: (string | number)[][]) => {
      return scoreItems.map((item, index) => {
        if (!item || item.length < 2) return null;
        
        return (
          <ScoreListItemBadge 
            key={index} 
            style={{ backgroundColor: ColorChoice(item[1] as number) }}
          >
            <AccessibilityNewIcon />
            <span>
              {`${item[0]} ${item[1]}`}
            </span>
          </ScoreListItemBadge>
        );
      });
    };

    // Handle empty state
    if (!score || score.length === 0) {
      return (
        <StyledScore>
          <Message>{Context.EMPTY_AWARDS}.</Message>
        </StyledScore>
      );
    }

    // Render score items
    const scoreItems = score.map((scoreItem, index) => (
      <ScoreListItem key={index}>
        {renderScoreBadges([scoreItem])}
      </ScoreListItem>
    ));

    return (
      <StyledScore>
        <ScoreList>
          {scoreItems}
        </ScoreList>
      </StyledScore>
    );
  }
}

// Redux mapping with proper types
const mapStateToProps = (state: { plan: PlanState }) => ({
  score: state.plan.score
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: number; }) => void) => ({
  addPlanItem: (id: number) => dispatch(addPlanItem(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Score);
