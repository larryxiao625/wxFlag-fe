// pages/user/users.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline: getApp().globalData.headline,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    div: [{
      src: './img/me_index_mail.svg',
      url: './mailbox/mailbox',
      text: '私信收发'
    }, {
      src: './img/me_index_shop.svg',
      url: './shop/shop',
      text: '商城',
    }, {
      src: './img/me_index_settings.svg',
      url: './settings/settings',
      text: '设置'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res => {
        console.log(res);
        app.globalData.userInfo = res.userInfo
        app.globalData.hasUserInfo = true
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        wx.cloud.callFunction({
          name: "login",
          data: {},
          success: res => {
            console.log("login调用成功" + res.result.openid);
            wx.request({
              url: 'http://localhost:7001/api/v1/users/login',
              method: 'POST',
              data: {
                'openid': res.result.openid,
                'userName': app.globalData.userInfo.nickName
              },
              success: res => {
                console.log(res);
                wx.downloadFile({
                  url: app.globalData.userInfo.userInfo.avatarUrl,
                  success: res => {
                    if (res.statusCode === 200) {
                      wx.uploadFile({
                        url: 'http://localhost:7001/api/v1/users/uploadAvatar',
                        filePath: res.tempFilePath,
                        name: app.globalData.openid+".jpeg",
                      })
                    }
                  }
                })
              },
              fail: res => {
                console.log(res)
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 获取用户头像
   */
  getUserInfo: function(e) {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        app.globalData.hasUserInfo = true
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        wx.cloud.callFunction({
          name: "login",
          data: {},
          success: res => {
            console.log("login调用成功" + res.result.openid);
            wx.request({
              url: 'http://localhost:7001/api/v1/users/login',
              method: 'POST',
              data: {
                'openid': res.result.openid,
                'userName': app.globalData.userInfo.nickName
              },
              success: res => {
                console.log(res)
              },
              fail: res => {
                console.log(res)
              }
            })
          }
        })
      },
      fail: res => {
        wx.showModal({
          content: '请授权以保证正常使用',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        });
      }
    })
  }
})