import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Heading from '../components/Heading';
import styled from 'styled-components';

interface IActivityProps {
    ikey: number;
    items: string[];
}

class Activity extends Component<IActivityProps>  {
    render() {
        let cardItems = this.props.items.map( (item, ikey)  => {
            return ( <Card key={ikey} item={item} /> )
        });
        return(
            <Container>
                <Heading 
                    heading = { process.env.REACT_APP_ACTIVATIES_HEADING } 
                />
                <ActvitiesList>
                    { cardItems }
                </ActvitiesList>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      items: state.plan.items,
    }
}

const Container = styled.div`
    margin: 0 auto;
    padding: 0 10px;
`
const ActvitiesList = styled.ul`
    @media (min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        align-items: baseline;
      
        li {
            width: 33%;
            display: flex;
            flex-grow   grow;
            flex-direction: column;
            > div {
                width: 100%;
            }
        }
    }
`

export default connect(mapStateToProps)(Activity);