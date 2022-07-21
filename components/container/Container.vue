<template>
  <div class="pl-9 pt-9">
    <div>
      <img src="../../assets/icons/toggle-icon.svg" alt="toggle" @click="toggle">
    </div>
    <slot />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "Container",
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'changeOrderInformationState'
    }),
    toggle() {
      this.$store.commit('changeOrderInformationState', this.$store.state.isOrderInformationOpen)
    }
  },
}
</script>

<style scoped>

</style>
