// pages/user/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coin: '200',
    coinSrc: '../img/me_shop_coin.svg',
    goods: [
      {
        name: '私信卡',
        src: '../img/me_shop_mail.svg',
        price: '30',
        inventory: '4'
      },
      {
        name: '请假卡',
        src: '../img/me_shop_leave.svg',
        price: '50',
        inventory: '2'
      },
      {
        name: '改名卡',
        src: '../img/me_shop_changeName.svg',
        price: '100',
        inventory: '1'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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