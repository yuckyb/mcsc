Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://s1.st.meishij.net/r/50/123/6030800/s6030800_155153138189901.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552301262573&di=b6a3698572da61d87e1b484d06793120&imgtype=0&src=http%3A%2F%2Fpic18.nipic.com%2F20120206%2F5512531_135822699000_2.jpg',
      'https://s1.st.meishij.net/r/106/232/3995606/s3995606_154963731655889.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imgWidth: 0, imgHeight: 0,
    note: [
      {
        title: '案例名称',

        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_176CFE51B6710715B1BBBEF2F86ACB0C.jpg',
      },
      {
        title: '你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
      },
      {
        title: '红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
      },
      {
        title: '案例名称',
        url: 'http://zq.jhcms.cn/attachs/photo/201711/20171130_9E39DA252E3946BE36218D85876C4AB4.jpg',
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },

      {
        title: '案例名称',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72'
      },
      {
        title: '案例名称',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg'
      },
      {
        title: '案例名称',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg'
      }
    ]
  },

  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})