<template>
  <section class="dropDownWrapper" :class="{ 'dropDownMenuWrapper--noTitle': !menuTitle }">

    <span class="dropDownButton" ref="menu" @click="toggle">
      {{ menuTitle }}
    </span>

    <div class="iconWrapper" :class="{ 'iconWrapper--noTitle': !menuTitle }">
      <div class="bar1" :class="{ 'bar1--open': !!isOpen }" />
      <div class="bar2" :class="{ 'bar2--open': !!isOpen }" />
      <div class="bar3" :class="{ 'bar3--open': !!isOpen }" />
    </div>

    <section class="dropdown" v-if="!!isOpen">
      <div class="menuArrow" />
      <slot />
    </section>

  </section>

</template>

<script>
export default {
  props: ["menuTitle"],
  data: {
    isOpen: false
  },
  methods: {
    toggle: function() {
      const closeListener = (e) => {
        let _this = this
        if (_this.catchOutsideClick(e, _this.$refs.menu))
          window.removeEventListener('click', closeListener), _this.isOpen = false
      }
      window.addEventListener('click', closeListener)

      isOpen = !isOpen
    },
    catchOutsideClick(event, dropdown) {
      if (dropdown == event.target)
        return false
      if (!!this.isOpen && dropdown != event.target)
        return true

    }
  },
}
</script>

<style lang="scss" scoped>
.dropDownWrapper {
  position: relative;
  border-radius: 8px;
  background: transparent;

  * {
    box-sizing: border-box;
    text-align: left;
  }

  .dropDownMenu {
    border: none;
    font-size: inherit;
    background: none;
    outline: none;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 70px 0 20px;
    margin: 0;
    line-height: 1;
    width: 100%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
  }


  @media (max-width: 1024px) {
    .iconWrapper {
      width: 25px;
      height: 25px;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 1;

      .bar1 {
        width: 100%;
        max-width: 28px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 9999px;
        transform: translate(-50%, calc(-50% - 8px));
        transition: all 0.2s ease;
      }

      .bar1--open {
        transform: translate(-50%, -50%) rotate(45deg);
        margin-top: 0;
        background: red;
      }

      .bar2 {
        width: 100%;
        max-width: 28px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 9999px;
        opacity: 1;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
      }

      .bar2--open {
        opacity: 0;
      }

      .bar3 {
        width: 100%;
        max-width: 28px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 9999px;
        transform: translate(-50%, calc(-50% + 8px));
        transition: all 0.2s ease;
      }

      .bar3--open {
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        background: red;
      }
    }

    .iconWrapper--noTitle {
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: auto;
      height: auto;
      transform: none;
    }
  }

  .dropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    min-width: 300px;
    min-height: 10px;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 10px 10px 0 0 rgba(black, .03);
    background: white;
    padding: 10px 30px;
    animation: menu 0.3s ease forwards;

    .menuArrow {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -10px;
      left: 20px;
      border-left: 1px solid #eee;
      border-top: 1px solid #eee;
      background: white;
      transform: rotate(45deg);
      border-radius: 4px 0 0 0;
    }

    .option {
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      cursor: pointer;
      position: relative;
      z-index: 2;

      &:last-child {
        border-bottom: 0;
      }

      * {
        color: inherit;
        text-decoration: none;
        background: none;
        border: 0;
        padding: 0;
        outline: none;
        cursor: pointer;
      }

    }

    .desc {
      opacity: 0.5;
      display: block;
      width: 100%;
      font-size: 14px;
      margin: 3px 0 0 0;
      cursor: default;
    }

  }

  @keyframes menu {
    from {
      transform: translate3d(0, 30px, 0)
    }

    to {
      transform: translate3d(0, 20px, 0)
    }
  }
}

.dropDownMenuWrapper--noTitle {
  padding: 0;
  width: 60px;
  height: 60px;
}
</style>
