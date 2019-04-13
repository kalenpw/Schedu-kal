export function getDaysDifference(dateOne, dateTwo) {
    dateOne = new Date(Date.parse(dateOne));
    dateTwo = new Date(Date.parse(dateTwo));

    // let difference = Math.abs(dateOne - dateTwo);
    let difference = dateOne - dateTwo;
    let daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    let plural = (daysRemaining === 1) ? '' : "s";
    return `${daysRemaining} day${plural} left`;
}

export function formatDate(dateToFormat) {
    if(typeof dateToFormat === "string"){
        let dateInt = Date.parse(dateToFormat);
        dateToFormat = new Date(dateInt);
    }

    let year = dateToFormat.getFullYear();
    let month = dateToFormat.getMonth() + 1;
    let day = dateToFormat.getDate();
    return `${year}-${month}-${day}`;
}