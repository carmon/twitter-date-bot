const config = require("dos-config");
const Twitter = require("twitter-lite");

// Twitter client
const client = new Twitter({
  subdomain: "api",
  consumer_key: "YOUR_CONSUMER_KEY", // from Twitter.
  consumer_secret: "YOUR_CONSUMER_SECRET", // from Twitter.
  access_token_key: "YOUR_ACCESS_TOKEN_KEY", // from your User (oauth_token)
  access_token_secret: "YOUR_ACCESS_TOKEN_SECRET" // from your User (oauth_token_secret)
});

// Tweet functions
const ifPlural = (p, v) => `${v > 1 ? p : ""}`;
const getTweetOptions = days => ({
  status: `Falta${ifPlural("n", days)} ${days} día${ifPlural("s", days)}.`
});

// Create target date from config
const { year, month, day } = config.target;
const decemberTen = new Date(year, month - 1, day);

// Date function
const getDaysLeft = target =>
  Math.ceil((target - Date.now()) / (1000 * 60 * 60 * 24));

const daysLeft = getDaysLeft(decemberTen);
if (daysLeft > 0) {
  // If condition is yes, connect to Twitter account and tweet
  client
    .get("account/verify_credentials")
    .then(_ => { // Avoid using twitter API results
      console.log("Verificado");
      client
        .post("statuses/update", getTweetOptions(left))
        .catch(console.error);
    })
    .catch(console.error);
}

module.exports = { getDaysLeft };