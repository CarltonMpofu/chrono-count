function updateCountdown() {
    const now = new Date();
    
    const progressBarMinutes = document.querySelector('.progress-minutes');
    const progressBarHours = document.querySelector('.progress-hours');
    const progressBarDay = document.querySelector('.progress-day');

    const secondsUntilNextMinute = 60 - now.getSeconds();
    const minutesUntilNextHour = 60 - now.getMinutes();
    const hoursUntilNextDay = 24 - now.getHours();

    // console.log(minutesUntilNextHour);
    
    progressBarMinutes.style.width = ((60-secondsUntilNextMinute) / 60) * 100 + '%';
    progressBarHours.style.width = ((60 - minutesUntilNextHour) / 60) * 100 + '%';
    progressBarDay.style.width = ((24 - hoursUntilNextDay) / 24) * 100 + '%';
    
    document.getElementById('countdown-minutes').textContent = `${secondsUntilNextMinute} seconds left`;
    document.getElementById('countdown-hours').textContent = `${minutesUntilNextHour} minutes left`;
    document.getElementById('countdown-day').textContent = `${hoursUntilNextDay} hours left`;

}

updateCountdown();
setInterval(updateCountdown, 1000);
