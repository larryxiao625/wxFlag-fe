// pages/flags/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    UID: "",
    name: "",
    progress: "",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      UID: options.id,
      name: options.name,
      progress: options.progress
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  submit: function(){
    wx.navigateTo({
      url: '../sign/sign?UID='+this.data.UID,
    })
  }
})