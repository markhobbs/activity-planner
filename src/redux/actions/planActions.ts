import { 
    ADD_PLAN_ITEM, 
    REMOVE_PLAN_ITEM, 
    COMPLETE_PLAN_ITEM,
    SUB_PLAN_QUANTITY, 
    ADD_PLAN_QUANTITY,
    RESET
} from './action-types/plan-actions'

//add cart action

/*export const fetchTodos = (host) => (dispatch) => {
    let url = '/api/todos';
    url = host ? host + url : url;
  
    dispatch(fetchRequest());
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        return response.json().then(Promise.reject.bind(Promise));
      }
      return response.json();
    }).then(json => {
      return dispatch(fetchSuccess(json));
    }).catch(err => {
      return dispatch(fetchFailure('Error Fetching Todos!'));
    });
};*/


export const addPlanItem = (id: number)=>{
    return{
        type: ADD_PLAN_ITEM,
        id
    }
}

//remove item action
export const removePlanItem = (id: number)=>{
    return{
        type: REMOVE_PLAN_ITEM,
        id
    }
}

//complete item action
export const completePlanItem = (id: number)=>{
    return{
        type: COMPLETE_PLAN_ITEM,
        id
    }
}

//subtract qt action
export const subtractPlanQuantity = (id: number)=>{
    return {
        type: SUB_PLAN_QUANTITY,
        id
    }
}

//add qt action
export const addPlanQuantity = (id: number)=>{
    return {
        type: ADD_PLAN_QUANTITY,
        id
    }
}

//add qt action
export const reset = () => {
    return {
        type: RESET
    }
}