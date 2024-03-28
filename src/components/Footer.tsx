import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            &copy; { process.env.REACT_APP_TITLE } 2024
        </StyledFooter>
    )
}

export default Footer;