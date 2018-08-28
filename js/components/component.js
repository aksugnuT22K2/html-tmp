Vue.component('head-menu-items', {
  props: ['menuItem'],
  template: `
    <li>
      <a :href="menuItem.url" class="btn">
        <i class="material-icons" v-if="menuItem.icon !== ''">{{ menuItem.icon }}</i>
        <span>{{ menuItem.text }}</span>
      </a>
    </li>`,
})

Vue.component('drawer-btn', {
  props: ['drawer'],
  template: `
    <div id="drawer-btn">
        <input type="checkbox" :id="drawer.id" style="display: none;" v-model="drawer.isShow">
        <label :for="drawer.id" id="open" class="btn-circle" :class="{checked: drawer.isShow}">
          <i class="material-icons">{{ drawer.icon }}</i>
        </label>
    </div>`,
})

Vue.component('m-table', {
  props: {tableData: Object, max: {type: Number, default: 100}},
  template: `
    <table class="table" border="1">
      <tr>
          <th v-for="(item, key) in tableData.th" v-if="key < max" :key="key" :title="item">{{ item }}</th>
      </tr>
      <tr v-for="(tr, key) in tableData.tr">
          <td v-for="(item, key, index) in tr" v-if="key < max" :title="item"> {{ item }}</td>
      </tr>
  </table>`
})