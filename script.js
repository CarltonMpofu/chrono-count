function updateCountdown() {
    const now = new Date();
    
    const progressBarMinutes = document.querySelector('.progress-minutes');
    const progressBarHours = document.querySelector('.progress-hours');
    const progressBarDay = document.querySelector('.progress-day');
    const progressBarMonth = document.querySelector('.progress-month');
    const progressBarYear = document.querySelector('.progress-year');

    const secondsUntilNextMinute = 60 - now.getSeconds();
    const minutesUntilNextHour = 60 - now.getMinutes();
    const hoursUntilNextDay = 24 - now.getHours();

    const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysUntilNextMonth = daysInCurrentMonth - now.getDate();
    
    const one_day = 24 * 60 * 60 * 1000; // one day time in ms
    const daysInCurrentYear = ((new Date(now.getFullYear() + 1, 0, 1) - new Date(now.getFullYear(), 0, 1)) / (one_day));
    const daysUntilNextYear = Math.floor((new Date(now.getFullYear() + 1, 0, 1) - now) / (one_day));
    console.log(daysUntilNextYear);
    
    progressBarMinutes.style.width = ((60-secondsUntilNextMinute) / 60) * 100 + '%';
    progressBarHours.style.width = ((60 - minutesUntilNextHour) / 60) * 100 + '%';
    progressBarDay.style.width = ((24 - hoursUntilNextDay) / 24) * 100 + '%';
    progressBarMonth.style.width = (now.getDate() / daysInCurrentMonth) * 100 + '%';
    progressBarYear.style.width = ((daysInCurrentYear -daysUntilNextYear) / daysInCurrentYear) * 100 + '%';
    
    document.getElementById('countdown-minutes').textContent = `${secondsUntilNextMinute} seconds left`;
    document.getElementById('countdown-hours').textContent = `${minutesUntilNextHour} minutes left`;
    document.getElementById('countdown-day').textContent = `${hoursUntilNextDay} hours left`;
    document.getElementById('countdown-month').textContent = `${daysUntilNextMonth} days left`;
    document.getElementById('countdown-year').textContent = `${daysUntilNextYear} days left`;

}

updateCountdown();
setInterval(updateCountdown, 1000);
