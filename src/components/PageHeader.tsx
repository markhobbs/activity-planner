import React, { Component } from 'react';
import styled from 'styled-components';

interface IPageHeaderProps {
    heading?: string;
}
   
class PageHeader extends Component<IPageHeaderProps> {
    render() {
        return(
            <Heading>
                { this.props.heading }
            </Heading>
        );
    }
};

const Heading = styled.h2`
    font-size: 2em;
    margin: 12px 0;
`

export default PageHeader;
