// pages/flags/sign/sign.js
const fileSystemManager = wx.getFileSystemManager();
const app=getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    imgPath: [],
    imgBase64: [],
    comment: "",
    UID: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      UID: options.UID
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
  chooseImg: function(){
    var that=this;
    wx.chooseImage({
      count: 9,
      success: function(res) {
        const tempFilePath=res.tempFilePaths;
        if((that.data.imgPath.length+res.tempFilePaths.length)>9){
          wx.showModal({
            title: '照片数量超出',
            content: '最多选择九张照片',
            showCancel: false
          })
        }else if(that.data.imgPath.length===0){
          that.setData({
            imgPath: tempFilePath
          })
        }else{
          that.setData({
            imgPath: that.data.imgPath.concat(tempFilePath)
          })
        }
        console.log(that.data.imgPath);
        var imgBase64=new Array();
        for(var i=0;i<tempFilePath.length;i++){
          fileSystemManager.readFile({
            filePath: tempFilePath[i],
            encoding: 'base64',
            success: res=>{
              imgBase64.push(res.data)
            }
          });
        }
        console.log(imgBase64)
        that.setData({
          imgBase64: imgBase64,
        })
      }
    })
  },
  removeImg: function(event){
    var that=this;
    console.log(event);
    wx.showModal({
      title: '删除',
      content: '确定要删除这张照片吗！',
      showCancel: true,
      success: res=>{
        if(res.confirm){
          let tempImgPath=that.data.imgPath;
          let tempBase64=that.data.imgBase64;
          console.log(tempBase64);
          console.log(tempImgPath);
          tempImgPath.splice(event.target.dataset.index, 1);
          tempBase64.splice(event.target.dataset.index, 1);
          that.setData({
            imgPath: tempImgPath,
            imgBase64: tempBase64
          })
          console.log(that.data.imgBase64);
        }
      }
    })
  },
  setComments: function(event) {
    var that=this;
    console.log(event.detail.value);
    that.setData({
      comment: event.detail.value
    })
  },
  submit: function() {
    var that=this;
    console.log(this.data.comment);
    wx.showModal({
      title: '提交',
      content: '确定提交吗',
      success: res=>{
        if(res.confirm){
          wx.request({
            url: 'http://localhost:7001/api/v1/flag/sign',
            method: 'POST',
            data:{
              openid: app.globalData.openid,
              UID: that.data.UID,
              pic: JSON.stringify(that.data.imgBase64),
              comment: that.data.comment
            }
          });
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }
})