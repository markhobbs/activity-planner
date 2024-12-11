import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { MainContainer } from '../styles';

const NoPage: React.FC = () => {
    const heading = '404 - Page Not Found';
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <MainContainer>
            <Heading heading={ heading } />
            <p>Click <Link to={`/`}>here</Link> to return to home page</p>
        </MainContainer>
    )
}

export default NoPage;
