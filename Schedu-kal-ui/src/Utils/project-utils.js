export function getIconFromCategory(category){
    if(category.toLowerCase() === "school"){
        return "fas fa-graduation-cap";
    }
    if(category.toLowerCase() === "personal"){
        return "fas fa-user";
    }
    return "fas fa-question";
}