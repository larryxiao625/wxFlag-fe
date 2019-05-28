// pages/flags/JOIN.js
Page({

  /**
   * Page initial data
   */
  data: {
    headline: getApp().globalData.headline,
    num: 233,
    description: '不限字数，不限中英，描红临摹皆可',
    requirements: [
      '作品需注明当天日期',
      '每日打卡将增加10金币',
      '若超时未打卡则本周期打卡收获经验作废',
      '上传照片将会展示给同一Flag的小伙伴并接受相应监督',
      '若是被举报过多且被官方审核出问题会被给予一定的惩罚^_^'
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
      src: './img/add_' + options.id + '.jpg'
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