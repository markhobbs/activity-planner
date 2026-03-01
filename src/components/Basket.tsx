import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePlanItem, completePlanItem, addPlanQuantity, subtractPlanQuantity } from '../redux/actions/planActions';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import IconButton from '@mui/material/IconButton';


interface BasketProps {
    plan?: Plan;
}
interface Plan {
    addedItems: (id: number) => void;
}
interface PlanItem {
  id: number;
  title: string;
  rep: number;
  quantity: number;
  completed: boolean;
}
interface RootState {
  plan : {
    addedItems: PlanItem[];
  }
}

class Basket extends Component<BasketProps>{
    render() { 
        return(  
            <IconButton 
                aria-label="planner" 
                style={{ 
                    padding: "0", 
                    color: "white" 
                }}>
                <DirectionsRun  />
            </IconButton>
        )    
    }
}

const mapStateToProps = (state: RootState) => {
  return {
    items: state.plan.addedItems
  };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: number; }) => void)=>{
    return {
        removePlanItem: (id: number) => dispatch(removePlanItem(id)),
        completePlanItem: (id: number) => dispatch(completePlanItem(id)),
        addPlanQuantity: (id: number) => dispatch(addPlanQuantity(id)),
        subtractPlanQuantity: (id: number) => dispatch(subtractPlanQuantity(id))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Basket);
