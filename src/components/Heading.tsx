import React, { Component } from 'react';
import styled from 'styled-components';

interface IPageHeaderProps {
    heading?: string;
}
   
class Heading extends Component<IPageHeaderProps> {
    render() {
        return(
            <Element>{ this.props.heading }</Element>
        );
    }
};

const Element = styled.h2`
    font-size: 2em;
    margin: 12px 0;
`

export default Heading;
