import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePlanItem, completePlanItem, addPlanQuantity, subtractPlanQuantity} from '../redux/actions/planActions';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

interface IBasketProps {
    items?: any;
}

const StyledBadge = withStyles((theme) => ({
    badge: {
      top: 10,
      fontSize: '10px',
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}))(Badge);

class Basket extends Component<IBasketProps>{
    render() { 
        return(  
            <IconButton aria-label="plan" style={{ padding: "0", color: "white" }}>
                <StyledBadge badgeContent={this.props.items.length} color="secondary">
                    <DirectionsRunIcon  />
                </StyledBadge>
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
