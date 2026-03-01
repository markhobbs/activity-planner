import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import styled from 'styled-components';
import { MainContainer } from '../styles';

const StyledActivityList = styled.ul`
    @media (min-width: 600px) {
        align-items: baseline;
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
        li {
            width: 33%;
            display: flex;
            flex-grow: grow;
            flex-direction: column;
            > div {
                width: 100%;
            }
            img {
                width:100%;
            }
        }
    }
`
interface ActivityProps {
    index?: number;
    items: string[];
}
interface RootState {
  plan : {
    items: string[];
  }
}

class Activity extends Component<ActivityProps>  {
    render() {
        const cards = this.props.items.map((item: any, index: number) => {
            return (<Card key={index} item={item} />)
        });
        return(
            <MainContainer>
                <StyledActivityList>
                    { cards }
                </StyledActivityList>
            </MainContainer>
        );
    }
}

const mapStateToProps = (state: RootState) => {
  return {
    items: state.plan.items,
  };
};

export default connect(mapStateToProps)(Activity);
