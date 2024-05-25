<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Index from './components/Index.vue';

const sites = ['/', 'testsite2']; // insert your sites here if you want to use the uncommented things at the bottom
let currentIndex = 0;

const displayUI = {
  index: ref(false),
  testite1: ref(false),
  testsite2: ref(false)
}
const router = useRouter(); // Define the router instance correctly

// Use onMounted to ensure the Vue instance is fully mounted before pushing
onMounted(() => {
  router.push('/'); // Navigate to the home page initially
  window.addEventListener('message', (event) => {


    if (event.data.switch != null ){
      currentIndex = currentIndex + 1;

if (currentIndex > sites.length - 1) {
  currentIndex = 0;
}
    router.push(sites[currentIndex]);
  }
    if (event.data.type != null) { // if event.data.type.value exists
       displayUI[event.data.type].value = !displayUI[event.data.type].value; // setting the displayui.index to the opposite displayui.index if it exists in the nui message 
    }
    // router.push(sites[currentIndex]); // pushes the current index of site
  });
});
</script>


<!-- here we make the Index visible if displayUI.Index is == true -->
<template>
  <Index v-if="displayUI.index.value"></Index> 
</template>
