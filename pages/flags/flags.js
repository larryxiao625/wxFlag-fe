// pages/flags/flags.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline: getApp().globalData.headline,
    flags: [
      {
        id: 'note',
        name: '手帐',
        progress: 6,
        statusText: '1',
        status: 'unconfirmed'
      }, 
      {
        id: 'run',
        name: '跑步',
        progress: 7,
        statusText: '2',
        status: 'unconfirmed'
      }, 
      {
        id: 'write',
        name: '练字',
        statusText: '3',
        status: 'unconfirmed'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // TODO：等待后台API获取用户各个打卡项目的状态
    // 获取完成之后setData更新data内数组
    this.setData({
      'flags[0].status': 'todo',
      'flags[1].status': 'done',
      'flags[2].status': 'join'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})