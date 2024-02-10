const dp = document.getElementById("display");
const date = document.getElementById("date");

setInterval(get_age_in_days, 10)

function get_age_in_days()
{
    const now = Date.parse(new Date());
    const past = Date.parse(new Date(date.value));

    const age_days = parseInt((now - past) / (1000 * 3600 * 24))
    const time = Date(now).split(" ")[4].split(":").map(n => n = parseInt(n));
    const time_sec = time[0] * 3600 + time[1] * 60 + time[2];

    dp.innerHTML = `<span id="age-days">${age_days}</span> <span id="time-sec">${time_sec}</span>`
}
