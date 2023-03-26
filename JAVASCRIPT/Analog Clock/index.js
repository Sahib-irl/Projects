setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minuteTime = d.getMinutes();
    secondsTime = d.getSeconds();
    hrotation = 30 * hourTime + minuteTime/2;
    mrotation = 6 * minuteTime;
    srotation = 6 * secondsTime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);  