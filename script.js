function updateCountdown() {
    const now = new Date();
    
    const progressBarMinutes = document.querySelector('.progress-minutes');
    const progressBarHours = document.querySelector('.progress-hours');
    const progressBarDay = document.querySelector('.progress-day');
    const progressBarMonth = document.querySelector('.progress-month');

    const secondsUntilNextMinute = 60 - now.getSeconds();
    const minutesUntilNextHour = 60 - now.getMinutes();
    const hoursUntilNextDay = 24 - now.getHours();

    const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysUntilNextMonth = daysInCurrentMonth - now.getDate();
    
    
    
    progressBarMinutes.style.width = ((60-secondsUntilNextMinute) / 60) * 100 + '%';
    progressBarHours.style.width = ((60 - minutesUntilNextHour) / 60) * 100 + '%';
    progressBarDay.style.width = ((24 - hoursUntilNextDay) / 24) * 100 + '%';
    progressBarMonth.style.width = (now.getDate() / daysInCurrentMonth) * 100 + '%';
    
    document.getElementById('countdown-minutes').textContent = `${secondsUntilNextMinute} seconds left`;
    document.getElementById('countdown-hours').textContent = `${minutesUntilNextHour} minutes left`;
    document.getElementById('countdown-day').textContent = `${hoursUntilNextDay} hours left`;
    document.getElementById('countdown-month').textContent = `${daysUntilNextMonth} days left`;

}

updateCountdown();
setInterval(updateCountdown, 1000);
