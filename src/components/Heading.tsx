import React from 'react';
import styled from 'styled-components';

interface IPageHeaderProps {
    heading: string;
}

const StyledHeading = styled.h2`
    font-size: 2em;
    margin: 12px 0;
`;

const Heading: React.FC<IPageHeaderProps> = ({ heading }) => {
    return (
        <StyledHeading>{heading}</StyledHeading>
    );
};

export default Heading;