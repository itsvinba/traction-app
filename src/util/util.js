export const luma = ([R, G, B]) => {
    return (R+R+R+B+G+G+G+G)>>3;
};

export const formatDate = (d) => {
    let date = d;
    if(typeof date === "string"){
        date = new Date(date);
    }
    const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

export const dateUtil = function(d){
    let date = d instanceof Date?d:new Date();
    const t = {
        milliseconds:1000,
        seconds:60,
        minutes:60,
        hours:24,
        days:7,
    };
    const periods = {
        milliseconds:ms => ms,
        seconds:ms => ms/(t.milliseconds),        
        minutes:ms => ms/(t.milliseconds * t.seconds),        
        hours:ms => ms/(t.milliseconds * t.seconds * t.minutes),
        days:ms => ms/(t.milliseconds * t.seconds * t.minutes * t.hours),
        weeks:ms => ms/(t.milliseconds * t.seconds * t.minutes * t.hours * t.days),
    };

    const difference = (date2, period) => {
        var timeDiff = Math.abs(date2.getTime() - date.getTime());
        if(period && periods[period]){
            return periods[period](timeDiff);
        }
        return timeDiff;
    };

    return {
        difference,
    };
};

export function find(arr, index, value){
    return arr.find(obj => {
        return obj[index] === value;
    });
}
