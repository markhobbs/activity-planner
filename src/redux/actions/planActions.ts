import { 
    ADD_PLAN_ITEM, 
    REMOVE_PLAN_ITEM, 
    COMPLETE_PLAN_ITEM,
    SUB_PLAN_QUANTITY, 
    ADD_PLAN_QUANTITY,
    RESET
} from './action-types/plan-actions'

export const addPlanItem = (id: number)=>{
    return{
        type: ADD_PLAN_ITEM,
        id
    }
}

export const removePlanItem = (id: number)=>{
    return{
        type: REMOVE_PLAN_ITEM,
        id
    }
}

export const completePlanItem = (id: number)=>{
    return{
        type: COMPLETE_PLAN_ITEM,
        id
    }
}

export const subtractPlanQuantity = (id: number)=>{
    return {
        type: SUB_PLAN_QUANTITY,
        id
    }
}

export const addPlanQuantity = (id: number)=>{
    return {
        type: ADD_PLAN_QUANTITY,
        id
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}