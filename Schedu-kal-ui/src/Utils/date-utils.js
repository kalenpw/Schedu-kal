export function getDaysDifference(dateOne, dateTwo) {
    dateOne = localDateFromYMD(dateOne);
    dateTwo = new Date(Date.parse(dateTwo));
    dateTwo.setHours(0, 0, 0, 0);

    // let difference = Math.abs(dateOne - dateTwo);
    let difference = dateOne - dateTwo;
    let daysRemaining = Math.round(difference / (1000 * 60 * 60 * 24));
    let plural = (daysRemaining === 1) ? '' : "s";
    return `${daysRemaining} day${plural} left`;
}

export function formatDate(dateToFormat) {
    if (typeof dateToFormat === "string") {
        dateToFormat = localDateFromYMD(dateToFormat);
    }
    dateToFormat.setHours(0, 0, 0, 0, 0);

    let year = dateToFormat.getFullYear();
    let month = dateToFormat.getMonth() + 1;
    let day = dateToFormat.getDate();
    return `${year}-${month}-${day}`;
}

//dates of format 2019-01-31 to date object
export function localDateFromYMD(dateYmd) {
    const date = new Date(Date.parse(dateYmd));
    date.setHours(date.getHours() + (date.getTimezoneOffset() / 60));
    date.setHours(0, 0, 0, 0);
    return date;
}