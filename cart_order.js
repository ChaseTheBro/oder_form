var app = new Vue({
    el: '#shop',
    data: {
      shop_name: 'BLLIZARD',
      seller_name: 'NETEASE',
      message: 'HearthStone/炉石 经典卡包',
      properties: [
        { text: '经典卡包：60' },
        { text: '打开卡包收获快乐' },
        { text: '每包至少包含一张稀有品质卡牌' }
      ],
      price: 388,
      status: '正在配送中',
      J_Exclude: {
        display: 'none'
      }
    },
  })