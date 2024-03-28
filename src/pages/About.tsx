import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import styled from 'styled-components';


const StyledAbout = styled.main`
    margin: 0 auto;
    padding: 0 10px;
`;

const About: React.FC = () => {
    const str_activities_heading = String(process.env.REACT_APP_ACTIVATIES_HEADING);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <StyledAbout >
            <Heading heading={ str_activities_heading } />
            <p>{ process.env.REACT_APP_ABOUT_SUMMARY }</p>
            <p>{ process.env.REACT_APP_ABOUT_FEATURES }</p>
            <p>Return to <Link to="/">{ process.env.REACT_APP_ACTIVATIES_HEADING }</Link> Page</p>
        </StyledAbout>
    )
}


export default About;