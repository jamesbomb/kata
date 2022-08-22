<template>
  <div class="dropdown__wrapper">
    <span class="dropdown__title" v-bind:style="{ 'background-image': `url(${require(`@/assets/icons/${icon}.svg`)})` }"
      @click="dropdownOpen">{{
          menuTitle
      }}</span>
    <div v-if="show" class="dropdown__children">
      <ul class="dropdown__list">
        <li v-for="item in items" :key="item.name">
          <a href="">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DropdownMenu',
  props: [
    "menuTitle",
    "icon"
  ],
  data: function () {
    return {
      show: false,
      items: [{ name: 'Europa' }, { name: 'Asia' }, { name: 'Africa' }, { name: 'America' }, { name: 'Oceania' }]
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
