// pages/flags/TODO.js
Page({

  /**
   * Page initial data
   */
  data: {
    headline: getApp().globalData.headline,
    notice: [
      '一天只有一次（不要手滑误触哦）',
      '上传的照片中需注明当天日期',
      '成功打卡将获得10金币',
      '上传照片将会展示给同一Flag的小伙伴并相互监督',
      '被举报过多的小伙伴会接受官方审核，审核发现问题的小伙伴会被给予一定的惩罚，各位小伙伴要当心哦^_^'
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id: options.id,
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

  }
})