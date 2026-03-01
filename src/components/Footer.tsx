import React from 'react';
import Context from './../Context';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    text-align: left;
    margin: 10px;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            &copy; { Context.TITLE }
        </StyledFooter>
    )
}

export default Footer;
