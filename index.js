const axios = require("axios");

const getChannelInfo = function (ytUserName, API_KEY) {
  return new Promise((resolve, reject) => {
    let fetchURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet,status,brandingSettings,topicDetails&forUsername=${ytUserName}&key=${API_KEY}`;
    axios
      .get(fetchURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getChannelActivities = function (ytChannelID, API_KEY, maxResults) {
  return new Promise((resolve, reject) => {
    let maxData = 5;
    if (maxResults) {
      maxData = parseInt(maxResults);
    }
    let fetchURL = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails,snippet&channelId=${ytChannelID}&key=${API_KEY}&maxResults=${maxData}`;
    axios
      .get(fetchURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const listVideoDetails = function (videoID, API_KEY) {
  return new Promise((resolve, reject) => {
    if (videoID.constructor != Array) {
      reject("Video IDs must be an array");
    }
    let videoIDs = videoID.join();
    let fetchURL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,liveStreamingDetails,localizations,snippet,statistics,status,topicDetails&id=${videoIDs}&key=${API_KEY}`;
    axios
      .get(fetchURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const listChannelPlaylist = function (ytChannelID, API_KEY, maxResults) {
  return new Promise((resolve, reject) => {
    let maxData = 5;
    if (maxResults) {
      maxData = parseInt(maxResults);
    }
    let fetchURL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails,localizations,status&channelId=${ytChannelID}&maxResults=${maxData}&key=${API_KEY}`;

    axios
      .get(fetchURL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

module.exports = {
  info: getChannelInfo,
  activities: getChannelActivities,
  listVideoInfo: listVideoDetails,
  listPlaylists: listChannelPlaylist,
};
