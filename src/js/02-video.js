import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', lodash(savesTime, 1000));

function savesTime(data) {
    const timePause = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(`${timePause}`));
}

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(JSON.parse(currentTime));


