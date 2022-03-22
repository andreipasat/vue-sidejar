<script>
import { RouterView } from "vue-router";
import SidebarVue from './components/Organisms/Sidebar.vue';
import SidebarIconsVue from "./components/Organisms/SidebarIcons.vue";
import { computed } from "vue";
export default {
  data() {
    return {
      toggleSidebar: false
    }
  },
  provide() {
    return {
      // explicitly provide a computed property
      sidebarToggle: computed(() => this.toggleSidebar)
    }
  },
  components: {
    SidebarVue, SidebarIconsVue
  }
}
</script>

<template>
  <div class="relative min-h-screen flex">

    
    <div class="bg-white w-72" v-if="toggleSidebar">
        <sidebar-vue @toggle-sidebar="toggleSidebar = !toggleSidebar"></sidebar-vue>
    </div>
    
    
    <div class="bg-white w-[107]" v-if="!toggleSidebar">
      <sidebar-icons-vue @toggle-sidebar="toggleSidebar = !toggleSidebar"></sidebar-icons-vue>
    </div>
    
    
    
    <div class="p-12 flex-1 max-w-6xl">
        <RouterView />
    </div>
    
  </div>
</template>
