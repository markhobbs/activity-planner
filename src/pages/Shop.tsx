import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import Context from '../Context';
import { MainContainer } from '../styles';


const Shop: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0) 
    }, [])
    return (
        <MainContainer> 
            <Heading heading={ Context.SHOP_HEADING } />
            <p>{ Context.SHOP_SUMMARY }</p>
            <p>
                Return to <Link to="/planner">{ Context.PLAN_HEADING }</Link> Page.
            </p> 
        </MainContainer>
    )
}

export default Shop;
