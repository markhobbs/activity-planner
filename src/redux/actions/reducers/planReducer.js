import initState from '../../../apis/activities';
import { 
    ADD_PLAN_ITEM, 
    REMOVE_PLAN_ITEM, 
    COMPLETE_PLAN_ITEM, 
    SUB_PLAN_QUANTITY, 
    ADD_PLAN_QUANTITY,
    RESET
} from '../action-types/plan-actions';

const planReducer = (state = initState, action) => {
    if(action.type === RESET){
        return {
            ...state,
            items: initState.items,
            addedItems: [],
            total: 0,
            totalCompleted: 0
        }
    }

    if(action.type === ADD_PLAN_ITEM){
        let addedItem = state.items.find(item => item.id === action.id);
        let existed_item = state.addedItems.find(item => action.id === item.id);
        if(existed_item) {
            addedItem.quantity += 1;
            addedItem.completed = false;
            return {
                ...state, total: state.total + addedItem.rep
            } 
        } else {
            addedItem.quantity = 1;
            addedItem.completed = false;
            let newTotal = state.total + addedItem.rep;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if(action.type === COMPLETE_PLAN_ITEM){
        let addedItem = state.items.find(item => item.id === action.id);
        addedItem.completed = true;
        return{
            ...state,
            addedItems: [...state.addedItems],
            totalCompleted: state.totalCompleted += (addedItem.rep * addedItem.quantity),
            score: [...state.score, addedItem.rewards]
        }
    }

    if(action.type === REMOVE_PLAN_ITEM){
        let itemToRemove= state.addedItems.find(item => action.id === item.id);
        let new_items = state.addedItems.filter(item => action.id !== item.id);
        let newTotal = state.total - (itemToRemove.rep * itemToRemove.quantity);
        return {
            ...state,
            addedItems: new_items,
            totalCompleted: state.totalCompleted -= (itemToRemove.rep * itemToRemove.quantity),
            total: newTotal
        }
    }

    if(action.type === ADD_PLAN_QUANTITY){
        let addedItem = state.items.find(item => item.id === action.id);
        addedItem.quantity += 1;
        addedItem.completed = false; 
        let newTotal = state.total + addedItem.rep
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_PLAN_QUANTITY) { 
        let addedItem = state.items.find(item => item.id === action.id);
        addedItem.completed = false;
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - addedItem.rep;
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.rep;
            return{
                ...state,
                total: newTotal
            }
        } 

    } else {
        return state;
    }

}

export default planReducer;
