const HeadMenuItems = {
  props: ['menuItem'],
  template: `
    <li>
      <a :href="menuItem.url" class="btn">
        {{ menuItem.text }}
      </a>
    </li>`
};
new Vue({
  el: '#head-menu',
  components: {
    'head-menu-items': HeadMenuItems
  },
  data: {
    items: [{ text: 'item1', url: '#' }, { text: 'item2', url: '#' }]
  }
});

let drawerBtn = Vue.component('drawerBtn', {
  props: ['icon', 'drawer'],
  template: `
    <div id="drawer-btn">
        <input type="checkbox" :id="drawer.id" v-model="drawer.isShow" style="display: none;">
        <label :for="drawer.id" id="open" class="btn-circle" @click.stop="clog(drawer.isShow)">
          <i class="material-icons">{{ icon }}</i>
        </label>
    </div>
  `,
  methods: {
    clog: function(arg) {
      console.log(arg);
    }
  }
});
new Vue({
  el: '#container',
  components: { drawerBtn },
  data: {
    icon: 'menu',
    drawer: {
      right: { id: 'right-drawer', isShow: false },
      left: { id: 'left-drawer', isShow: false }
    }
  }
});
