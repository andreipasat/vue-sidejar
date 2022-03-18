<script>
import { RouterView } from "vue-router";
import SidebarVue from './components/Organisms/Sidebar.vue';
export default {
  components: {
    SidebarVue
  }
}
</script>

<template>
  <div class="relative min-h-screen flex">

    <div class="bg-white w-72">
      <sidebar-vue></sidebar-vue>
    </div>
    
    <div class="p-12 flex-1">
        <RouterView />
    </div>
    
  </div>
</template>

