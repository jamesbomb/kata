<template>
  <div class="dropdown__wrapper">
    <span class="dropdown__title" :style="{ 'background-image': `url(${require(`@/assets/icons/${icon}.svg`)})` }"
      @click="dropdownOpen">{{
          menuTitle
      }}</span>
    <div v-if="show" class="dropdown__children">
      <ul class="dropdown__list">
        <li v-for="item in menuItems" :key="item.name">
          <a :href=item.link>{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    menuTitle: {
      type: String
    },
    icon: {
      type: String
    },
    menuItems: {
      type: Array
    }
  },
  data: function () {
    return {
      show: false,
    }
  },
  methods: {
    dropdownOpen() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="scss">
.dropdown__wrapper {
  position: relative;
}

.dropdown__title {
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 1.5rem;
  background-size: 1.5rem;
  padding-bottom: 0.3rem;
}

.dropdown__list {
  list-style-type: none;

  li {
    padding: 0.3rem;
  }

  a {
    text-decoration: none;
  }
}

.dropdown__children {
  position: absolute;
  top: 2.5rem;
  background: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem;
}
</style>
