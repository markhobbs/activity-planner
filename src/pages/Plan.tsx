import React, { Component } from 'react';
/* Redux and Reducers */
import { connect } from 'react-redux';
import { removePlanItem, completePlanItem, addPlanQuantity, subtractPlanQuantity, reset} from '../redux/actions/planActions';
/* Components*/
import PageHeader from '../components/PageHeader';
// Material UI Icons
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface IPlanProps {
    reset?: any;
    removePlanItem?: any
    completePlanItem?: any;
    subtractPlanQuantity?: any;
    addPlanQuantity?: any;
    items?: any;
    //score?: any;
}

/* 
    Plan Page Class 
*/
class Plan extends Component<IPlanProps> {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    reset = () => {
        console.log('Are you sure?');
        this.props.reset(); 
    }

    //to remove the item completely
    handleRemove = (id : number) => {
        this.props.removePlanItem(id);
    }

    //progress to completion
    handleComplete = (id : number) =>  {
        this.props.completePlanItem(id);
    };

    //to add the quantity
    handleAddQuantity = (id : number)=>{
        this.props.addPlanQuantity(id);
    }

    //to substruct from the quantity
    handleSubtractQuantity = (id : number) => {
        this.props.subtractPlanQuantity(id);
    }

    render() { 

        let addedItems = this.props.items.length ? (this.props.items.map((item : any) => {
            
            return (
                <li className="collection-item" key={item.id}>
                    <div className="item-image">
                        <h6>{item.title}</h6>
                        <img src={item.img} alt={item.title} />
                    </div>

                    <div className="item-quantity">
                        <p>{item.rep} <sup>rep(s)</sup> {item.quantity} <sup>set(s)</sup></p>
                        {/*}<Link to="/plan">
                            <RemoveCircleOutlineIcon onClick = { () => {
                                this.handleSubtractQuantity(item.id)
                            }}
                        />
                        </Link>
                        <Link to="/plan">
                            <AddCircleOutlineIcon 
                                onClick = { () => {
                                    this.handleAddQuantity(item.id)
                            }} 
                        />
                        </Link>*/}
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
                    <div className="item-cta">
                        <Button 
                            disabled={item.completed} 
                            variant="contained" 
                            color="primary" 
                            startIcon={<AlarmOnIcon />} 
                            onClick={()=>{this.handleComplete(item.id)}}>
                            {item.completed ? "Completed": "Complete" }
                        </Button>
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
            <li className="collection-item">{process.env.REACT_APP_EMPTY_ACTIVITY}</li>
        );

        return(
            <div className="container">  
                <PageHeader heading ={ process.env.REACT_APP_PLAN_HEADING } />
                <ul className="collection center"> 
                    { addedItems } 
                </ul>
                <span>
                    <RotateLeftIcon onClick={ () => { this.reset() }}/>
                </span>
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
            dispatch(subtractPlanQuantity(id))
        },
        reset: () => { dispatch(reset()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
