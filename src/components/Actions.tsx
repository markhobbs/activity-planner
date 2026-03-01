import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPlanItem } from '../redux/actions/planActions';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';


const Card = styled.div`
  padding: 12px 24px;
  > button {
    margin-right: 12px;
  }
`

interface CardActionsProps {
  actionID: number;
  addPlanItem: (id: number) => void;
  completed?: boolean;
  kit?: string;
}

class CardActions extends Component<CardActionsProps> {
  handleAddPlan = (id: number) => { this.props.addPlanItem(id) }
  handlePurchase = (id: number) => { console.log('Send all kit items to store basket', id) }
  render () {
    const { actionID, completed, kit } = this.props;
    return (
      <Card>
        { completed ? <Button 
            variant="contained" 
            color="primary" 
            disabled 
            startIcon={<AddCircleOutlineIcon />} 
            onClick={ () => { this.handleAddPlan(actionID)} }>
            {completed ? "Completed": "Add Activity" }
          </Button> : <Button variant="contained" color="primary" 
              startIcon={<AddCircleOutlineIcon />} 
              onClick={ () => {
                  this.handleAddPlan(actionID)
              }}>
              {completed ? "Completed": "Add Activity" }
          </Button>
        }

        {!kit || <Link to="/store"
              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary" 
              style = {{ backgroundColor: "white"}}>
              <ShoppingCartIcon 
                onClick={ () => { 
                  this.handlePurchase(actionID)
                }} 
              />*
          </Link>
        }
      </Card>
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

export default connect( 
  null, 
  mapDispatchToProps
)(CardActions);
