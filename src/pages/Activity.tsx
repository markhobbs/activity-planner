import React, { Component } from 'react';
/* Redux and Reducers */
import { connect } from 'react-redux';
/* Components */
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

interface IActivityProps {
    ikey?: number;
    items?: any;
    reset?: any;
}

/* Activity Page Class */
class Activity extends Component<IActivityProps>  {
    render() {
        // Loop through each activity item
        let cardItems = this.props.items.map( (item: any[], ikey: number)  => {
            return ( <Card key={ikey} item={item} /> )
        });

        return(
            <div className="container">
                {/*<section>:: <Link title="planner" to="/plan"><em>Planner</em></Link></section>*/}
                <PageHeader heading = { process.env.REACT_APP_ACTIVATIES_HEADING } />
                <ul className="box">
                    {cardItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      items: state.plan.items,
    }
}

export default connect(mapStateToProps)(Activity);
