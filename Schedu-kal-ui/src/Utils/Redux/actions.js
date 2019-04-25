export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const CREATE_TASK = "CREATE_TASK";
export const CREATE_PROJECT = "CREATE_PROJECT";

export const updateUsername = (username) => {
    return { type: UPDATE_USERNAME, payload: username };
}

export const createTask = (task) => {
    return { type: CREATE_TASK, payload: task}
}