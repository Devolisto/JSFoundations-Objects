/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
// Arrow function 
const getChannelName = (channel) => channel.name; 

// console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
// Arrow function 
const numberOfVideos = (channel) => channel.videos.length;

// function numberOfVideos(channel) {
//   // Your code here
// }
// console.log(numberOfVideos(channels[0]))

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  let there = false;
  channel.videos.forEach((video) => {
    if (video.title.toLowerCase() === videoTitle.toLowerCase()){
      there = true;
    };
  });
  return there;

  // Your code here
  // const includesTitle = videoTitle => videoTitle === channel[1];
  // const titles = channel.some(includesTitle);  
  // return titles;

}

// function channelHasVideo(videoTitle, channel) {
//   // Your code here
// }
// console.log(channelHasVideo("The Universal S", channels[0]));
// console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
// Arrow function 
const getChannelByName = (channelName, channels) => {
  // Your code here
  const name = channels.find(channel => channel.name === channelName);
  return name;
}
// function getChannelByName(channelName, channels) {
//   // Your code here
//   const name = channels.find(channel => channel.name === channelName);
//   return name;
// }

// function getChannelByName(channelName, channels) {
//   // Your code here
// }
// console.log(getChannelByName("PowerfulJRE", channels))

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
// Arrow Function
// const getChannelByVideoTitle = (videoTitle, channels) => {
//   // Your code here
//   const title = channels.find(channel => channel.videos.some(video => video.title.includes(videoTitle)));
//   return title;
// }

const getChannelByVideoTitle = (videoTitle, channels) => {
  // Your code here
    const title = channels.find(channel => channel.videos.some(video => video.title.includes(videoTitle)));
    return title;
}

// function getChannelByVideoTitle(videoTitle, channels) {
//   // Your code here
//   const title = channels.find(channel => channel.videos.some(video => video.title.includes(videoTitle)));
//   return title;
// }

// function getChannelByVideoTitle(videoTitle, channels) {
//   // Your code here
//     const title = channels.find(channel => channel.videos.some(video => video.title.includes(videoTitle)));
//     return title;
// }
// console.log(channelHasVideo("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/

const searchChannels = (query, channels) => {
  // Your code here
  const arr = channels.filter((channel) => channel.name.includes(query) || channel.description.includes(query));
   return arr;
}


//hi

// function searchChannels(query, channels) {
//   // Your code here
// }
// console.log(searchChannels("the", channels))

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
