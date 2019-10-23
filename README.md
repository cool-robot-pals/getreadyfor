# getreadyfor

<img src="https://pbs.twimg.com/media/EHfga7kW4AIsO_5.jpg:large"/>

Source for <a href="https://twitter.com/readyforspoons">@readyforspoons</a> a bot that makes random fake (but disappointingly real) Brexit posters

## how

It'll fetch a random noun from a master list of nouns and then it make a webpage out of it, screenshot it and tweet it.

I recommend reading the code itself, (start at `app.js`!) it's pretty straightforward and simpler than that mouthful of an explanation!!

## more complex how

1. Clone this repo

2. Run `npm install` to get all the dependencies. This will take a while. While you wait, talk about how you're negotiating a better deal for Britain with the person closest to you.

3. Run `node` and you should get a link to `http://localhost:3000`, showing a massive disappointment. Browser support is very flaky.

4. To take screenies, run `node ./bin/screenshot.js`

5. To post to Twitter, you first need to make an app at <a href="apps.twitter.com">apps.twitter.com</a> (this is where the bot will post!! be careful) and get all four tokens (2 for the app 2 for the user). Then make a <a href="https://github.com/motdotla/dotenv">.env</a> file filling in the values you see in `./bin/tweet.js`. Then just run `node ./bin/tweet.js`

#### autoposting

The actual live <a href="https://twitter.com/readyforspoons">@readyforspoons</a> is in sync with this exact codebase, it's hosted in heroku, which has a free forever tier, and there's a scheduled process that runs `node ./bin/tweet.js` hourly
