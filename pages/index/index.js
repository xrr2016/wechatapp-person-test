//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  startTest: function() {
    wx.navigateTo({
      url:"../question/question"
    })
    console.log(111)
  },
  onLoad: function () {
  }
})
