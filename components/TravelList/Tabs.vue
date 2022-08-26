
  <template>
  <div>
    <div class="tabs">
      <ul>
        <li :key="tab.name" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs__details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Tab from '../TravelList/Tab.vue'

export default {
  name: 'Tabs',
  components: { Tab },
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>

<style lang="scss">
.tabs {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: stretch;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  flex: 1 1 100%;

  a {
    font-size: 1.7rem;
  }

  ul {
    align-items: center;
    border-bottom: 2px solid #efefef;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 3px;
  }

  li {
    display: block;
  }

  li.is-active a {
    // border-bottom-color: red;
    // color: red;
  }

  .is-active a:after {
    content: "";
    height: 0.25rem;
    background: red;
    position: absolute;
    z-index: 1;
    top: 4.7rem;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 1rem;
  }

  a {
    align-items: center;
    border-bottom: 1px solid #efefef;
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.8em 1em;
    vertical-align: top;
    position: relative;

    cursor: pointer;
    text-decoration: none;
    transition: none 86ms ease-out;
  }

}

.tabs__details {
  font-size: 1rem;
  flex: 1 1 100%;
  padding-top: 2rem;
  padding: 3rem 0;
  border-bottom: 2px solid #efefef;

  &>div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  .tabs__details {
    &>div {
      align-items: flex-start;
    }
  }
}
</style>
