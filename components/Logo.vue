<template>
  <LogoSVG class="logo">
    <svg-icon icon="search" :hasFill="true"></svg-icon>
    <!-- <img src="../static/logo.svg" /> -->
  </LogoSVG>
</template>

<style lang="scss">
.logo {
  animation: 1s show;
  margin: auto;
  display: block;
}

@keyframes show {
  0% {
    opacity: 0;
  }
}
</style>

<script>
import LogoSVG from '../static/logo.svg';
import SvgIcon from './SvgIcon.vue';

export default {
  components: { LogoSVG, 'svg-icon': SvgIcon, },
}
</script>

