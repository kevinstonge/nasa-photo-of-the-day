const formatDate = (dateObject) => {
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    month = (month < 10) ? `0${month}` : month;
    let day = dateObject.getDate();
    day = (day < 10) ? `0${day}` : day;
    return `${year}-${month}-${day}`
}
export default formatDate;