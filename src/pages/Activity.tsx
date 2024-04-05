import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Heading from '../components/Heading';
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

interface IActivityProps {
    ikey: number;
    items: string[];
}

class Activity extends Component<IActivityProps>  {
    render() {
        const str_activities_heading = String(process.env.REACT_APP_ACTIVATIES_HEADING);
        let cardItems = this.props.items.map( (item, ikey)  => {
            return (<Card key={ikey} item={item} />)
        });
        return(
            <MainContainer>
                <Heading heading={ str_activities_heading } />
                <StyledActivityList>{ cardItems }</StyledActivityList>
            </MainContainer>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      items: state.plan.items,
    }
}

export default connect(mapStateToProps)(Activity);
