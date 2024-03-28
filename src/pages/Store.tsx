import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';


const Store: React.FC = () => {
    const str_store_heading = String(process.env.REACT_APP_STORE_HEADING);

    useEffect(() => {
        window.scrollTo(0, 0) 
    }, [])

    return (
        <div className="container center"> 
            <Heading heading={ str_store_heading } />
            <p>{ process.env.REACT_APP_STORE_SUMMARY }</p>
            <p>Return to <Link to="/">{ process.env.REACT_APP_ACTIVATIES_HEADING }</Link> Page</p>  
        </div>
    )
}

export default Store;
