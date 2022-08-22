<template>
  <div class="logo__container">
    <NuxtLink to="/" class="logo">
      <Logo />
    </NuxtLink>
    <div class="logo__separator"></div>
    <input class="logo__input" placeholder="Cerca su Unbranded" />
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'LogoContainer',
  components: { Logo }
}
</script>

<style lang="scss">
.logo__container {
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  flex: 0 1 auto;

}

.logo__separator {
  width: 2px;
  height: 0.2rem;
  display: block;
  background: #fff;
  margin-right: 0.8rem;
  padding: 0.5rem 0 0.8rem 0;
  margin-bottom: 0.3rem;
}

.logo {
  flex: 2;
}

.logo__input {
  font-family: 'Gilroy-Medium';
  font-size: 1.2rem;
  color: #fff;
  background: url('@/assets/icons/search.svg') no-repeat left 1.3rem;
  background-size: 1.5rem;
  padding-left: 1.8rem;
  line-height: 4rem;
  padding-bottom: 0.3rem;

  &::placeholder {
    color: #fff;
  }
}
</style>

