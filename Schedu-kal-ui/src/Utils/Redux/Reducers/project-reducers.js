import { GET_PROJECTS_BEGIN, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from "../Actions/project-actions.js";

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

    return state;
}