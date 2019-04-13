export function deepCopyList(list){
    let newList = [];
    for(let i = 0; i < list.length; i++){
        let oldTask = list[i];
        let task = {
            id: oldTask.id,
            dateDue: oldTask.dateDue,
            description: oldTask.description,
            project_id: oldTask.project_id,
            created_at: oldTask.created_at,
            updated_at: oldTask.updated_at, 
        }
        newList.push(task);
    }    
    return newList;
}