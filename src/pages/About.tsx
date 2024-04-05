import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import LinkList from '../components/LinkList';
import { MainContainer } from '../styles';


const About: React.FC = () => {
    const heading = String(process.env.REACT_APP_ABOUT_HEADING);
    const linkText = String(process.env.REACT_APP_ACTIVATIES_HEADING);
    const summary = String(process.env.REACT_APP_ABOUT_SUMMARY);
    const features = String(process.env.REACT_APP_ABOUT_FEATURES);
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <MainContainer>
            <Heading heading={ heading } />
            <p>{ summary  }</p>
            <p>{ features }</p>
            <LinkList />
        </MainContainer>
    )
}

export default About;
