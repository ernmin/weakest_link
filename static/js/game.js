let duration_div = document.getElementById('duration');
let duration = +duration_div.innerHTML;

function seconds(duration) {
    total_seconds = duration * 60;
    return total_seconds;
}

function mins_seconds(duration) {
    mins = Math.trunc(duration / 60);
    seconds = duration % 60;
    if (seconds < 10) {
        seconds = '0' + seconds.toString()
        combined = mins.toString() + ':' + seconds;
    }
    else {
        combined = mins.toString() + ':' + seconds.toString();
    }
    
    return combined;
}

total_seconds = seconds(duration);
combined = mins_seconds(total_seconds);

duration_div.innerHTML = combined;

function update_time(time) {
    let min_second = time.split(":");
    let min = Number(min_second[0]);
    let second = Number(min_second[1]);
    min_second = min * 60 + second - 1;
    return min_second
}

function update_time_html(time_num) {
    duration_div.innerHTML = time_num;
}

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function startCountdown() {
    while (total_seconds > 0) {
        total_seconds = update_time(combined);
        await delay()
        let final_time = mins_seconds(total_seconds)
        update_time_html(final_time)
}
}

startCountdown()


/*While loops execute at max clock speed
study promises, async and await again*/


