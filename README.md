这是一个webpack跟jquery、jquery插件配合的一个示例项目。
虽然现在react,vue,ng胜行的今天，jquery还是现在开发不可
缺少的优秀库，好好的利用jquery插件可以起到事半功倍的效果。
而现最流利的模块化开发利器是webpack，但是对于第三方的jquery插件
很多并不是标准的模块化文件，于是需要一定的配置来搭配一个jquery的开发环境,
这个示例工程随便在jQuery插件库http://www.jq22.com/
选了二个插件做示范，具体效果用浏览器打开index.html查看。
注：最近看到还有人在fork这个项目，我看了下如果直接npm install，是打包不起来的，应该是版本问题，麻烦npm install后再执行如下步骤:
1. npm install -g webpack@1.13.2
2. cnpm install --save-dev webpack@1.13.2