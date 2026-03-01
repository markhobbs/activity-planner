import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import Score from '../components/Score';
import Context from './../Context';
import { MainContainer } from '../styles';


const Awards: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <MainContainer>
            <Heading heading={ Context.AWARDS_HEADING } />
            <p>{ Context.AWARDS_SUMMARY }</p>
            <Score />
        </MainContainer>
    )
}

export default Awards;
