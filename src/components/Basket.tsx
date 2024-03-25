import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePlanItem, completePlanItem, addPlanQuantity, subtractPlanQuantity} from '../redux/actions/planActions';
import IconButton from '@mui/material/IconButton';
import DirectionsRun from '@mui/icons-material/DirectionsRun';

interface IBasketProps {
    items?: any;
}

class Basket extends Component<IBasketProps>{
    render() { 
        return(  
            <IconButton aria-label="plan" style={{ display: 'none', padding: "0", color: "white" }}>
                <DirectionsRun  />
            </IconButton>
        )    
    }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.plan.addedItems,
    } 
}

const mapDispatchToProps = (dispatch: any)=>{
    return {
        removePlanItem: (id : number) => {
            dispatch(removePlanItem(id))
        },
        completePlanItem: (id : number) => {
            dispatch(completePlanItem(id))
        },
        addPlanQuantity: (id : number) => {
            dispatch(addPlanQuantity(id))
        },
        subtractPlanQuantity: (id : number) => {
            dispatch(subtractPlanQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
