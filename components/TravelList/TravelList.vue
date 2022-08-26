<template>
  <div class="travelList__wrapper">
    <Tabs class="travelList__tabs">
      <Tab v-for="(place, index) in places" :name="place.name" :selected="index === 0" :key="place.name">
        <input type="hidden" :value="place.name.toLowerCase()" :model="activeLocation" />
        <div class="travelList__sectionTitle"><a :href="place.link"><span class="travelList__sectionTitleText">{{
            place.sectionTitle
        }}</span><span class="travelList__arrowIcon"></span></a>
        </div>
        <div class="travelList__sectionDescription"><span>{{ place.description }}</span></div>
      </Tab>
    </Tabs>
    <div class="travelList__tips travelList__tripsTrending">
      <h2>Trending tips</h2>
      <ul class="travelList__tipsGrid">
        <li
          v-for="tip in locations?.filter(item => item.primaryDestination.primaryContinent.slug.includes('europa')).slice(0, 8)"
          :key="tip.id">
          <a :href="tip.primaryDestination?.primaryContinent.slug">
            <div class="travelList__tipSingle">
              <img
                :src="require(`@/mock/assets${tip.thumbnailImage?.desktop?.thumbnailUrl !== undefined ? tip.thumbnailImage?.desktop?.thumbnailUrl : '/thumbnails/no-image.jpg'}`)"
                :alt="tip.slug" class="travelList__tipsImg" />
              <div class="travelList__tipsContent">
                <h3>{{ tip.title }}</h3>
                <span>{{ tip.numberOfDays }} giorni</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- <div class="travelList__trips"><pre>{{JSON.stringify(data, null, 4)}}</pre></div> -->
    <div class="travelList__trips travelList__tripsTips">
      <input type="text" placeholder="Cerca viaggi in Europa" />
      <ul class="travelList__tipsGrid">
        <li
          v-for="tip in locations?.filter(item => item.primaryDestination.primaryContinent.slug.includes('europa')).slice(8, 24)"
          :key="tip.id">
          <a :href="tip.primaryDestination?.primaryContinent.slug">
            <div class="travelList__tipSingle">
              <div class="travelList__tipsContent">
                <h3>{{ tip.title }}</h3>
                <span>{{ tip.numberOfDays }} giorni</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>

</style>

<script>
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';
import { BASE_URL } from "@/utils/utils";
import axios from 'axios'

export default {
  name: 'TravelList',
  components: {
    Tabs,
    Tab,
  },
  data() {
    return {
      locations: undefined,
      activeLocation: undefined
    }
  },
  props: {
    places: {
      type: Array
    }
  },
  mounted() {
    axios
      .get(BASE_URL + 'data')
      .then(response => {
        this.locations = response.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
    setActiveLocation(loc, event) {
      this.activeLocation = event.target.value
    }
  }
}
</script>

<style lang="scss">
.travelList__wrapper {
  font-family: "Gilroy-Medium";
  padding: 3rem 12rem 0;
  justify-content: center;
  flex-flow: row nowrap;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.3fr auto 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "travelList__tabs travelList__tabs travelList__tabs"
    "travelList__tips travelList__tips travelList__tips"
    "travelList__trips travelList__trips travelList__trips";
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: 1.7rem;
  }
}

.travelList__tabs {
  grid-area: travelList__tabs;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
  flex: 1 1 100%;
}

.travelList__tips {
  grid-area: travelList__tips;
  flex: 1 1 100%;
  justify-content: flex-start;
  display: flex;
  padding: 2rem 0;
  border-bottom: 2px solid #efefef;
  flex-flow: column;

  &>h2 {
    padding-bottom: 2.5rem;
  }
}

.travelList__trips {
  grid-area: travelList__trips;
  padding: 3rem 0;
  display: flex;
  flex-flow: row wrap;

  .travelList__tipsContent {
    padding-left: 0;
    font-size: 0.9rem;
  }

  input {
    background: url('@/assets/icons/search-dark.svg') no-repeat 0.5rem center;
    background-size: 1.8rem;
    border: 2px solid #efefef;
    width: 100%;
    border-radius: 0.4rem;
    padding: 0.6rem 2.7rem;
    font-size: 1.3rem;
    line-height: 1.5rem;
    flex: 1 1 100%;
    margin-bottom: 2.5rem;
  }
}

.travelList__tipsGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 2rem;
  align-content: flex-start;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }
}

.travelList__tipSingle {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.travelList__tipsImg {
  border-radius: 0.7rem;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
}

.travelList__tipsContent {
  padding-left: 1rem;
  font-size: 0.9rem;

  &>h3 {
    font-size: 1.2rem;
    font-family: "Gilroy-Medium";
    margin-bottom: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &>span {
    font-size: 0.9rem;
  }
}

.travelList__sectionTitle {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-right: 1rem;

  a,
  a:active,
  a:visited {
    font-family: 'Gilroy-Black';
    text-decoration: none;
    color: rgb(47, 165, 173);
    background: url('@/assets/icons/globe.svg') no-repeat left 0;
    padding-top: 4rem;
    background-size: 3.5rem;
    position: relative;

    .travelList__arrowIcon {
      background: url('@/assets/icons/rightArrow.svg') no-repeat center right;
      padding: 0.5rem;
    }
  }
}

.travelList__sectionDescription {
  flex: 3;
}

@media (max-width: 1024px) {

  .travelList__sectionDescription {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  .tabs ul li a {
    padding: 0.8em 0em;
    font-size: 1.4rem;
  }

  .tabs .is-active a:after {
    top: 3.9rem;
  }

  .travelList__sectionTitle {
    padding: 0;
  }

  .travelList__sectionTitle a {
    padding: 3rem;
    background-size: 4rem;
  }

  .travelList__sectionTitle span {
    display: none;
  }

  .travelList__wrapper {
    padding: 3rem 2rem 0;
  }

  .travelList__tripsTrending .travelList__tipsGrid {
    overflow-y: auto;
    overflow-x: scroll;
    padding: 1rem 0;
    padding-right: 2rem;
  }

  .travelList__tripsTips .travelList__tipsGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .travelList__tripsTips .travelList__tipsGrid li {
    border-radius: 0.7rem;
    border: 1px solid #ccc;
    padding: 0.7rem;
    height: -webkit-fill-available;
  }

  .travelList__tripsTips .travelList__tipsGrid li h3 {
    -webkit-line-clamp: 2;
  }
}
</style>
