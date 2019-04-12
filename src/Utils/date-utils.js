export function getDaysDifference(dateOne, dateTwo) {
    // let difference = Math.abs(dateOne - dateTwo);
    let difference = dateOne - dateTwo;
    let daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    let plural = (daysRemaining === 1) ? '' : "s";
    return `${daysRemaining} day${plural} left`;
}

export function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month}-${day}`;
}