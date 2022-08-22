<template>
  <section id="menu" class="menu">
    <nav>
      <ul>
        <li>
          <dropdown-menu menu-title="Viaggi" icon="chevron" />
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
import Profile from "../Menu/Profile.vue";
import DropdownMenu from '../Menu/DropdownMenu.vue';

export default {
  name: 'Menu',
  components: { Profile, DropdownMenu},
  data: {
    show: false
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

@media (max-width: 1024px) {
  .menu {
    display: none;
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
