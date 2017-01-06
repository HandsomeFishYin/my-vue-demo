# my-vue-demo

npm i

npm run build

npm run dev

open http://localhost:7777/app/index/index.html


注：webpack.prod.config.js配置 ，将vue的style提取 注入html中，我的package.json和dev-server里面配置的是用 webpack.dev.config配置的，
具体可查看文档，当前配置的是app/style/main.scss 编译成css文件去 output目录下，并自动注入生成的html文件中。

#webpack.dev.conf是从scss里面取样式，webpack.prod.conf是从vue里面取样式


PS: 相当实用文档 http://www.cnblogs.com/linfangshuhellowored/p/5657285.html