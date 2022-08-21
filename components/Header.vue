<template>
  <header class="header">
    <div class="logoBox">
      <NuxtLink to="/" class="headerLogo">
        <Logo />
      </NuxtLink>
      <input class="logoText" placeholder="Cerca su Unbranded" />
    </div>
    <Menu class="headerMenu" />
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  padding: 3rem 10rem 60vh 10rem;
  justify-content: center;
  flex-flow: row nowrap;
  background: url('../static/cover-desktop.svg')  no-repeat center center;
  background-size: 100%;

  a.nuxt-link-active {
    padding: 2rem 1rem;
  }
}

.logoBox {
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
}

input {
  all: unset;
}

.logoText {
  font-family: 'Gilroy-Black';
  // background-image: image-url('../assets/icons/search.svg');

  &::before {
    // content: url(../assets/icons/search.svg);
    font-size: 16px;
  }

  // .h-6.w-6 {
  //   width: 16px;
  //   height: 16px;
  // }
}

.headerLogo {
  flex: 2;
}

.headerMenu {
  flex: auto;
}
</style>

<script>
import Logo from './Logo.vue';
import Menu from './Menu/Menu.vue';

export default {
  name: 'Header',
  components: { Logo, Menu }
}
</script>
