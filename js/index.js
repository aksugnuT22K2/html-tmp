let app = new Vue({
  el: '#container',
  conponents: ['head-menu-item', 'drawer-btn'],
  data: {
    //drawer
    drawers: {
      right: { id: 'right-drawer', isShow: false, icon: 'menu' },
      left: { id: 'left-drawer', isShow: false, icon: 'menu' }
    },
    //head-menu-item
    HeadMenuItems: [
      { text: 'item1', url: '#', icon: '' },
      { text: 'item2', url: '#', icon: '' }
    ]
  }
});
