<template>
  <nav class="bg-[#EDEDED] w-[85px] flex flex-col items-center">
    <div class="px-3 pt-4 mb-4">
      <img src="../../assets/icons/logo.svg" alt="logo" />
    </div>
    <div v-for="item in navItems" :key="item.id"
         class="cursor-pointer h-16 w-full flex items-center justify-center"
         :class="{'bg-[#F6F6F6]':isActive===item.id}"
         @click="renderPage(item.id)"
    >
      <img :src="item.icon" :alt="item.id" />
    </div>
  </nav>
</template>

<script>
import {navbar} from "assets/static/navbar";

export default {
  name: "Navbar",
  data() {
    return {
      navItems: null,
      isActive: 0,
    }
  },
  methods: {
    renderPage(id) {
      this.isActive=id;
      
    }
  },
  created() {
    this.navItems = navbar
  }
}
</script>

<style scoped>

</style>
