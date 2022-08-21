<template>
  <section>
    <nav class="navigation">
      <ul>
        <li>
          <dropdown-menu menu-title="Viaggi"></dropdown-menu>
          <section :key="places.indexOf(place)" v-for="place in places" class="option">
            <NuxtLink class="place">{{ place }}</NuxtLink>
          </section>
        </li>
        <li>
          <NuxtLink to="/come-funziona">Come funziona</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/fasce-eta">Fasce d'età</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/offerte">Offerte</NuxtLink>
        </li>
        <li class="highlighted">
          <NuxtLink to="/turni-confermati">Turni confermati</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import Profile from "./Profile.vue";
import DropdownMenu from "../DropdownMenu.vue";

export default {
  components: { Profile },
  data: {
    places: ['Europa', 'Asia', 'Africa', 'America', 'Oceania'],
    active: false
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>


<style lang="scss" scoped>
a.nuxt-link-active,
.navigation li {
  color: #fff;

  :hover {
    color: grey;
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
