<template>
  <div class="app">
    <div class="app-header">
      <button class="sidebar-toggle"
        v-bind:class="{active: isToggle}"
        v-on:click="toggle"
      >
        <icon name="list"></icon>
        <icon name="close"></icon>
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
        'button',
        'layout',
        'icon',
        'group',
        'cell',
        'switch',
        'radiolist',
        'checklist',
        'checker',
        'tab',
        'button-tab',
        'input',
        'selector',
        'picker',
        'modal',
        'toast'
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
