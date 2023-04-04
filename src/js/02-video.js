// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const LOCAL_STORAGE_KEY = "videoplayer-current-time";
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const onPlay = function(data) {
//     localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);

// player
//     .setCurrentTime(currentTime)
//     .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });