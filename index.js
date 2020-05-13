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

module.exports = {
  info: getChannelInfo,
};
