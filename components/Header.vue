<template>
  <div class="header">
    <div class="header__LogoMenu">
      <div class="header__LogoContainer">
        <NuxtLink to="/" class="header__Logo">
          <Logo />
        </NuxtLink>
        <div class="sep"></div>
        <input class="header__logoInput" placeholder="Cerca su Unbranded" />
      </div>
      <Menu class="header__Menu" />
    </div>
    <div class="header__Hero">
      <h1>Tutte le nostre destinazioni</h1>
      <h3>Unbranded ti porta alla scoperta del mondo</h3>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: grid;
  padding: 3rem 1rem 0;
  justify-content: center;
  flex-flow: row nowrap;
  background: url('../static/cover-desktop.svg') no-repeat top center;
  background-size: cover;
  align-items: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 1fr;
  gap: 0px 0px;
  align-items: start;
  align-items: start;
  grid-template-areas:
    "header__logoMenu header__logoMenu header__logoMenu"
    "header__Hero header__Hero header__Hero"
    "header__Hero header__Hero header__Hero";

  a.nuxt-link-active {
    padding: 2rem 1rem;
  }
}

.header__LogoMenu {
  grid-area: header__logoMenu;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.header__Hero {
  grid-area: header__Hero;
  font-family: "Gilroy-Medium";
  color: #fff;
  padding-top: 12rem;
  padding-bottom: 20rem;

  &>h1,
  &>h3 {
    flex: 1;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  &>h1 {
    font-family: "Gilroy-Black";
    font-size: 3rem;
  }

  &>h3 {
    font-family: 'Gilroy-Medium';
    font-size: 1.6rem;
  }
}

.header__LogoContainer {
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  flex: 0 1 auto;

  .sep {
    width: 2px;
    height: 0.2rem;
    display: block;
    background: #fff;
    margin-right: 0.8rem;
    padding: 0.5rem 0 0.8rem 0;
    margin-bottom: 0.3rem;
  }
}

input {
  all: unset;
}

.header__logoInput {
  font-family: 'Gilroy-Medium';
  font-size: 1.2rem;
  color: #fff;
  background: url('../assets/icons/search.svg') no-repeat left 1.3rem;
  background-size: 1.5rem;
  padding-left: 1.8rem;
  line-height: 4rem;
  padding-bottom: 0.3rem;

  &::placeholder {
    color: #fff;
  }
}

.header__Logo {
  flex: 2;
}

.header__Menu {
  flex: auto;
  background: transparent;
  flex: 0 1 auto;
  padding-bottom: 0.3rem;
}

@media (max-width: 1024px) {
  .header__Menu {
    display: none;
  }

}
</style>

<script>
import Logo from './Logo.vue';
import Menu from './menu/Menu.vue';

export default {
  name: 'Header',
  components: { Logo, Menu }
}
</script>
