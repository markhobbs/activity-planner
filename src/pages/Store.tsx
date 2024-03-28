import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import styled from 'styled-components';

const StyledStore = styled.main`
    margin: 0 auto;
    padding: 0 10px;
`;

const Store: React.FC = () => {
    const str_store_heading = String(process.env.REACT_APP_STORE_HEADING);

    useEffect(() => {
        window.scrollTo(0, 0) 
    }, [])

    return (
        <StyledStore> 
            <Heading heading={ str_store_heading } />
            <p>{ process.env.REACT_APP_STORE_SUMMARY }</p>
            <p>
                Return to <Link to="/">{ process.env.REACT_APP_ACTIVATIES_HEADING }</Link> or <Link to="/planner">{ process.env.REACT_APP_PLAN_HEADING }</Link> Page
            </p> 
        </StyledStore>
    )
}

export default Store;