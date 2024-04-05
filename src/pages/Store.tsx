import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { MainContainer } from '../styles';


const Store: React.FC = () => {
    const heading = String(process.env.REACT_APP_STORE_HEADING);
    const summary = String(process.env.REACT_APP_STORE_SUMMARY);
    const linkOption = String(process.env.REACT_APP_PLAN_HEADING);

    useEffect(() => {
        window.scrollTo(0, 0) 
    }, [])

    return (
        <MainContainer> 
            <Heading heading={ heading } />
            <p>{ summary }</p>
            <p>
                Return to <Link to="/">{ heading }</Link> or 
                <Link to="/planner">{ linkOption }</Link> Page
            </p> 
        </MainContainer>
    )
}

export default Store;
