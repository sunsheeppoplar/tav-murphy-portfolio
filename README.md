# tav-murphy-portfolio

### Production

This site lives at [http://wwww.tavnermurphy.com](http://wwww.tavnermurphy.com)

### Heroku

#### Remote

The remote for the production host is `https://git.heroku.com/tav-murphy-profile.git`

#### Rebuilding NPM

In case you need to rebuild the `node_modules` on Heroku, you'll need to make sure that the `NODE_MODULES_CACHE` on Heroku is set to false. 

```
heroku config:set NODE_MODULES_CACHE=false
```
More [here](https://devcenter.heroku.com/articles/nodejs-support#cache-behavior)

#### How to Build Production Code

Once development is ready, you can push directly to Heroku. 

```
git push heroku master
```
You can also push other branches to Heroku for whatever use case comes up (e.g. testing) as there is no separate staging site as of October 7th, 2019.

```
git push heroku dev:master
```

The `postinstall` key within the `scripts` section of the `package.json` is how Heroku deploys Node.js projects. You can learn more [here](https://devcenter.heroku.com/articles/node-best-practices)

#### Major Dependencies

- [Lodash](https://github.com/lodash/lodash)
- [React Animate Height](https://github.com/Stanko/react-animate-height)
- [React Player](https://github.com/CookPete/react-player)
- [React Scroll](https://github.com/fisshy/react-scroll)