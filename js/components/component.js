Vue.component('head-menu-items', {
  props: ['menuItem'],
  template: `
    <li>
      <a :href="menuItem.url" class="btn">
        <i class="material-icons" v-if="menuItem.icon !== ''">{{ menuItem.icon }}</i>
        {{ menuItem.text }}
      </a>
    </li>`
});

Vue.component('drawer-btn', {
  props: ['drawer'],
  template: `
    <div id="drawer-btn">
        <input type="checkbox" :id="drawer.id" style="display: none;" v-model="drawer.isShow">
        <label :for="drawer.id" id="open" class="btn-circle" :class="{checked: drawer.isShow}">
          <i class="material-icons">{{ drawer.icon }}</i>
        </label>
    </div>`
});
