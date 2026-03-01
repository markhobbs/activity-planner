import React from 'react';
import { connect } from 'react-redux';
import { 
  removePlanItem, 
  completePlanItem, 
  addPlanQuantity, 
  subtractPlanQuantity 
} from '../redux/actions/planActions';
import Heading from '../components/Heading';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Context from './../Context';
import { MainContainer } from '../styles';

// Define item type
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

interface PlanProps {
  items: PlanItem[];
  removePlanItem: (id: number) => void;
  completePlanItem: (id: number) => void;
  subtractPlanQuantity: (id: number) => void;
  addPlanQuantity: (id: number) => void;
}

class Planner extends React.Component<PlanProps/*, PlanState*/> {
  handleRemove = (id: number) => 
    this.props.removePlanItem(id); 

  handleComplete = (id: number) =>  
    this.props.completePlanItem(id); 

  handleAddQuantity = (id: number) => 
    this.props.addPlanQuantity(id); 

  handleSubtractQuantity = (id: number) => { 
    this.props.subtractPlanQuantity(id); 
  } 

  reset = () => {
    if (!window.confirm('Are you sure?')){
      return false;
    }
    return true;
  };

  render() { 
    const str_plan_heading = String(Context.PLAN_HEADING);
    const addedItems = this.props.items.length ? (
      this.props.items.map((item) => (
        <li className="collection-item" key={item.id}>
          <div className="item-image">
            <h6>{item.title}</h6>
          </div>
          <div className="item-quantity">
            <p>
              {item.rep} 
              <sup>rep(s)</sup> {item.quantity} 
              <sup>set(s)</sup>
            </p>
            <Button 
              disabled={item.completed} 
              startIcon={<RemoveCircleOutlineIcon />} 
              onClick={() => this.handleSubtractQuantity(item.id)}
            />
            <Button 
              disabled={item.completed} 
              startIcon={<AddCircleOutlineIcon />} 
              onClick={() => this.handleAddQuantity(item.id)}
            />
          </div>
          <div className="">
            <Button 
              disabled={item.completed} 
              variant="contained" 
              color="primary" 
              startIcon={<AlarmOnIcon />} 
              onClick={() => this.handleComplete(item.id)}
            >
              {item.completed ? "Completed" : "Complete"}
            </Button>&nbsp;
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<DeleteIcon />} 
              onClick={() => this.handleRemove(item.id)}
            >
              {Context.DELETE_ACTIVITY}
            </Button>
          </div>
        </li>
      ))
    ) : (
      <li className="collection-item">
        <p>{Context.EMPTY_ACTIVITY}.</p>
      </li>
    );

    return(
      <MainContainer>
        <Heading heading={str_plan_heading} />
        <ul>{addedItems}</ul>
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            this.reset();
          }}
        >
          RESET <RotateLeftIcon />
        </a>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    items: state.plan.addedItems
  };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: number; }) => void) => {
  return {
    removePlanItem: (id: number) => dispatch(removePlanItem(id)),
    completePlanItem: (id: number) => dispatch(completePlanItem(id)),
    addPlanQuantity: (id: number) => dispatch(addPlanQuantity(id)),
    subtractPlanQuantity: (id: number) => dispatch(subtractPlanQuantity(id))
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Planner);
