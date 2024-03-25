import { 
    ADD_PLAN_ITEM, 
    REMOVE_PLAN_ITEM, 
    COMPLETE_PLAN_ITEM,
    SUB_PLAN_QUANTITY, 
    ADD_PLAN_QUANTITY,
    RESET
} from './action-types/plan-actions'

/**
 * Adds a plan item with the specified ID.
 * @param {number} id - The unique identifier for the plan item.
 * @returns {Object} - An action object with the type ADD_PLAN_ITEM.
 */
export const addPlanItem = (id: number) => {
    return {
        type: ADD_PLAN_ITEM,
        id
    };
};

/**
 * Removes a plan item with the specified ID.
 * @param {number} id - The unique identifier for the plan item.
 * @returns {Object} - An action object with the type REMOVE_PLAN_ITEM.
 */
export const removePlanItem = (id: number) => {
    return {
        type: REMOVE_PLAN_ITEM,
        id
    };
};

/**
 * Marks a plan item as completed using the specified ID.
 * @param {number} id - The unique identifier for the plan item.
 * @returns {Object} - An action object with the type COMPLETE_PLAN_ITEM.
 */
export const completePlanItem = (id: number) => {
    return {
        type: COMPLETE_PLAN_ITEM,
        id
    };
};

/**
 * Subtracts a quantity from a plan item with the specified ID.
 * @param {number} id - The unique identifier for the plan item.
 * @returns {Object} - An action object with the type SUB_PLAN_QUANTITY.
 */
export const subtractPlanQuantity = (id: number) => {
    return {
        type: SUB_PLAN_QUANTITY,
        id
    };
};

/**
 * Adds a quantity to a plan item with the specified ID.
 * @param {number} id - The unique identifier for the plan item.
 * @returns {Object} - An action object with the type ADD_PLAN_QUANTITY.
 */
export const addPlanQuantity = (id: number) => {
    return {
        type: ADD_PLAN_QUANTITY,
        id
    };
};

/**
 * Resets the plan items.
 * @returns {Object} - An action object with the type RESET.
 */
export const reset = () => {
    return {
        type: RESET
    };
};