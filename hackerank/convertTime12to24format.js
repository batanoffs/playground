function timeConversion(s) {
    // Write your code here
    const getClockFormat = s.slice(-2)
    const tokens = s.slice(0,8).split(":")
    const hours = Number(tokens[0]);
    const minutes = Number(tokens[1]);
    let hours24 = 0;
    let finalTime = [];
    
    if (getClockFormat == "PM") {
        if( 1 <= hours < 12) hours24 = hours + 12;
        if( hours === 12 && 0 <= minutes <= 59) hours24 = hours;
    }
    
    if (getClockFormat == "AM") {
        if( 1 <= hours < 12) hours24 = hours;
        if( hours === 12 && 0 <= minutes <= 59) hours24 = hours - 12;
    }
    
    const hoursConcat = "0" + hours24;
    const finalHours = hours24 < 10 ? hoursConcat : hours24.toString();
    const finalMinSec = tokens.slice(1);
    
    finalTime.push(finalHours, ...finalMinSec);
    
    return finalTime.join(':')
}

timeConversion("11:05:45PM")
