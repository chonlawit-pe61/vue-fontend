<template>
  <div
    class="flex flex-col md:flex-row lg:flex-row justify-between px-[10rem] py-[3rem]"
  >
    <div>
      <h1 class="text-white font-bold text-3xl uppercase">SunnySide</h1>
    </div>
    <div>
      <ul class="flex text-white items-center flex-col md:flex-row lg:flex-row">
        <li class="mx-[2rem] text-[1.1rem] my-[10px]">
          <a href="">About</a>
        </li>
        <li class="mx-[2rem] text-[1.1rem] my-[10px]">
          <a href="">Service</a>
        </li>
        <li class="mx-[2rem] text-[1.1rem] my-[10px]">
          <a href="">Projects</a>
        </li>
        <li
          class="mx-[2rem] text-[1.1rem] my-[10px] bg-white rounded-full w-[100px] h-[45px] text-black flex justify-center items-center"
        >
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarComponent",
};
</script>
<style></style>
