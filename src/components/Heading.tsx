import React from 'react';
import styled from 'styled-components';


const StyledHeading = styled.h2`
    font-size: 2em;
    margin: 12px 0;
`;

interface HeadingProps {
    heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <StyledHeading>{ heading }</StyledHeading>
    );
};

export default Heading;
