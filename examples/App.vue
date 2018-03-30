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
        <router-link
          v-for="(item,index) in compos"
          :key="index"
          :to="`/${item}`"
          tag="li">{{item}}</router-link>
      </ul>
      <div class="main">
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
      chosen: 'male',
      isToggle: false,
      compos: [
        'layout',
        'button',
        'group',
        'cell',
        'switch',
        'radiolist',
        'checklist',
        'checker',
        'tab',
        'button-tab',
        'input',
        'selector'
      ]
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
