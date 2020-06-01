const Twit = require('twit');

const {BOT_CONSUMER_KEY, BOT_CONSUMER_SECRET, BOT_ACCESS_TOKEN, BOT_ACCESS_TOKEN_SECRET} = process.env;


const t = new Twit({
    consumer_key: BOT_CONSUMER_KEY,
    consumer_secret: BOT_CONSUMER_SECRET,
    access_token: BOT_ACCESS_TOKEN,
    access_token_secret: BOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,  // * optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // * optional - requires SSL certificates to be valid.
});


const TWITTER_USER = 'sharifElkassed'
const BASE_URL = 'https://twitter.com'
const TWEET_ID = '1260004405258182657'

const RT_URL = `${BASE_URL}/${TWITTER_USER}/status/${TWEET_ID}`;

//
//  * tweet 'hello world!'
//
t.post('statuses/update', { status: `hello bot! ${RT_URL}` }, function (err, data, response) {
    console.log(data)
})



