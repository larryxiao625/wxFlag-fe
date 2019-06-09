//app.js
App({
  onLaunch: function() {
    var that = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'wxflag-5fsl3',
        traceUser: true,
      })
      wx.cloud.callFunction({
        name: "login",
        data: {},
        success: res => {
          console.log("login调用成功" + res.result.openid),
            that.globalData.openid = res.result.openid
        }
      })

    }
  },
  globalData: {
    userInfo: {},
    openid: '',
    /*
    user: {
      "userID": char,     //用户名
      "introduce": char,  //用户简介
      "head": char,       //头像图片所存URL
      "flagNumber": int,  //完成FLAG数量
      "gold": int,        //金币
      "signCard": int,    //签到卡
      "changeCard": int,  //改名卡
      "chatCard": int,    //私信卡
    },*/
    headline: 'Flag日常',
  }

})