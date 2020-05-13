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
async  function  getChannelInfo()  {
var  channelInfo  =  await  channelData.info("CHANNEL_NAME","API_KEY");
console.log(channelInfo);
}
getChannelInfo();
```
## Module
```javascript
.info(CHANNEL_NAME,API_KEY) //Fetch all available data from a YouTube Channel (Promise)
```
