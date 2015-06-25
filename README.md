#LunarCalendar

基于 [electron](https://github.com/atom/electron) + [menubar](https://github.com/maxogden/menubar) + [react](https://github.com/facebook/react) + [materialize](https://github.com/Dogfalo/materialize) 
构建的`工具栏日历应用`，适用于Mac，Windows，Linux平台。


日历数据由 [LunarCalendar](https://github.com/zzyss86/LunarCalendar) 提供。


![lc](http://i1.tietuku.com/6cc696c379811560.gif)

## 开发

依赖于node.js环境，请预先安装

```
git clone https://git.oschina.net/sinceow/LunarCalendar.git lc

cd lc

#安装依赖
npm install

#利用Gulp构建项目并 Watch
npm start

#本地测试
npm run-script electron

# osx 生成
npm run-script build

# win32 生成
npm run-script build-win
```