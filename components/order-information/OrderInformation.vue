<template>
  <div class="bg-[#F6F6F6] border-[1px] border-[#CCCCCC] w-[309px] py-[27px] px-[29px]"
       :class="{'hidden':this.$store.state.isOrderInformationOpen}">
    Order Information

  </div>
</template>

<script>
export default {
  name: "OrderInformation",
  computed: {
    isOrderInformationOpen () {
      return this.$store.state.isOrderInformationOpen
    }
  },
}
</script>

<style scoped>

</style>
