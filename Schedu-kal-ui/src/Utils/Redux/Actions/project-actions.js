import axios from 'axios';

export const GET_PROJECTS_BEGIN = "GET_PROJECTS_BEGIN";
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAILURE = "GET_PROJECTS_FAILURE";

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

export function getProjects(url){
    return (dispatch) => {
        dispatch(getProjectsBegin());
        axios.get(url)
            .then((response) => {
                // dispatch(itemsIsLoading(false));
                // dispatch(itemsFetchDataSuccess(response.data));
                dispatch(getProjectsSuccess(response.data));
            })
            .catch(error => {
                dispatch(getProjectsFailure(error));
                // dispatch(itemsHasErrored(true))
            })
    }
}