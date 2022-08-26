<template>
  <div class="header">
    <div class="header__LogoMenu">
      <LogoContainer />
      <Menu :items="placesProp" :profile-items="profileLinksProp"></Menu>
    </div>
    <div class="header__Hero">
      <h1>Tutte le nostre destinazioni</h1>
      <h3>Unbranded ti porta alla scoperta del mondo</h3>
    </div>
  </div>
</template>

<script>
import LogoContainer from './Logo/LogoContainer.vue';
import Menu from '@/components/Menu/Menu.vue';

export default {
  name: 'Header',
  components: { LogoContainer, Menu },
  props: {
    places: {
      type: Array
    },
    profileLinks: {
      type: Array
    },
  },
  data() {
    return {
      placesProp: this.places,
      profileLinksProp: this.profileLinks
    }
  }
}
</script>

<style lang="scss">
.header {
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

  // a.nuxt-link-active {
  //   padding: 2rem 1rem;
  // }
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
</style>
