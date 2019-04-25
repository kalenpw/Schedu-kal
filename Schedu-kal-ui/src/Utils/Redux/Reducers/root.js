import { combineReducers } from 'redux';
import projects from "./project-reducers.js";

export default combineReducers({
    projects
});

// import { UPDATE_USERNAME, CREATE_TASK } from "../actions.js";

// const initialState = {
//     username: '',
//     projects: [],
// };

// export function reducer(state = initialState, action){
//     const actionType = action.type;

//     if(actionType === UPDATE_USERNAME){
//         return Object.assign({}, state, {
//             username: action.payload
//         });
//     }

//     if(actionType === CREATE_TASK){
//         state.projects.push(action.payload);
//     }

//     return state;
// }