<template>
  <section id="menu" class="menu">
    <div class="menu__icon" @click="toggleMenu"></div>
    <nav class="menu__nav" :class="{ 'menu__nav--open': this.menuOpen }">
      <ul>
        <li>
          <dropdown-menu menu-title=" Viaggi" icon="chevron" :menu-items="places" />
        </li>
        <li>
          <NuxtLink to="#">Come funziona</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Fasce d'età</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Offerte</NuxtLink>
        </li>
        <li class="highlighted">
          <NuxtLink to="#">Turni confermati</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">FAQ</NuxtLink>
        </li>
        <li>
          <Profile :items="profileLinks" />
        </li>
      </ul>
    </nav>
  </section>
</template>


<script>
import Profile from "../Menu/Profile.vue";
import DropdownMenu from '../Menu/DropdownMenu.vue';

export default {
  name: 'Menu',
  components: { Profile, DropdownMenu },
  props: {
    items: {
      type: Array
    },
    profileItems: {
      type: Array
    }
  },
  data() {
    return {
      show: false,
      places: this.items,
      profileLinks: this.profileItems,
      menuOpen: false,
      isOpened: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.moveMenu()
    },
    moveMenu() {
      const newParent = document.getElementsByClassName("header")[0];
      const oldParent = document.getElementsByClassName('menu')[0];
      const menu = document.getElementsByClassName("menu__nav")[0];
      if(!this.isOpened) {
        while (oldParent.childNodes.length > 1) {
          newParent.appendChild(oldParent.childNodes[2]);
        }
        this.isOpened = true
      } else {
        while (oldParent.childNodes.length > 2) {
          oldParent.appendChild(newParent.childNodes[3]);
        }
        this.isOpened = false
      }
    }
  },
  computed: {
    //   console: () => console,
    //   window: () => window,
  }
}
</script>


<style lang="scss" scoped>
.menu {
  flex: auto;
  background: transparent;
  flex: 0 1 auto;
  padding-bottom: 0.3rem;
}

.menu__icon {
  display: none;
}

@media (max-width: 1024px) {
  .menu {
    padding-bottom: 0;
    // position: relative;
    flex: 0 1 auto;
  }

  .menu__icon {
    display: block;
    background: url('@/assets/icons/menu.svg') no-repeat center center;
    cursor: pointer;
    background-size: 3rem;
    padding: 0 2rem 2rem 2rem;
    height: 1rem;
  }

  .menu__nav {
    display: none;
  }

  .menu__nav--open {
    display: block;
    // position: absolute;
    // right: -50%;
  }
}

a.nuxt-link-active,
.menu li {
  color: #fff;

  :hover {
    color: grey;
    cursor: pointer;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

li {
  font-family: "Gilroy-Medium";
  color: #fff;
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  height: auto;
}

nav {
  padding: 0;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: grey;
}

li.highlighted {
  border: 2px transparent solid;
  border-radius: 0.3rem;
  color: red;
  background-color: #fff;
  padding: 0.25rem 0.6rem;
  text-align: center;

  a:hover {
    color: pink;
  }
}
</style>
