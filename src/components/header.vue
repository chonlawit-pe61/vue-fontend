<template>
  <div class="bg-header bg-cover h-[43rem] bg-center">
    <Navbar />
    <h1 class="text-7xl uppercase text-white text-center">We are creatives</h1>
    <div class="flex justify-center mt-[50px]">
      <font-awesome-icon
        icon="fa-solid fa-arrow-down"
        class="text-white text-6xl"
      />
    </div>
  </div>
</template>
<script>
import Navbar from "./navbar.vue";
export default {
  name: "headerPage",
  components: {
    Navbar,
  },
};
</script>
<style></style>
