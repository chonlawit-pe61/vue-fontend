<template>
  <div class="bg-[#458C7E] flex text-center justify-center text-white p-[2rem]">
    <div>
      <h1 class="text-center pt-[2rem] font-bold text-2xl">SunnySide</h1>
      <ul class="flex justify-center py-[2rem] flex-wrap">
        <li class="px-[2rem]">
          <a href="#">About</a>
        </li>
        <li class="px-[2rem]">
          <a href="#">Services</a>
        </li>
        <li class="px-[2rem]">
          <a href="#">Projects</a>
        </li>
      </ul>
      <ul class="grid grid-cols-4 place-content-center">
        <li class="mx-[1rem]">
          <a href="#"
            ><font-awesome-icon icon="fa-brands fa-square-facebook" />
          </a>
        </li>
        <li class="mx-[1rem]">
          <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /> </a>
        </li>
        <li class="mx-[1rem]">
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /> </a>
        </li>
        <li class="mx-[1rem]">
          <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /> </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "footerComponent",
};
</script>
<style></style>
