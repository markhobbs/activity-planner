import React,{ Component } from "react";
import { Link } from 'react-router-dom';
/* Redux and Reducers */
import { connect } from 'react-redux';
import { addPlanItem } from '../redux/actions/planActions';
/* MaterialUI Icons */
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ButtonMUI from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface ICardActionsProps {
  actionID?: any;
  kit?: string;
  addPlanItem: any
  completed?: boolean;
  //ingredients?: string[];
}

interface ICardActionsState {
}

class CardActions extends Component<ICardActionsProps, ICardActionsState> {

  handleAddPlan = (id: number) => { this.props.addPlanItem(id) }

  handlePurchase = (id: number) => { console.log('Send all kit items to store basket', id) }

  render () {
    return (
      <div className="card-actions"> 

        { !this.props.kit || 
        <Link to="/store"
            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary" 
            style = {{ backgroundColor: "white"}}>
            <ShoppingCartIcon 
              onClick={ () => { 
                this.handlePurchase(this.props.actionID)
              }} 
            /> *Kit
        </Link>
        }

        { this.props.completed ? 
        <ButtonMUI disabled variant="contained" color="primary" 
            startIcon={<AddCircleOutlineIcon />} 
            onClick={ () => {
                this.handleAddPlan(this.props.actionID)
            }}>
            {this.props.completed ? "Completed": "Add" }
        </ButtonMUI> : 
        <ButtonMUI variant="contained" color="primary" 
            startIcon={<AddCircleOutlineIcon />} 
            onClick={ () => {
                this.handleAddPlan(this.props.actionID)
            }}>
            {this.props.completed ? "Completed": "Add" }
        </ButtonMUI>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: number; }) => void) => {
  return { 
    addPlanItem: (id: number) => { 
      dispatch (addPlanItem(id)) 
    }
  };
}

export default connect( null, mapDispatchToProps)(CardActions);
