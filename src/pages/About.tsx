import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container center">
            <PageHeader heading = { process.env.REACT_APP_ABOUT_HEADING } />
            <p>{ process.env.REACT_APP_ABOUT_SUMMARY }</p>
            <p>{ process.env.REACT_APP_ABOUT_FEATURES }</p>
            <p>Return to <Link to="/">{ process.env.REACT_APP_ACTIVATIES_HEADING }</Link> Page</p>
        </div>
    )
}

export default About;
