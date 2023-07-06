# threads-wrapper
[![NPM page][npm-src]][npm-href] [![Git license][git-src]][git-href]  
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

# Current list of functions
`retrieveUserId(username: String)`: Used to retrieve a user's Threads ID by username. Primarily used in other internal functions.

`getUserData(username: String)`: Get a user's profile data by username. **Returns JSON**  

`getUserThreads(username: String)`: Get all threads from a user by username. **Returns JSON**

[npm-src]: https://img.shields.io/npm/v/threads-wrapper?style=for-the-badge&logo=npm&labelColor=black&color=purple
[npm-href]: https://www.npmjs.org/package/threads-wrapper

[git-src]: https://img.shields.io/github/license/Gisgar3/threads-wrapper?style=for-the-badge&logo=GitHub&labelColor=black&color=blue
[git-href]: https://github.com/Gisgar3/threads-wrapper/blob/main/LICENSE
