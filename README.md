# Doc2Png

> This project use node server and puppeteer, support transform microsoft office word to png

## Usage

1. install node & yarn
```
# install Volta to manage node version
$ curl https://get.volta.sh | bash
$ volta install node@14.17.4
$ volta install yarn
```

2. install project dependences
```
$ cd doc2png
$ yarn
```
3. start node server
```
$ cd packages/server
$ yarn build
$ yarn start
```
After start node server, you can visit `http://localhost:3000/doc2png?paperUrl=xxx` to convert doc or other office file.

Note: when the size of the image buffer returned by the interface is less than 20KB, please retry the request.

