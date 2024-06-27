import moment from "moment";

export const calculateAge = (date_of_birth: string | undefined): number => {
    if(date_of_birth === undefined)
        return 0;

    let timeDiff = Math.abs(Date.now() - new Date(date_of_birth).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    return age;
}


export const getWeekEndDate = () => {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
}

export const getWeekStartDate = () => {
    return moment(new Date()).subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss');
}


export const getEndDate = (endDate: string) => {
    return moment(endDate).format('YYYY-MM-DD HH:mm:ss');
}

export const getStartDate = (endDate: string, days: number) => {
    return moment(endDate).subtract(days, 'days').format('YYYY-MM-DD HH:mm:ss');
}

