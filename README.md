# Lottie for MiniProgram
lottie 动画库适配小程序的版本。

> lottie 的相关介绍与动画生成方法等请参考[官方说明](https://github.com/airbnb/lottie-web)

> 依赖小程序基础库版本 >= 2.8.0 的环境

## 使用

可参考该代码片段：[https://developers.weixin.qq.com/s/ALhTdImM7jaR](https://developers.weixin.qq.com/s/ALhTdImM7jaR)。大致步骤如下：

1. 通过 npm 安装：
```
npm install --save lottie-miniprogram
```

2. 传入 canvas 对象用于适配
```
<canvas id="canvas" type="2d"></canvas>
```
```
import lottie from 'lottie-miniprogram'

Page({
  onReady() {
    wx.createSelectorQuery().select('#canvas').node(res => {
      const canvas = res.node
      lottie.setup(canvas)
    }).exec()
  }
})
```

3. 使用 lottie 接口
```
lottie.setup(canvas)
lottie.loadAnimation({
  ...
})
```

## 接口

目前提供两个接口：

#### lottie.setup(canvas)
需要在任何 lottie 接口调用之前调用，传入 canvas 对象

#### lottie.loadAnimation(options)
与原来的 [loadAnimation](https://github.com/airbnb/lottie-web/wiki/loadAnimation-options) 有些不同，支持的参数有：
* loop
* autoplay
* animationData
* path （只支持网络地址）
* rendererSettings.context （必填）

## 说明
* 本项目是以 npm 的方式依赖原 lottie-web 项目，若原项目有新版本，可直接改变依赖的版本号。
* 本项目依赖小程序基础库 2.8.0 里性能更好的 canvas 实现，由于还有些小问题没有正式开放，但目前用在此处暂无发现问题。
