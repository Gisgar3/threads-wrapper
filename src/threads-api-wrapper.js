/*
THREADS-WRAPPER
DEVELOPED BY GAVIN R. ISGAR 2023
*/
const constants = require("./constants.json");

class ThreadsAPIWrapper {
    retrieveUserId = async (handle) => {
        try {
            const req_body = `route_urls[0]=/@${handle}&routing_namespace=barcelona_web&__user=0&__a=1&__req=3&__hs=19544.HYP%3Abarcelona_web_pkg.2.1..0.0&dpr=1&__ccg=UNKNOWN&__rev=1007796220&__s=gq820m%3A5v3kcq%3A8jl1xc&__hsi=7252700623360566289&__dyn=7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE465o-cw5Mx62G3i0Bo7O2l0Fwqo31wnEfovwRwlE-U2zxe2Gew9O22362W2K0zK5o4q0GpovU1aUbodEGdwtU2ewbS1LwTwNwLw8O1pwr82gxC&__csr=sAmjlBrCg016kA7ofA11xS03F-3N0aqq4ErOwD2i63V34jxT4yoy48txo82yx1wt5y8KidOwDwKUNph1ES4ogxcm0J8hwogAb8b2n1Y0xo5h0gQcg3tDhayGxVgMo4o0wC0wc23a9zggw&__comet_req=29&lsd=R-hc0Ljq9ECJBg2HKvMaiI&jazoest=21776&__spin_r=1007796220&__spin_b=trunk&__spin_t=1688650954&__jssesw=1`;
            const request = await fetch(constants.urls.ajax_url, {
                method: "POST",
                headers: {
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Origin": "https://www.threads.net",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "User-Agent": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.199",
                    "X-Asbd-Id": "129477",
                    "X-Fb-Lsd": "R-hc0Ljq9ECJBg2HKvMaiI"
                },
                body: req_body
            });
            const responseData = await request.text();
            const parsedData = JSON.parse(responseData.slice(9));
            return Object.values(parsedData.payload.payloads)[0].result.exports.rootView.props.user_id;
        }
        catch (error) {
            console.error(error);
        }
    };

    getUserData = async (handle) => {
        try {
            const userId = await this.retrieveUserId(handle);
            const req_body = `av=0&__user=0&__a=1&__req=1&__hs=19544.HYP%3Abarcelona_web_pkg.2.1..0.0&dpr=1&__ccg=UNKNOWN&__rev=1007796220&__s=lmyr8y%3At9v7zr%3Advu3ss&__hsi=7252689782200078640&__dyn=7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE465o-cw5Mx62G3i0Bo7O2l0Fwqo31wnEfovwRwlE-U2zxe2Gew9O22362W2K0zK5o4q0GpovU1aUbodEGdwtU2ewbS1LwTwNwLw8O1pwr82gxC&__csr=sAmjlBrCg016kA7ofA11xS03F-3N0aqq4ErOwD2i63V34jxT4yoy48txo82yx1wt5y8KidOwDwKUNph1ES4ogxcm0J8hwogAb8b2n1Y0xo5h0gQcg3tDhayGxVgMo4o0wC0wc23a9zggw&__comet_req=29&lsd=LFEwwEJ6qDWEUM-79Hlmgq&jazoest=21811&__spin_r=1007796220&__spin_b=trunk&__spin_t=1688648430&__jssesw=2&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaProfileRootQuery&variables=%7B%22userID%22%3A%22${userId}%22%7D&server_timestamps=true&doc_id=23996318473300828`
            const request = await fetch(constants.urls.graphql_api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Origin": "https://www.threads.net",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "User-Agent": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.199",
                    "X-Asbd-Id": "129477",
                    "X-Fb-Friendly-Name": "BarcelonaProfileRootQuery",
                    "X-Fb-Lsd": "LFEwwEJ6qDWEUM-79Hlmgq",
                    "X-Ig-App-Id": "238260118697367"
                },
                body: req_body
            });
            const responseData_JSON = await request.json();
            // Note: There is an "id" key in the returning JSON, but I do not know if it'll be used by Threads in the future.
            responseData_JSON.data.userData.user.user_id = userId;
            return responseData_JSON.data.userData.user;
        }
        catch (error) {
            console.error(error);
        }
    }

    getUserThreads = async (handle) => {
        try {
            const userId = await this.retrieveUserId(handle);
            const req_body = `av=0&__user=0&__a=1&__req=2&__hs=19544.HYP%3Abarcelona_web_pkg.2.1..0.0&dpr=1&__ccg=EXCELLENT&__rev=1007796220&__s=fww7jc%3A5v3kcq%3Aziaogb&__hsi=7252710884314883303&__dyn=7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE465o-cw5Mx62G3i0Bo7O2l0Fwqo31wnEfovwRwlE-U2zxe2Gew9O22362W2K0zK5o4q0GpovU1aUbodEGdwtU2ewbS1LwTwNwLw8O1pwr82gxC&__csr=sAmjlBrCg016kA7ofA11xS03F-3N0aqq4ErOwD2i63V34jxT4yoy48txo82yx1wt5y8KidOwDwKUNph1ES4ogxcm0J8hwogAb8b2n1Y0xo5h0gQcg3tDhayGxVgMo4o0wC0wc23a9zggw&__comet_req=29&lsd=r5RJOu615LuZ1Njky3OOy4&jazoest=21801&__spin_r=1007796220&__spin_b=trunk&__spin_t=1688653343&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaProfileThreadsTabQuery&variables=%7B%22userID%22%3A%22${userId}%22%7D&server_timestamps=true&doc_id=6232751443445612`;
            const request = await fetch(constants.urls.graphql_api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Origin": "https://www.threads.net",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "User-Agent": "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.199",
                    "X-Asbd-Id": "129477",
                    "X-Fb-Friendly-Name": "BarcelonaProfileRootQuery",
                    "X-Fb-Lsd": "LFEwwEJ6qDWEUM-79Hlmgq",
                    "X-Ig-App-Id": "238260118697367"
                },
                body: req_body
            });
            const responseData = await request.json();
            return responseData.data.mediaData.threads;
        }
        catch (error) {
            console.error(error);
        }
    }
}
module.exports = ThreadsAPIWrapper;