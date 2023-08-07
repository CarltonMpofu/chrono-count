function updateCountdown() {
    const now = new Date();
    
    const progressBarMinutes = document.querySelector('.progress-minutes');
    const progressBarHours = document.querySelector('.progress-hours');
    const progressBarDay = document.querySelector('.progress-day');
    const progressBarMonth = document.querySelector('.progress-month');
    const progressBarYear = document.querySelector('.progress-year');
    const progressBarValentines = document.querySelector('.progress-vday');

    const secondsUntilNextMinute = 60 - now.getSeconds();
    const minutesUntilNextHour = 60 - now.getMinutes();
    const hoursUntilNextDay = 24 - now.getHours();

    const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysUntilNextMonth = daysInCurrentMonth - now.getDate();
    
    const one_day = 24 * 60 * 60 * 1000; // one day time in ms
    const daysInCurrentYear = Math.floor((new Date(now.getFullYear() + 1, 0, 1) - new Date(now.getFullYear(), 0, 1)) / (one_day));
    const daysUntilNextYear = Math.floor((new Date(now.getFullYear() + 1, 0, 1) - now) / (one_day));
    

    const valentiesDay = new Date(now.getFullYear(), 1, 14);
    const prevValentinesDay = new Date(now.getFullYear()-1, 1, 14);

    if(now.getMonth() > 1 || now.getMonth() === 1 && now.getDate() > 14)
    {
        valentiesDay.setFullYear(valentiesDay.getFullYear() + 1);
        prevValentinesDay.setFullYear(prevValentinesDay.getFullYear() +1);
    }

    const daysUntilNextValentines = Math.floor((valentiesDay - now) / one_day)
    const maxDaysBetweenValentines = Math.floor((valentiesDay - prevValentinesDay) / one_day)
    // console.log(maxDaysBetweenValentines);
    
    progressBarMinutes.style.width = ((60-secondsUntilNextMinute) / 60) * 100 + '%';
    progressBarHours.style.width = ((60 - minutesUntilNextHour) / 60) * 100 + '%';
    progressBarDay.style.width = ((24 - hoursUntilNextDay) / 24) * 100 + '%';
    progressBarMonth.style.width = (now.getDate() / daysInCurrentMonth) * 100 + '%';
    progressBarYear.style.width = ((daysInCurrentYear -daysUntilNextYear) / daysInCurrentYear) * 100 + '%';
    progressBarValentines.style.width = ((maxDaysBetweenValentines -daysUntilNextValentines) / maxDaysBetweenValentines) * 100 + '%';
    
    document.getElementById('countdown-minutes').textContent = `${secondsUntilNextMinute} seconds left`;
    document.getElementById('countdown-hours').textContent = `${minutesUntilNextHour} minutes left`;
    document.getElementById('countdown-day').textContent = `${hoursUntilNextDay} hours left`;
    document.getElementById('countdown-month').textContent = `${daysUntilNextMonth} days left`;
    document.getElementById('countdown-year').textContent = `${daysUntilNextYear} days left`;
    document.getElementById('countdown-vday').textContent = `${daysUntilNextValentines} days left`;

}

updateCountdown();
setInterval(updateCountdown, 1000);
