function updateCountdown() {
    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();
    const progressBarMinutes = document.querySelector('.progress-minutes');
    const progressBarHours = document.querySelector('.progress-hours');

    const secondsPassedToday = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
    
    progressBarMinutes.style.width = ((60 - secondsUntilNextMinute) / 60) * 100 + '%';
    progressBarHours.style.width = (now.getMinutes() * 60  / 3600) * 100 + '%';
    // console.log(secondsPassedToday);
    //progressBarHours.style.width = (secondsPassedToday / 86400) * 100 + '%';


    document.getElementById('countdown').textContent = `00:${secondsUntilNextMinute < 10 ? '0' : ''}${secondsUntilNextMinute}`;

    const secondsUntilNextHour = 3600 - secondsPassedToday % 3600;
    const hours = Math.floor(secondsUntilNextHour / 3600);
    const minutes = Math.floor((secondsUntilNextHour % 3600) / 60);
    const seconds = secondsUntilNextHour % 60;
    document.getElementById('countdown-hours').textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}

updateCountdown();
setInterval(updateCountdown, 1000);
