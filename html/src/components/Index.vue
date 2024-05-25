<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'
</script>

<template>
 <div class="hud" :style="{ top: hudTop, left: hudLeft }">
  <div class="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
    <RouterView/>  <!-- here is where our router sites are  -->
  </div>
  
</div>
</template>


<style>
.hud {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>

<script>
// your js code
</script>