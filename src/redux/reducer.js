// should be a part of the state
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


// initial state in reducer
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};


// takes state and action to find the next state
// when app is started, initial state needs to be set
// because there is no current state (es6 syntax)
export const Reducer = (state = initialState, action) => {

    // input state should be immutable

    return state;
};



