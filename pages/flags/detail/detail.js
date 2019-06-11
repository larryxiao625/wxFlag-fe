// pages/flags/detail/detail.js
const app=getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    UID: "",
    name: "",
    progress: "",
    isSignToday: "",
    description: "",
    dynamic:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      UID: options.id,
      name: options.name,
      progress: options.progress,
      isSignToday: options.status,
      description: options.description
    })
    console.log(this.data)
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
    var that=this;
    var dynamic=new Array();
    wx.request({
      url: 'http://localhost:7001/api/v1/flag/getDynamic',
      method:'POST',
      data: {
        UID: that.data.UID
      },
      success: res=>{
        console.log(res.data.errmsg);
        for(var i=0;i<res.data.errmsg.length;i++){
          var imgPath = new Array();
          var tempBase64List = JSON.parse(res.data.errmsg[i].images);
          console.log(tempBase64List.length)
          for (var j = 0; j < tempBase64List.length;j++){
            imgPath.push("data:image/png;base64," + tempBase64List[j])
          };
          console.log(imgPath);
          dynamic.push({
            comment: res.data.errmsg[i].comment,
            imgPath: imgPath,
            name: res.data.errmsg[i].username,
            time: res.data.errmsg[i].time,
            avatar: res.data.errmsg[i].avatar
          })
        };
        that.setData({
          dynamic: dynamic
        })
        console.log(dynamic)
      }
    })
    
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
  },
  join: function(){
    var that=this;
    wx.request({
      url: 'http://localhost:7001/api/v1/flag/join',
      method: 'POST',
      data: {
        UID: that.data.UID,
        openid: app.globalData.openid
      },
      success: res=>{
        if(res.data.errcode===0){
          that.setData({
            isSignToday: 'todo'
          })
        }
      }
    })
  }
})