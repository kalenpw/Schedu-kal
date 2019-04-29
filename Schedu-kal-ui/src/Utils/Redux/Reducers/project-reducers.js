import { GET_PROJECTS_BEGIN, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE, CREATE_PROJECT_SUCCESS, UPDATE_PROJECT_ORDER_SUCCESS } from "../Actions/project-actions.js";

const initialState = {
    projects: [],
    isLoading: false,
    error: null
};

export default function projectReducer(state = initialState, action) {
    if (action.type === GET_PROJECTS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            error: null
        };
    }

    if (action.type === GET_PROJECTS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            projects: action.payload
        }
    }

    if (action.type === GET_PROJECTS_FAILURE) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    }

    if(action.type === CREATE_PROJECT_SUCCESS){
        const newProjects = state.projects.concat(action.payload);
        return {
            ...state,
            projects: newProjects,
            isLoading: false,
            error: null,
        }
    }

    if(action.type === UPDATE_PROJECT_ORDER_SUCCESS){
        return {
            projects: action.payload,
            isLoading: false,
            error: null,
        }
    }

    return state;
}