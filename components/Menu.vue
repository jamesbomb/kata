<template>
  <section class="menu">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/viaggi">Viaggi</NuxtLink>
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
          <ProfileSelect />
        </li>
      </ul>
    </nav>
  </section>
</template>


<style lang="scss">

.menu {
  background: transparent;
}

a.nuxt-link-active {
  color: white;

  :hover {
    color: grey;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  font-family: "Gilroy-Black";
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
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
  border: 2px none solid;
  border-radius: 0.3rem;
  color: red;
  background-color: white;
  padding: 0.25rem 0.6rem;
  vertical-align: center;
  a:hover {
    color: pink;
  }
}
</style>
