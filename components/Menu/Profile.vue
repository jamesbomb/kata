<template>
  <div class="profile">
    <dropdown-menu class="profile__dropdown" menu-title="" icon="chevron" :menu-items="profileItems" />
  </div>
</template>

<style lang="scss">
.profile {
  display: block;
  background: yellow;
  border: 3px solid #fff;
  border-radius: 1.8rem;
  padding: 0.5rem 1.3rem;
  height: 1.5rem;
  background: url('@/assets/icons/user.svg') no-repeat 0 center;
  background-size: 2.5rem;

  .dropdown__children {
    left: -2.2rem;
  }
}

.profile__dropdown {
  position: relative;
  top: -2rem;
  right: -1.1rem;
}
</style>
<script>
import DropdownMenu from '../Menu/DropdownMenu.vue'

export default {
  name: 'Profile',
  components: {
    DropdownMenu
  },
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      profileItems: this.items
    }
  }
}
</script>
