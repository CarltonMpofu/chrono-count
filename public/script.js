function updateCountdown() {
    // Get progress bars 
    const progressBarMinutes = document.querySelector('.progress-minutes');
    const progressBarHours = document.querySelector('.progress-hours');
    const progressBarDay = document.querySelector('.progress-day');
    const progressBarMonth = document.querySelector('.progress-month');
    const progressBarYear = document.querySelector('.progress-year');
    const progressBarValentines = document.querySelector('.progress-vday');
    const progressBarMothers = document.querySelector('.progress-mothers');
    const progressBarFathers = document.querySelector('.progress-fathers');
    const progressBarBirthday = document.querySelector('.progress-birthday');

    // Get date
    const now = new Date();

    // for seconds, minutes, and hours left
    const secondsUntilNextMinute = 60 - now.getSeconds();
    const minutesUntilNextHour = 60 - now.getMinutes();
    const hoursUntilNextDay = 24 - now.getHours();

    // for month - days left till next month
    const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysUntilNextMonth = daysInCurrentMonth - now.getDate();
    
    // for year - days left till next year
    const one_day = 24 * 60 * 60 * 1000; // one day time in ms
    const daysInCurrentYear = Math.floor((new Date(now.getFullYear() + 1, 0, 1) - new Date(now.getFullYear(), 0, 1)) / (one_day));
    const daysUntilNextYear = Math.floor((new Date(now.getFullYear() + 1, 0, 1) - now) / (one_day));
    
    // for valentines day - days left till next valentines
    const valentiesDay = new Date(now.getFullYear(), 1, 14);
    const prevValentinesDay = new Date(now.getFullYear()-1, 1, 14);

    // If valentines day has already passed then use next year
    if(now.getMonth() > 1 || now.getMonth() === 1 && now.getDate() > 14)
    {
        valentiesDay.setFullYear(valentiesDay.getFullYear() + 1);
        prevValentinesDay.setFullYear(prevValentinesDay.getFullYear() +1);
    }

    const daysUntilNextValentines = Math.floor((valentiesDay - now) / one_day)
    const maxDaysBetweenValentines = Math.floor((valentiesDay - prevValentinesDay) / one_day)

    /*  For Mothers day */ 
    // Date of 1st date of the May
    let mayDate = new Date(now.getFullYear(), 4, 1);

    mayDate = getMothersDay(mayDate);
    let prevMothersDay = getMothersDay(new Date(now.getFullYear()-1, 4, 1));
   

    // If mothers day has already passed then use next year
    if(now.getMonth() > 4 || now.getMonth() === 4 && now.getDate() > mayDate.getDate())
    {
        // Store this year mothers day as previous
        prevMothersDay = mayDate;
        // Get new mothers day for next year
        mayDate = getMothersDay(new Date(now.getFullYear()+1, 4, 1));
    }
    
    const daysUntilNextMothersDay = Math.floor((mayDate - now) / one_day);
    const maxDaysBetweenMothersDay = Math.floor((mayDate - prevMothersDay) / one_day);
    //  console.log(daysUntilNextMothersDay);

    /*  For Fathers day */ 
    // Date of 1st date of the May
    let juneDate = new Date(now.getFullYear(), 5, 1);

    juneDate = getFathersDay(juneDate);
    let prevFathersDay = getFathersDay(new Date(now.getFullYear()-1, 5, 1));
   

    // If mothers day has already passed then use next year
    if(now.getMonth() > 5 || now.getMonth() === 5 && now.getDate() > juneDate.getDate())
    {
        // Store this year mothers day as previous
        prevFathersDay = juneDate;
        // Get new mothers day for next year
        juneDate = getFathersDay(new Date(now.getFullYear()+1, 5, 1));
    }
    
    const daysUntilNextFathersDay = Math.floor((juneDate - now) / one_day);
    const maxDaysBetweenFathersDay = Math.floor((juneDate - prevFathersDay) / one_day);

    /* My birthday */
    const myBirthday = new Date(now.getFullYear(), 5, 8);
    const prevBirthday = new Date(now.getFullYear()-1, 5, 8);

    // If my birthdaday has already passed then use next year
    if(now.getMonth() > 5 || now.getMonth() === 5 && now.getDate() > 8)
    {
        myBirthday.setFullYear(myBirthday.getFullYear() + 1);
        prevBirthday.setFullYear(prevBirthday.getFullYear() +1);
    }

    const daysUntilNextBirthday = Math.floor((myBirthday - now) / one_day)
    const maxDaysBetweenBirthday = Math.floor((myBirthday - prevBirthday) / one_day)
    
    // Set progress bar width
    progressBarMinutes.style.width = ((60-secondsUntilNextMinute) / 60) * 100 + '%';
    progressBarHours.style.width = ((60 - minutesUntilNextHour) / 60) * 100 + '%';
    progressBarDay.style.width = ((24 - hoursUntilNextDay) / 24) * 100 + '%';
    progressBarMonth.style.width = (now.getDate() / daysInCurrentMonth) * 100 + '%';
    progressBarYear.style.width = ((daysInCurrentYear -daysUntilNextYear) / daysInCurrentYear) * 100 + '%';
    progressBarValentines.style.width = ((maxDaysBetweenValentines -daysUntilNextValentines) / maxDaysBetweenValentines) * 100 + '%';
    progressBarMothers.style.width = ((maxDaysBetweenMothersDay -daysUntilNextMothersDay) / maxDaysBetweenMothersDay) * 100 + '%';
    progressBarFathers.style.width = ((maxDaysBetweenFathersDay -daysUntilNextFathersDay) / maxDaysBetweenFathersDay) * 100 + '%';
    progressBarBirthday.style.width = ((maxDaysBetweenBirthday -daysUntilNextBirthday) / maxDaysBetweenBirthday) * 100 + '%';
    
    // document.getElementById('countdown-minutes-bottom').style.visibility = "hidden"


    // Set time left for elements 
    document.getElementById('countdown-minutes-top').textContent = `${secondsUntilNextMinute} seconds left`;
    document.getElementById('countdown-minutes-bottom').textContent = `${secondsUntilNextMinute} seconds left`;

    document.getElementById('countdown-hours-top').textContent = `${minutesUntilNextHour} minutes left`;
    document.getElementById('countdown-hours-bottom').textContent = `${minutesUntilNextHour} minutes left`;

    document.getElementById('countdown-day-top').textContent = `${hoursUntilNextDay} hours left`;
    document.getElementById('countdown-day-bottom').textContent = `${hoursUntilNextDay} hours left`;

    document.getElementById('countdown-month-top').textContent = `${daysUntilNextMonth} days left`;
    document.getElementById('countdown-month-bottom').textContent = `${daysUntilNextMonth} days left`;

    document.getElementById('countdown-year-top').textContent = `${daysUntilNextYear} days left`;
    document.getElementById('countdown-year-bottom').textContent = `${daysUntilNextYear} days left`;

    document.getElementById('countdown-vday-top').textContent = `${daysUntilNextValentines} days left`;
    document.getElementById('countdown-vday-bottom').textContent = `${daysUntilNextValentines} days left`;

    document.getElementById('countdown-mothers-top').textContent = `${daysUntilNextMothersDay} days left`;
    document.getElementById('countdown-mothers-bottom').textContent = `${daysUntilNextMothersDay} days left`;

    document.getElementById('countdown-fathers-top').textContent = `${daysUntilNextFathersDay} days left`;
    document.getElementById('countdown-fathers-bottom').textContent = `${daysUntilNextFathersDay} days left`;

    document.getElementById('countdown-birthday-top').textContent = `${daysUntilNextBirthday} days left`;
    document.getElementById('countdown-birthday-bottom').textContent = `${daysUntilNextBirthday} days left`;

    // console.log(window.innerWidth);
    if(window.innerWidth > 510)
    {
        hideBottomCount();

        showTopCount();
    }
    else
    {
        showBottomCount();

        hideTopCount();
    }

}

updateCountdown();
setInterval(updateCountdown, 1000);

function hideTopCount() {
    document.getElementById('countdown-minutes-top').style.visibility = "hidden";
    document.getElementById('countdown-hours-top').style.visibility = "hidden";
    document.getElementById('countdown-day-top').style.visibility = "hidden";
    document.getElementById('countdown-month-top').style.visibility = "hidden";
    document.getElementById('countdown-year-top').style.visibility = "hidden";
    document.getElementById('countdown-vday-top').style.visibility = "hidden";
    document.getElementById('countdown-mothers-top').style.visibility = "hidden";
    document.getElementById('countdown-fathers-top').style.visibility = "hidden";
    document.getElementById('countdown-birthday-top').style.visibility = "hidden";
}

function showBottomCount() {
    document.getElementById('countdown-minutes-bottom').style.visibility = "visible";
    document.getElementById('countdown-hours-bottom').style.visibility = "visible";
    document.getElementById('countdown-day-bottom').style.visibility = "visible";
    document.getElementById('countdown-month-bottom').style.visibility = "visible";
    document.getElementById('countdown-year-bottom').style.visibility = "visible";
    document.getElementById('countdown-vday-bottom').style.visibility = "visible";
    document.getElementById('countdown-mothers-bottom').style.visibility = "visible";
    document.getElementById('countdown-fathers-bottom').style.visibility = "visible";
    document.getElementById('countdown-birthday-bottom').style.visibility = "visible";
}

function showTopCount() {
    document.getElementById('countdown-minutes-top').style.visibility = "visible";
    document.getElementById('countdown-hours-top').style.visibility = "visible";
    document.getElementById('countdown-day-top').style.visibility = "visible";
    document.getElementById('countdown-month-top').style.visibility = "visible";
    document.getElementById('countdown-year-top').style.visibility = "visible";
    document.getElementById('countdown-vday-top').style.visibility = "visible";
    document.getElementById('countdown-mothers-top').style.visibility = "visible";
    document.getElementById('countdown-fathers-top').style.visibility = "visible";
    document.getElementById('countdown-birthday-top').style.visibility = "visible";
}

function hideBottomCount() {
    document.getElementById('countdown-minutes-bottom').style.visibility = "hidden";
    document.getElementById('countdown-hours-bottom').style.visibility = "hidden";
    document.getElementById('countdown-day-bottom').style.visibility = "hidden";
    document.getElementById('countdown-month-bottom').style.visibility = "hidden";
    document.getElementById('countdown-year-bottom').style.visibility = "hidden";
    document.getElementById('countdown-vday-bottom').style.visibility = "hidden";
    document.getElementById('countdown-mothers-bottom').style.visibility = "hidden";
    document.getElementById('countdown-fathers-bottom').style.visibility = "hidden";
    document.getElementById('countdown-birthday-bottom').style.visibility = "hidden";
}

function getMothersDay(date) {
    // Set mothers day date
    // Which is on the second sunday of may

    let firstSunday = 0;
    const day = date.getDay();
    if (day > 0) // Not sunday
    { // Find sunday
        firstSunday = 7 - day;
    }
    else { // is sunday
        firstSunday = 0;
    }
    // find second sunday date
    let secondSunday = date.getDate() + 7 + firstSunday;

    // Set Date to second sunday of may
    date.setDate(secondSunday);
    return date;
}

function getFathersDay(date) {
    // Set fathers day date
    // Which is on the third sunday of june

    let firstSunday = 0;
    const day = date.getDay();
    if (day > 0) // Not sunday
    { // Find sunday
        firstSunday = 7 - day;
    }
    else { // is sunday
        firstSunday = 0;
    }
    // find third sunday date
    let thirdSunday = date.getDate() + 14 + firstSunday;

    // Set Date to second sunday of may
    date.setDate(thirdSunday);
    return date;
}
