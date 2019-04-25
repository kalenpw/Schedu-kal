import axios from 'axios';
import { } from "Api/urls";
import ProjectApi from "Api/projects.js";

export const GET_PROJECTS_BEGIN = "GET_PROJECTS_BEGIN";
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAILURE = "GET_PROJECTS_FAILURE";

export const CREATE_PROJECT_BEGIN = "CREATE_PROJECT_BEGIN";
export const CREATE_PROJECT_SUCCESS = "CREATE_PROJECT_SUCCESS";
export const CREATE_PROJECT_FAILURE = "CREATE_PROJECT_FAILURE";

export const getProjectsBegin = () => {
    return {
        type: GET_PROJECTS_BEGIN
    }
}

export const getProjectsSuccess = (projects) => {
    return {
        type: GET_PROJECTS_SUCCESS,
        payload: projects
    }
}

export const getProjectsFailure = (error) => {
    return {
        type: GET_PROJECTS_FAILURE,
        payload: error
    }
}

export function getProjects() {
    return (dispatch) => {
        dispatch(getProjectsBegin());
        ProjectApi.getProjects()
            .then(response => {
                dispatch(getProjectsSuccess(response));
            })
            .catch(error => {
                dispatch(getProjectsFailure(error));
            });
    }
}

export function createProjectBegin() {
    return {
        type: CREATE_PROJECT_BEGIN
    }
}

export function createProjectSuccess() {
    return {
        type: CREATE_PROJECT_SUCCESS
    }
}

export function createProjectFailure(error) {
    return {
        type: CREATE_PROJECT_FAILURE,
        payload: error
    }
}

export function createProject(title, category, dateDue) {
    return (dispatch) => {
        dispatch(createProjectBegin());
        ProjectApi.createProject(title, category, dateDue)
            .then(response => {
                dispatch(createProjectSuccess());
                window.location.href = "/projects/" + response.id;
            })
            .catch(error => {
                dispatch(createProjectFailure(error));
            });
    }
}