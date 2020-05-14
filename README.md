# YouTube Channel Data

This package lets you fetch YouTube data of any channel **without having to get authenticated** by the Channel owner.

## Note

**functionalities will be updated on a daily basis. Stay tuned for more**

## Installation

**Install from NPM**

```
npm i yt-channel-data
```

## Requirements

The following requirements apply to YouTube Data API requests:

1. Create a new project or use an existing project in [Google developer console](https://console.developers.google.com/)
2. Enable YouTube Data v3 API for the project
3. Copy the API Key

## Usage

```javascript
const channelData = require("yt-channel-data");

async function getChannelInfo() {
  var channelInfo = await channelData.info("CHANNEL_NAME", "API_KEY");
  console.log(channelInfo);
}
getChannelInfo();

async function getActivities() {
  var channelInfo = await channelData.activities("CHANNEL_ID", "API_KEY", 20);
  console.log(channelInfo);
}
getActivities();

async function getVideoInfo() {
  let videoIDs = ["jrMsWztL1n8", "Cm2dczXpBG0", "Jk7rliZpuSs"];
  var videoInfo = await channelData.listVideoInfo(videoIDs, "API_KEY");
  console.log(videoInfo);
}
getVideoInfo();

async function getChannelPlaylist() {
  var playlists = await channelData.listPlaylists("CHANNEL_ID", "API_KEY", 20);
  console.log(playlists);
}
getChannelPlaylist();
```

## Module

```javascript
.info(CHANNEL_NAME,API_KEY) //Fetch all available data from a YouTube Channel (Promise)
.activities(CHANNEL_ID,API_KEY,MAX_RESULTS) // Fetch all activities of a given CHANNEL_ID [recived from info module] and an optional MAX_RESULTS parameter. Default is 5 (Promise)
.listVideoInfo(VIDEO_IDS,API_KEY) //Video IDs must be an array
.listPlaylists(CHANNEL_ID,API_KEY,MAX_RESULTS) // MAX_RESULTS default value is 5, if not specified.
```
