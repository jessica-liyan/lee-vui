<template>
  <div class="app">
    <div class="app-header">
      <button class="sidebar-toggle"
        v-bind:class="{active: isToggle}"
        v-on:click="toggle"
      >
        <i class="iconfont icon-list"></i>
        <i class="iconfont icon-close"></i>
      </button>
      <h1>vui</h1>
    </div>
    <div class="app-info">
      <ul class="aside"
        v-bind:class="{active: isToggle}"
        v-on:click="isToggle = false"
      >
        <router-link to="/button" tag="li">button</router-link>
      </ul>
      <div class="main">
        <vue-markdown>
          <ly-button></ly-button>
        </vue-markdown>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isToggle: false
    }
  },
  methods: {
    toggle: function () {
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<style>
</style>
