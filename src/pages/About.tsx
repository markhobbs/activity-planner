import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import Context from './../Context';
import { MainContainer } from '../styles';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <MainContainer>
            <Heading heading={ Context.ABOUT_HEADING } />
            <p>{ Context.ABOUT_SUMMARY  }</p>
            <p>{ Context.ABOUT_FEATURES }</p>
        </MainContainer>
    )
}

export default About;
