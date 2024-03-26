import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePlanItem, completePlanItem, addPlanQuantity, subtractPlanQuantity } from '../redux/actions/planActions';
import Heading from '../components/Heading';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface IPlanProps {
    items: string[];
    removePlanItem: (id: number) => void;
    completePlanItem: (id: number) => void;
    subtractPlanQuantity: (id: number) => void;
    addPlanQuantity: (id: number) => void;    
}

class Plan extends React.Component<IPlanProps> {
    handleRemove = (id : number) => this.props.removePlanItem(id); 
    handleComplete = (id : number) =>  this.props.completePlanItem(id); 
    handleAddQuantity = (id : number) => this.props.addPlanQuantity(id); 
    handleSubtractQuantity = (id : number) => { this.props.subtractPlanQuantity(id) } 

    reset = () => {
        if (!window.confirm('Are you sure?')){
            return false;
        } else {
            return true;
        }
    };

    render() { 
        let addedItems = this.props.items.length ? (this.props.items.map((item: any)=> {
            return (
                <li className="collection-item" key={item.id}>
                    <div 
                        className="item-image">
                        <h6>{item.title}</h6>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div 
                        className="item-quantity">
                        <p>{item.rep} 
                            <sup>rep(s)</sup> {item.quantity} 
                            <sup>set(s)</sup>
                        </p>
                        <Button 
                            disabled={item.completed} 
                            startIcon={<RemoveCircleOutlineIcon />} 
                            onClick = { () => { 
                                this.handleSubtractQuantity(item.id) 
                            }}>
                        </Button>
                        <Button 
                            disabled={item.completed} 
                            startIcon={<AddCircleOutlineIcon />} 
                            onClick = { () => { 
                                this.handleAddQuantity(item.id) 
                            }}>
                        </Button>
                    </div>
                    <div 
                        className="">
                        <Button 
                            disabled={item.completed} 
                            variant="contained" 
                            color="primary" 
                            startIcon={<AlarmOnIcon />} 
                            onClick={()=>{this.handleComplete(item.id)}}>
                            {item.completed ? "Completed": "Complete" }
                        </Button>&nbsp;
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            startIcon={<DeleteIcon />} 
                            onClick = { () => { 
                                this.handleRemove(item.id) 
                            }}>
                            {process.env.REACT_APP_DELETE_ACTIVITY}
                        </Button>
                    </div>
                </li>)
            })
        ):(
            <li className="collection-item">
                <p>{process.env.REACT_APP_EMPTY_ACTIVITY}. Return to <Link to="/">{process.env.REACT_APP_ACTIVATIES_HEADING}</Link> Page</p>
            </li>
        );

        return(
            <div className="container">  
                <Heading heading ={ process.env.REACT_APP_PLAN_HEADING } />
                <ul className="collection center"> 
                    { addedItems } 
                </ul>
                <a className="right" href="/" onClick={ () => this.reset() }>RESET <RotateLeftIcon /></a>
            </div>
        )}
}

const mapStateToProps = (state : any)=>{
    return {
        items: state.plan.addedItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removePlanItem: (id : number) => { dispatch(removePlanItem(id)) },
        completePlanItem: (id : number) => { dispatch(completePlanItem(id)) },
        addPlanQuantity: (id : number) => { dispatch(addPlanQuantity(id)) },
        subtractPlanQuantity: (id : number) => { dispatch(subtractPlanQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
