let app = new Vue({
  el: '#container',
  conponents: ['head-menu-item', 'drawer-btn'],
  data: {
    //drawer
    drawers: {
      right: { id: 'right-drawer', isShow: false, icon: 'more_vert' },
      left: { id: 'left-drawer', isShow: false, icon: 'menu' }
    },
    //head-menu-item
    HeadMenuItems: [
      { text: 'item1', url: '#', icon: 'apps' },
      { text: 'item2', url: '#', icon: 'settings' }
    ],
    //ad-table
    tableData: {
      th: [
        'tr1', 'tr2', 'tr3', 'tr4', 'tr5', 'tr6', 'tr7', 'tr8', 'tr9'
      ],
      tr: [
        ['td1', 'td2', 'td3', 'td4', 'td5', 'td6', 'td7', 'td8', 'td9'],
        ['td1', 'td2', 'td3', 'td4', 'td5', 'td6', 'td7', 'td8', 'td9']
      ]
    },
  }
});
