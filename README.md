# threads-wrapper
API wrapper that allows developers to pull data from the new Threads social media platform.

# Installation
You can use NPM to install this package in your project. Use the following command to install the package!
```npm
npm install threads-wrapper
```
After installation, require the package in your project by utilizing the follow lines of code:
```javascript
const Threads_API = require("threads-wrapper");
let threads = new Threads_API();
```

# Usage Examples
```javascript
// Getting details on a Threads user and outputting it to the console

const getUserDetails = async (username) => {
    let userInfo = await threads.getUserData(username);
    console.log(
        "",
        `Name: ${userInfo.full_name}\n`,
        `Bio: ${userInfo.biography}\n`,
        `ID: ${userInfo.user_id}\n`,
        `Followers: ${userInfo.follower_count}\n`,
        `Website: ${userInfo.bio_links[0].url}`
    );
}
getUserDetails("Gisgar3");
```
```javascript
// Retrieve a user's threads and outputting *just* the caption (if one exists)

const getUserThreads = async (username) => {
    let userThreads = await threads.getUserThreads(username);
    for (let num in userThreads) {
        if (userThreads[num].thread_items[0].post.caption) {
            console.log(`${userThreads[num].thread_items[0].post.caption.text}\n`);
        }
    }
}
getUserThreads("Gisgar3");
```
