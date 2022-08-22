<template>
  <div>
    <Header />
    <TravelList />
  </div>
</template>

<script>

import Header from "~/components/Header.vue";
import TravelList from "@/components/TravelList.vue";

export default {
  name: 'Index',
  components: { Header, TravelList }
}
</script>
