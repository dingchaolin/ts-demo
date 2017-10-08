## 安装typings
- npm install typings -g


## 生成typings.json
- typings init

## 使用typings安装node模块
- typings install request --save

## 使用node模块
- import request = require("request");

## typings 查询
- typings search request

## 指定特殊的源
- typings install bluebird --source npm --save

## 指定某个提交版本
- typings install d3=github:DefinitelyTyped/DefinitelyTyped/d3/d3.d.ts#1c05872e7811235f43780b8b596bfd26fe8e7760 --global --save


## 指定特殊的版本
- typings install env~node@0.10 --global --save

## 查看版本信息
- typings info env~node --versions

