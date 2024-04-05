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

interface ICardActionsProps {
  actionID?: any;
  kit?: string;
  addPlanItem: any
  completed?: boolean;
}

class CardActions extends Component<ICardActionsProps> {
  handleAddPlan = (id: number) => { this.props.addPlanItem(id) }
  handlePurchase = (id: number) => { console.log('Send all kit items to store basket', id) }
  render () {
    return (
      <Card>
        { this.props.completed ? 
          <Button disabled variant="contained" color="primary" 
              startIcon={<AddCircleOutlineIcon />} 
              onClick={ () => {
                  this.handleAddPlan(this.props.actionID)
              }}>
              {this.props.completed ? "Completed": "Add" }
          </Button> : 
          <Button variant="contained" color="primary" 
              startIcon={<AddCircleOutlineIcon />} 
              onClick={ () => {
                  this.handleAddPlan(this.props.actionID)
              }}>
              {this.props.completed ? "Completed": "Add" }
          </Button>
        }

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
