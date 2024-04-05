import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import LinkList from '../components/LinkList';
import Score from '../components/Score';
import { MainContainer } from '../styles';


const Awards: React.FC = () => {
    const awards_heading = String(process.env.REACT_APP_AWARDS_HEADING);
    const awards_description = String(process.env.REACT_APP_AWARDS_SUMMARY);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <MainContainer>
            <Heading heading={ awards_heading } />
            <p>{ awards_description }</p>
            <Score />
            <LinkList />
        </MainContainer>
    )
}

export default Awards;
