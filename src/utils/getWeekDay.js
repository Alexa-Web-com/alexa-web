export const getWeekDay = () => {
    const getDateTime = new Date()
    const day = getDateTime.getDay()
    return day
}